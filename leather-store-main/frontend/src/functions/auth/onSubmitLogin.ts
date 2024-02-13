
import { ICartItem } from '../../types/data';


export const onSubmitLogin = (dispatch:any,login:any, formData:any, updateCart:any, navigate:any, setToastText:any, setOpenToast:any ) => {
   
   // send login data to store the Data: email and password
    dispatch(login(formData))
      .unwrap()
      .then((data:any) => {
        /**if user role its user - get the cart inf from local storage */
        if (data.data.user.role === 'user')
          JSON.parse(localStorage.getItem('cart')!)
          /**update the cart item from inf to the store */
            ? dispatch(
                updateCart({
                  ...JSON.parse(localStorage.getItem('cart')!),
                  items: JSON.parse(localStorage.getItem('cart')!).items.map(
                    (item: ICartItem) => {
                      delete item._id;
                      return item;
                    }
                  ),
                  /**get user Id */
                  user: data.data.user._id,
                })
              ) // comes from dispatch
                .unwrap()
                .then((_:any) => {
                  localStorage.removeItem('cart');
                  navigate('/');
                })
            : navigate('/');
        // if role its admin    
        if (data.data.user.role === 'admin') navigate('/admin');
      })
      .catch((error:any) => {
        // send inf to toast component
        setToastText(error);
        setOpenToast(true);
      });
  };