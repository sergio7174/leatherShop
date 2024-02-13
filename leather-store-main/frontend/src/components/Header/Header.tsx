import { useState } from 'react';
import './HeaderCss.scss';
import { Link, useLocation } from 'react-router-dom';
import {
  ADMIN_ROUTE,
  CART_ROUTE,
  CATALOG_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  USER_PROFILE_ROUTE,
  REGISTRATION_ROUTE,
} from '../../utils/consts';

import LogOutIcon from '../../assets/icons/logout03.png';
import SignUpIcon from '../../assets/icons/SIGNUP02.png';
import AdminIcon from '../../assets/icons/ADMIN02.png';
import CatalogIcon from '../../assets/icons/CATALOG01.jpeg';
import LogoSergio from '../../assets/img/SergioLogo.jpg';
import LoginIcon from '../../assets/icons/LOGIN03.png';
import cartleatherIcon from '../../assets/icons/CartLeather.png';
import AdminHeader from './AdminHeader';
import Badge from '../UI/Badge/Badge';
import useGetMyOrders from '../../hooks/useGetMyOrders';
import { useAppSelector } from '../../hooks';
import useGetCart from '../../hooks/useGetCart';
/****manejo del modal - to  logout option */
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import useLogout from '../../hooks/useLogout';

const Header = () => {

  const { role, user } = useAppSelector((state) => state.auth);
  const { myActiveOrders } = useGetMyOrders(user?.data.user.id);
  const { cart } = useGetCart();
  const location = useLocation();


  const [openModal, setOpenModal] = useState(false);
  const logoutUser = useLogout();

    return (
        <>
  {/****modal logout - begining block  *****/}
 
  {openModal && (
        <Modal
          setOpen={setOpenModal}
          Content={
            <>
              <p>Do you really want to leave?</p>
              <div className="modal__content__buttons">
                <Button
                  text="Yes"
                  color="grey"
                  onClick={() => {
                    logoutUser();
                    setOpenModal(false);
                  }}
                />
                <Button
                  text="No"
                  color="grey"
                  onClick={() => setOpenModal(false)}
                />
              </div>
            </>
          }
        />
      )}
{/****modal logout - End block  *****/}

   <header className="header">   

        {location.pathname.startsWith('/admin') && role === 'admin' ? (
          <AdminHeader />
          
        ) : (
  
<div className="navbar"> 
 {/*-- Navbar logo */}
 <div className="nav-header">
   <div className="nav-logo">
   <Link to={HOME_ROUTE}>
    
       <img src={LogoSergio} width="105" alt="logo"/>
       <div className="nav-links" style={{marginLeft:'0.3em', marginTop:'0.8em'}}>
          Home
       </div>

     </Link>
   </div>
 </div>

 {/*-- responsive navbar toggle button */}
 <input type="checkbox" id="nav-check"/>
 <div className="nav-btn">
   <label htmlFor="nav-check">
     <span></span>
     <span></span>
     <span></span>
   </label>
 </div>


 {/*-- Navbar items */}
 <div className="nav-links dropnav">

{/****begin block Showuser Profile *************/}
{(role)  && (

<div className="nav-links" style={{marginRight:'6em'}}>
<Link to={USER_PROFILE_ROUTE} className="link-cart">
<h4>Welcome: {`${user?.data.user.name} ..!`}</h4>
</Link>
</div>
)}

{/****End block user Profile *************/}

{/****begin block user Profile *************/}
{(role==='user')  && (

<div className="nav-links">

<Link to={USER_PROFILE_ROUTE} className="link-cart">
  <div style={{display: 'flex', flexDirection:'row'}}>
  <div>
    USER PROFILE
  </div>
  &nbsp; &nbsp;
  <div>
  <img
    src={SignUpIcon}
    className="header__container-inner__nav-iconMenu "
    alt="User"
  />
  </div>
   </div>
</Link> 
</div>

)}

{/****End block user Profile *************/}




{/****begin block logout *************/}
 {  (role)  && (
  <>

  <div className="nav-links">
  
    <div style={{display: 'flex', flexDirection:'row',marginRight:'4em', marginTop:'0.5em'}} onClick={() => setOpenModal(true)}>
        <div className="link-cart">
        <a href='#'> LOGOUT </a>
        </div>
    &nbsp; &nbsp;
    <div className='link-cart'>
    <img
      src={LogOutIcon}
      className="header__container-inner__nav-iconMenu "
      alt="cart"
    />
    </div>
     </div>
  
  </div>
  </>
)}

{/****  end bock option LOGOUT ********* */}


  {/****  begining block option signUp *****/}

  {!role && (

<div className="nav-links">
                <Link to={REGISTRATION_ROUTE} className="link-cart">
                  <div style={{display: 'flex', flexDirection:'row'}}>
                  <div>
                    SINGUP
                  </div>
                  &nbsp; &nbsp;
                  <div>
                  <img
                    src={SignUpIcon}
                    className="header__container-inner__nav-iconMenu "
                    alt="cart"
                  />
                  </div>
                   </div>
                </Link> 
                </div>
  )}
{/****  begining block option LOGIN ********* */}
{!role && (

<div className="nav-links">
<Link to={LOGIN_ROUTE} className="link-cart">
<>
                 
                 <div style={{display: 'flex', flexDirection:'row'}}>
                  <div>
                    LOGIN
                  </div>
                  &nbsp; &nbsp;
                  <div>
                  <img
                        src={LoginIcon}
                      //src={!role ? login : userIcon}
                      className="header__container-inner__nav-iconMenu"
                      alt={role ? 'login' : 'user_profile'}
                    />
                  </div>
               </div>
                  

                    {role && myActiveOrders.length !== 0 && (
                      <Badge value={myActiveOrders.length} />
                    )}
                  </>

</Link>
</div>  
)}


{/****  End block option LOGIN ********* */}



  {/****  end block option signUp********* */}
  {/****  begining block option CATALOG ********* */}
  <div className="nav-links">
 <Link to={CATALOG_ROUTE}> 
 <div style={{display: 'flex', flexDirection:'row'}}>
              <div>
              CATALOG
              </div>
              &nbsp; &nbsp;
              <div>
                 <img src={CatalogIcon}
                  className="header__container-inner__nav-iconMenu"
                  alt='Catalog'
                />
              </div>
               </div>
 </Link>  
 </div>
 {/****  eND bock option CATALOG ********* */}
 {/***If there is not Role, go to Login, if Role Its user go to USERS_profile_Rute, else if Role its Admin, go to ADMIN_ROUTE  *****/}
 <div className="nav-links">
 {/**********begin block third option ************ */}
 <Link to={ADMIN_ROUTE}
              /*  to={!role ? LOGIN_ROUTE : role === 'user'? USER_PROFILE_ROUTE         : ADMIN_ROUTE
                }
                className={role === 'user' ? 'link-user' : ''}*/
              >
                {role === 'admin' ? (<>
                 
                  {/********* ADMIN BLOCK  *******/}
                  <div style={{display: 'flex', flexDirection:'row'}}>
                  <div>
                    ADMIN
                  </div>
                  &nbsp; &nbsp;
                  <div>
                     <img src={AdminIcon}
                      className="header__container-inner__nav-iconMenu"
                      alt='Admin'
                    />
                  </div>
                   </div>

                   {/********* END ADMIN BLOCK  *******/}

               </> ):(<div></div>)}
              </Link> 
              </div>
              {/*******************end block third option *********** */}
   {/**** 4th option begin block ************/}
   {role !== 'admin' && (
              <div className="nav-links">
                <Link to={CART_ROUTE} className="link-cart">
                  <div style={{display: 'flex', flexDirection:'row'}}>
                  <div>
                    CART
                  </div>
                  &nbsp; &nbsp;
                  <div>
                  <img
                    src={cartleatherIcon}
                    className="header__container-inner__nav-iconMenu "
                    alt="cart"
                  />
                  </div>
                   </div>
                  
                  {cart && cart?.items.length !== 0 && (
                    <Badge value={cart.totalQuantity} />
                  )}
                </Link> 
                </div>
              )}

   {/*******4th option end block ************/}



   {/*********5th option menu starts here **********************/}
   {/*********5th option menu ends here ************************/}
   
   {/*<button className="loginBtn">Login</button>*/}
   </div>


       </div>
        )} {/**End block: startsWith('/admin') && role === 'admin' */}
        </header> 
        </>
        
);

};

export default Header;