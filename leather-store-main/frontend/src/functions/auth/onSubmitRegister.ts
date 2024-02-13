import { ICartItem } from '../../types/data';


export const onSubmitRegister = (dispatch:any,register:any, formData:any, updateCart:any, navigate:any, setToastText:any, setOpenToast:any ) => {

    dispatch(register(formData))
    .unwrap()
    .then((data:any) => {
      JSON.parse(localStorage.getItem('cart')!)
        ? dispatch(
            updateCart({
              ...JSON.parse(localStorage.getItem('cart')!),
              items: JSON.parse(localStorage.getItem('cart')!).items.map(
                (item: ICartItem) => {
                  delete item._id;
                  return item;
                }
              ),
              user: data.data.user._id,
            })
          )
            .unwrap()
            .then((_:any) => {
              localStorage.removeItem('cart');
              navigate('/');
            })
        : navigate(-1);
    })
    .catch((error:any) => {
      setToastText(error.split(':')[2 || 1]);
      setOpenToast(true);
    });




};