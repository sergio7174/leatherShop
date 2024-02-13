import { useState } from 'react';
import '../../pages/Login/Login';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';


export const useLoginHook = () => {

 // local const formData(email="", password: '')
 const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [openToast, setOpenToast] = useState(false);
  const [toastText, setToastText] = useState('');
  /***local const to show password or hide password */
  const [showPassword, setShowPassword] = useState(false);

  // local const from formData
  const { email, password } = formData;

  return {
    dispatch,
    navigate,
    formData, 
    setFormData,
    openToast, 
    setOpenToast,
    toastText, 
    setToastText,
    email, 
    password,
    showPassword, 
    setShowPassword,
};


};