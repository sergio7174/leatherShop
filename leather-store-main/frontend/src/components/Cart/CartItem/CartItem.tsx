import React, { useCallback, useState } from 'react';
import './cartItem.scss';
import { ReactComponent as Delete } from '../../../assets/icons/trash.svg';
import { ICartItem } from '../../../types/data';
import { useDeleteCartItem } from '../../../hooks/useDeleteCartItem';
import Quantity from '../../UI/Quantity/Quantity';
import Colors from '../../UI/Colors/Colors';
import Button from '../../UI/Button/Button';
import { useChangeQuantity } from '../../../hooks/useChangeQuantity';

type CartItemProps = {
  item: ICartItem;
};

  const CartItem = React.memo(({ item }: CartItemProps) => {

 /* const {
    deleteCartItem,
    changeItemQuantity,
    quantity, 
    setQuantity,
    increaseQuantity,
    reduceQuantity
} = useCartItemHook(item);*/

  const deleteCartItem = useDeleteCartItem();
  const changeItemQuantity = useChangeQuantity();

  const [quantity, setQuantity] = useState(item.quantity);
  const increaseQuantity = useCallback(
    (id: string) => {
      setQuantity(quantity + 1);
      changeItemQuantity(id, { quantity: quantity + 1 });
    },
    [quantity, changeItemQuantity]
  );

  const reduceQuantity = useCallback(
    (id: string) => {
      if (quantity === 1) {
        deleteCartItem(id);
        return;
      }
      setQuantity(quantity - 1);
      changeItemQuantity(id, { quantity: quantity - 1 });
    },
    [quantity, changeItemQuantity, deleteCartItem]
  );

  return (
    <div className="cart-item">
      <div className="cart-item__left">
        <img
          src={`http://localhost:5000/public/images/${item.imageCover}`}
          alt="Product"
          className="cart-item__left-img"
        />
        <div className="cart-item__left__info">
          <h2 className="cart-item__left__info-title">{item.name}</h2>
          <p>Skin type: {item.leather}</p>
          <Colors
            leatherColor={item.colors.leatherColor}
            threadsColor={item.colors.threadsColor}
          />
          <div className="cart-item__left__info__qty">
            <Quantity
              reduce={() => reduceQuantity(item._id!)}
              increase={() => increaseQuantity(item._id!)}
              quantity={quantity}
            />
            <p className="cart-item__left__info__qty-price">
              {item.price * quantity} $.
            </p>
          </div>
        </div>
      </div>
      <div className="cart-item__right">
        <div className="cart-item__right-remove">
          <Delete onClick={() => deleteCartItem(item._id!)} />
          <Button
            onClick={() => deleteCartItem(item._id!)}
            text="Delete"
            color="black"
          />
        </div>
      </div>
    </div>
  );
});

export default CartItem;
