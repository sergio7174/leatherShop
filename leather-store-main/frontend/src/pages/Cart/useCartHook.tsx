import { useState } from 'react';
import './cart.scss';
import useCreateOrder from '../../hooks/useCreateOrder';
import { useAppSelector } from '../../hooks';
import { useGetAllAddresses } from '../../hooks/useGetAllAddresses';

export const useCartHook = ()=>{

    const { user } = useAppSelector((state) => state.auth);
    const { isLoading, cart } = useAppSelector((state) => state.cart);
    const { isLoading: isOrderLoading, status } = useAppSelector(
      (state) => state.order
    );
    const { addresses } = useGetAllAddresses();
    const createOrder = useCreateOrder();
  
    const [openModal, setOpenModal] = useState(false);
    const [openSelectAddress, setOpenSelectAddress] = useState(false);
    const [currentAddressIndex, setCurrentAddressIndex] = useState(0);
    

return {
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
};
}