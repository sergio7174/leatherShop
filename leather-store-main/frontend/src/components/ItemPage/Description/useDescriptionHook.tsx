
import { useState } from 'react';
import './description.scss';
import { useAddToCart } from '../../../hooks/useAddToCart';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';



export const useDescriptionHook= () =>{

    const addItemToCart = useAddToCart();
    const navigate = useNavigate();
    const { user } = useAppSelector((state) => state.auth);
  
    const [openSelectLeatherColor, setOpenSelectLeatherColor] = useState(false);
    const [openSelectThreadsColor, setOpenSelectThreadsColor] = useState(false);
  
    const [leatherType, setLeatherType] = useState('Crazy Horse');
    const [colors, setColors] = useState({
      leatherColor: 'Black',
      threadsColor: 'Black',
    });

return{
    addItemToCart,
    navigate,
    user,
    openSelectLeatherColor, 
    setOpenSelectLeatherColor,
    openSelectThreadsColor, 
    setOpenSelectThreadsColor,
    leatherType, 
    setLeatherType,
    colors, 
    setColors,
};
}