import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const useRegisterHook = () => {

/***local const to show password or hide password */
const [showPassword, setShowPassword] = useState(false);
const [showPasswordcp, setShowPasswordcp] = useState(false);

const [formData, setFormData] = useState({
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  phone: '',
});
const [openToast, setOpenToast] = useState(false);
const [toastText, setToastText] = useState('');

const { name, email, password, passwordConfirm, phone } = formData;

const dispatch = useAppDispatch();
const navigate = useNavigate();

const { isLoading } = useAppSelector((state) => state.auth);

return {
    dispatch,
    navigate,
    formData, 
    setFormData,
    openToast, 
    setOpenToast,
    toastText, 
    setToastText,
    name,
    email, 
    password,
    showPassword, 
    setShowPassword,
    showPasswordcp, 
    setShowPasswordcp,
    passwordConfirm, 
    phone,
    isLoading,
};



}