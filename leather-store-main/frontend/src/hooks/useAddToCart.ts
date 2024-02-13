import { useAppDispatch, useAppSelector } from '../hooks';
import { addToCart, addToCartLS } from '../features/cart/cartSlice';
import { ICartItem } from '../types/data';

export function useAddToCart() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const addItemToCart = (item: ICartItem) => {
    alert('ESstoy en useAddToCarts - line 10 - antes de addItemToCart, user: '+user?.data.user.name);
    if (user) {
      alert('Estoy en useAddToCarts - line 12 - user: '+user?.data.user.name);
      dispatch(addToCart(item))
        .unwrap()
        .then()
        .catch((error) => console.log(error, 'ERROR'));
    }
    if (!user) {
      dispatch(addToCartLS(item));
    }
  };
  alert('ESstoy en useAddToCarts - line 20 - antes de addItemToCart');
  return addItemToCart;
}

export default useAddToCart;
