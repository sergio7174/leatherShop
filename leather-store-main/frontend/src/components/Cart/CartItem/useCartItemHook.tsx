import { useCallback, useState } from 'react';
import './cartItem.scss';
import { useDeleteCartItem } from '../../../hooks/useDeleteCartItem';
import { useChangeQuantity } from '../../../hooks/useChangeQuantity';

export const useCartItemHook= (item:any) =>{

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
  
return {
    deleteCartItem,
    changeItemQuantity,
    quantity, 
    setQuantity,
    increaseQuantity,
    reduceQuantity
};

};