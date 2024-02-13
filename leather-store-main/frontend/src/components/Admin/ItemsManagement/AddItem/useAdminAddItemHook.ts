import { useState } from 'react';
import './addItem.scss';
import { useAppDispatch } from '../../../../hooks';
import { typeOptions } from '../../../../utils/consts';
import { IFormData } from '../../../../hooks/admin/useAdminAddItemInterf';




export const useAdminAddItemHook = () => {

    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState<IFormData>({
      name: '',
      type: '' || typeOptions[0],
      description: '',
      price: '',
    });
  
    const [imageCover, setImageCover] = useState<File | null>(null);
    const [images, setImages] = useState<File | FileList | null>(null);

    return {
        dispatch,
        formData, 
        setFormData,
        imageCover, 
        setImageCover,
        images, 
        setImages,
    };




};
