import React from 'react';
import './register.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';
import { register } from '../../features/auth/authSlice';
import Input from '../../components/UI/Input/Input';
import Toast from '../../components/UI/Toast/Toast';
import { updateCart } from '../../features/cart/cartSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRegisterHook } from '../../hooks/auth/useregisterHook';
import { onSubmitRegister } from '../../functions/auth/onSubmitRegister';

const Register = () => {

  const {
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
} = useRegisterHook();


  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      onSubmitRegister(dispatch,register, formData, updateCart, navigate, setToastText, setOpenToast);
  };

  if (isLoading) return <h2>Loading....</h2>;

  return (
    <>
      {openToast && (
        <Toast
          text={toastText}
          type="error"
          opened={openToast}
          setOpened={setOpenToast}
        />
      )}
      <div className="register">
        <div className="register__container" style={{backgroundColor:'white',background:'rgba(220, 213, 193, 0.95)', border: "0.3em double brown"}}>
         <br/>
          <br/> 
          <h2 className="register__container__heading">Registration</h2>
          <form className="register__container__form" onSubmit={onSubmit}>
            <div className="register__container__form__box" >
              <Input
                name="name"
                label="Name"
                type="text"
                value={name}
                onChange={onChange}
                placeholder="Name"
                required
              />
            </div>
            <div className="register__container__form__box">
              <Input
                name="email"
                label="Email"
                type="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
                required
              />
            </div>

            {/*** align input with image eye to see password */}
            <div style={{display:'flex', flexDirection:'row', minWidth:'65%', position:'relative',left:'4.7%',marginRight:'2%'}}
            className="register__container__form__box" >
            <div  className="register__container__form__box">
              <Input
                name="password"
                label="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              </div>
              
          <div>
            {/***img eye to see the password or hide it */}
          <Button onClick={() => setShowPassword(!showPassword)}   className="transBackground">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
          </div>
             </div>
             {/************** */}
           {/*** align input with image eye to see password */}
           <div style={{display:'flex', flexDirection:'row', minWidth:'65%', position:'relative',left:'4.7%',marginRight:'2%'}}
            className="register__container__form__box" >
            <div  className="register__container__form__box">
              <Input
                name="passwordConfirm"
                label="passwordConfirm"
                type={showPasswordcp ? 'text' : 'password'}
                value={passwordConfirm}
                onChange={onChange}
                placeholder="Password Confirm"
              />
              </div>
              
          <div>
            {/***img eye to see the password or hide it */}
          <Button onClick={() => setShowPasswordcp(!showPasswordcp)}   className="transBackground">
            {showPasswordcp ? <FaEyeSlash /> : <FaEye />}
          </Button>
          </div>
             </div>


             {/************** */}
            
            <div className="register__container__form__box">
              <Input
                name="phone"
                label="Phone"
                type="text"
                value={phone}
                onChange={onChange}
                placeholder="Phone"
                required
              />
            </div>
            <div className="register__container__form__bottom">
              <Button type="submit" color="grey" style={{width:'8em', height:'2em'}}>Register</Button>
              <p>
              Already registered?{' '}
                <Link to={LOGIN_ROUTE} className="redLink">
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <br/>
        <br/>
          <br/>
    </>
  );
};

export default Register;
