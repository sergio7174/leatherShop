import { useState, useCallback } from 'react';
import { IOrder } from '../../types/data';
import './cart.scss';
import { Link } from 'react-router-dom';
import CartItem from '../../components/Cart/CartItem/CartItem';
import SelectAddress from '../../components/Cart/SelectAddress/SelectAddress';
import Button from '../../components/UI/Button/Button';
import Back from '../../components/UI/Back/Back';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import { ICartItem } from '../../types/data';
import { USER_PROFILE_ROUTE } from '../../utils/consts';

import { useCartHook } from './useCartHook';

const Cart = () => {

    const {
      user,
      isLoading,
      cart,
      isOrderLoading, 
      status,
      addresses,
      createOrder,
      openModal, 
      setOpenModal,
      openSelectAddress, 
      setOpenSelectAddress,
      currentAddressIndex, 
      setCurrentAddressIndex,
     
} = useCartHook();

const [cartData, setCartData] = useState<IOrder>({
  items: [],
  user: {
    name: '',
    email: '',
    phone: '',
  },
  address: {
    city: '',
    address: '',
    zipcode: '',
  },
  status: '',
  total: 0,
});


  const setCart = useCallback(() => {
    if (cart && user && addresses[currentAddressIndex])
      setCartData({
        items: cart.items,
        user,
        address: addresses[currentAddressIndex],
        status: 'Awaiting payment',
        total: cart.total,
      });
  }, [cart, addresses, currentAddressIndex, user]);

  return (
    <>
      {openModal && (
        <Modal
          setOpen={setOpenModal}
          Content={
            isOrderLoading && cart?.items.length ? (
              <p className="cart__modal">We place an order...</p>
            ) : status === 'rejected' ? (
              <p className="cart__modal">
                An error has occurred! Please reload the page and
                Try again.
              </p>
            ) : (
              <p className="cart__modal">
                The order has been created! Go to
                Try again.{' '}
                <Link className="redLink" to={USER_PROFILE_ROUTE}>
                Personal Area.
                </Link>
              </p>
            )
          }
        />
      )}
      <div className="cart">
        <Back />
        <h1 className="cart__heading">Basket</h1>
        <div className="cart__container">
          {isLoading ? (
            <Spinner />
          ) : !cart || !cart.items.length ? (
            <p className="cart__container-empty">Cart is empty</p>
          ) : (
            <>
              <div className="cart__container__order">
                <div className="cart__container__order__items">
                  {cart.items.map((item: ICartItem) => (
                    <CartItem key={item._id} item={item} />
                  ))}
                </div>
                <div className="cart__container__order__total">
                  <p>Total: {cart.total} $.</p>
                </div>
              </div>
              {openSelectAddress && (
                <SelectAddress
                  setCurrentAddressIndex={setCurrentAddressIndex}
                  currentAddressIndex={currentAddressIndex}
                />
              )}
              <div className="cart__container__btn">
                <Button
                  onClick={() => {
                    if (openSelectAddress) {
                      createOrder(cartData);
                      setOpenModal(true);
                    } else {
                      setCart();
                      setOpenSelectAddress(true);
                    }
                  }}
                  text={openSelectAddress ? 'Order' : 'Placing an order'}
                  color="black"
                  big
                  animation={openSelectAddress}
                  disabled={
                    !openSelectAddress ? false : addresses.length ? false : true
                  }
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
