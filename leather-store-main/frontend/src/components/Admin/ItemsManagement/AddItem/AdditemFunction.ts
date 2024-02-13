
export const onSubmitAddItem = ( formData:any,imageCover:any,dispatch:any,addItem:any, setOpenAddItem:any,setToastText:any,setOpenToast:any ) => {
   

    const form = new FormData();
    form.append('name', formData.name);
    form.append('type', formData.type);
    form.append('description', formData.description);
    form.append('price', formData.price);
    if (imageCover) form.append('imageCover', imageCover);
    /*if (images) {
      for (let i = 0; i < 2; i++) {
        form.append('images', Object.values(images!)[i]);
      }
    }*/

    dispatch(addItem(form))
      .unwrap()
      .then(() => {
        setOpenAddItem(false);
      })
      .catch((error:any) => {
        setToastText(error.split(':')[error.split(':').length - 1]);
        setOpenToast(true);
      });
  };

export  const onChangetAddItem = (target:any, setImageCover:any, setFormData:any, setImages:any)=>{

    
    if (target.files && target.id === 'imageCover')
      setImageCover(target.files![0]);

    if (target.files && target.id === 'images') setImages(target.files);

    if (!target.files)
      setFormData((prev:any) => ({
        ...prev,
        [target.id]: target.id === 'price' ? +target.value : target.value,
      }));


};