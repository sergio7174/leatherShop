import './login.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { REGISTRATION_ROUTE } from '../../utils/consts';
import { login } from '../../features/auth/authSlice';
import Input from '../../components/UI/Input/Input';
import Toast from '../../components/UI/Toast/Toast';
import { updateCart } from '../../features/cart/cartSlice';
import { useLoginHook } from '../../hooks/auth/useloginHook';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { onSubmitLogin } from '../../functions/auth/onSubmitLogin';

const Login = () => {

  const {
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

} = useLoginHook();


  // function to get data from html input tag
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      // the data value from input tag its equal to target.name
      [target.name]: target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitLogin(dispatch,login, formData, updateCart, navigate, setToastText, setOpenToast);
  };

  return (
    <>
    {/***Send message - success or error */}
      {openToast && (
        <Toast
          text={toastText}
          type="error"
          opened={openToast}
          setOpened={setOpenToast}
        />
      )}
      <div className="login">
        <div className="login__container" style={{backgroundColor:'white',background:'rgba(220, 213, 193, 0.95)', border: "0.3em double brown"}}>
          <br/>
          <h2 className="login__container__heading">Login to your personal account</h2>
          {/***form begining */}
          <form className="login__container__form" onSubmit={onSubmit} >
              {/*** first input email */}
            <div className="login__container__form__box" >
              <Input
                name="email"
                label="Email"
                type="email"
                value={email}
                onChange={onChange}
                placeholder="Email"
              />
            </div>
            {/*** align input with image eye to see password */}
            <div style={{display:'flex', flexDirection:'row', minWidth:'65%', position:'relative',left:'4.7%',marginRight:'2%'}}className="login__container__form__box">
            <div className="login__container__form__box">
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
          <Button onClick={() => setShowPassword(!showPassword)}   className="transBackground" >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
          </div>
             </div>
         
            <div className="login__container__form__bottom">
              <Button type="submit" color="grey" style={{width:'8em', height:'2em'}}>Login </Button>
              <Link to={''}>Forgot your password?</Link>
              <Link to={REGISTRATION_ROUTE} className="redLink">
              Register
              </Link>
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

export default Login;
