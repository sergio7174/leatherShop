import React from 'react';
import './addItem.scss';
import Button from '../../../UI/Button/Button';
import { addItem } from '../../../../features/items/itemsSlice';
import Input from '../../../UI/Input/Input';
import { typeOptions } from '../../../../utils/consts';
import { AddItemProps } from '../../../../hooks/admin/useAdminAddItemInterf';
import { onSubmitAddItem } from './AdditemFunction';
import { onChangetAddItem } from './AdditemFunction';
import { useAdminAddItemHook } from './useAdminAddItemHook';

const AddItem: React.FC<AddItemProps> = ({
  setOpenAddItem,
  setOpenToast,
  setToastText,
}) => {

  const {
    dispatch,
    formData, 
    setFormData,
    imageCover, 
    setImageCover,
    setImages,
} = useAdminAddItemHook();

 
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     onSubmitAddItem(
      formData,
      imageCover,
      dispatch,
      addItem,
      setOpenAddItem,
      setToastText,
      setOpenToast)
  
    }

  const onChange = (
    e: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    onChangetAddItem(target, setImageCover, setFormData, setImages);
  };

  return (
    <>
      <h2 className="title">Add product</h2>
      <form className="form" id="form" onSubmit={onSubmit}>
        <div className="form__box">
          <label htmlFor="type" className="form__box-label">
          Product type
          </label>
          <select
            onChange={onChange}
            name="type"
            id="type"
            className="form__box-select"
          >
            {/**typeOptions comes from import{typeOptions} */}
            {typeOptions.map((option) => (
              <option key={option} value={option}>
                {option.split('')[0].toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="form__box">
          <Input
            name="name"
            label="Name"
            type="text"
            onChange={onChange}
            placeholder="Crazy Horse Wallet"
          />
        </div>
        <div className="form__box">
          <Input
            name="price"
            label="price"
            type="number"
            onChange={onChange}
            placeholder="1000"
          />
        </div>
        <div className="form__box">
          <label htmlFor="description" className="form__box-label">
          Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form__box-input"
            placeholder="Enter product description"
            onChange={onChange}
          />
        </div>
        <div className="form__box">
          <Input
            name="imageCover"
            label="Main image"
            type="file"
            onChange={onChange}
            accept="image/jpeg, image/jpg"
          />
        </div>
        
        {/*<div className="form__box">
          <Input
            name="images"
            label="Additional images (max. 3)"
            type="file"
            onChange={onChange}
            accept="image/jpeg, image/jpg"
            multiple
          />
            </div>*/}

        <div className="form__btn">
          <Button text="Add" color="grey" />
        </div>
      </form>
    </>
  );
};

export default AddItem;
