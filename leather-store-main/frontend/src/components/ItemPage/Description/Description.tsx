import React, { useMemo } from 'react';
import './description.scss';
import SelectColor from '../../SelectColor/SelectColor';
import Button from '../../UI/Button/Button';
import Radio from '../../UI/Radio/Radio';
import { IItem } from '../../../types/data';
import Colors from '../../UI/Colors/Colors';
import { LEATHERS_ROUTE } from '../../../utils/consts';
import { useDescriptionHook } from './useDescriptionHook';

interface DescriptionProps {item: IItem;}

const Description: React.FC<DescriptionProps> = ({ item }) => {

  const {
    addItemToCart,
    navigate,
    user,
    openSelectLeatherColor, 
    setOpenSelectLeatherColor,
    openSelectThreadsColor, 
    setOpenSelectThreadsColor,
    leatherType, 
    setLeatherType,
    colors, 
    setColors,
} = useDescriptionHook();


  const itemData = useMemo(() => {
    return {
      ...(!user && { _id: Date.now().toString() }),
      ...(!user && { total: +item.price }),
      itemId: item._id,
      name: item.name,
      quantity: 1,
      colors: {
        leatherColor: colors.leatherColor,
        threadsColor: colors.threadsColor,
      },
      leather: leatherType,
      price: +item.price,
      imageCover: item.imageCover,
      images: item.images,
    };
  }, [item, colors, leatherType, user]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setLeatherType(target.name);
  };

  return (
    <>
      {openSelectLeatherColor && (
        <SelectColor
          setOpenSelectColor={setOpenSelectLeatherColor}
          title="Select skin color"
          type="leather"
          setColors={setColors}
          currColor={colors.leatherColor}
        />
      )}
      {openSelectThreadsColor && (
        <SelectColor
          setOpenSelectColor={setOpenSelectThreadsColor}
          title="Select thread color"
          type="threads"
          setColors={setColors}
          currColor={colors.threadsColor}
        />
      )}
      <h2 className="item-title">{item.name}</h2>
      <p className="item-price">{item.price} $</p>
      <div className="leather-type">
        <p>Skin type:</p>
        <div className="leather-type__radio">
          <div className="leather-type__radio__options">
            <Radio
              name="Crazy Horse"
              onChange={onChange}
              checked={leatherType === 'Crazy Horse'}
            />
            <Radio
              name="Nappa"
              onChange={onChange}
              checked={leatherType === 'Nappa'}
            />
            <Radio
              name="Pull Up"
              onChange={onChange}
              checked={leatherType === 'Pull Up'}
            />
          </div>
          <div
            className="leather-type-info"
            onClick={() => navigate(LEATHERS_ROUTE)}
          >
            ?
          </div>
        </div>
      </div>
      <Colors
        leatherColor={colors.leatherColor}
        threadsColor={colors.threadsColor}
        vertical
        openSelectLeatherColor={() => setOpenSelectLeatherColor(true)}
        openSelectThreadsColor={() => setOpenSelectThreadsColor(true)}
      />
      <div className="item-desc">DESCRIPTION</div>
      <div className="item-desc-text">{item.description}</div>
      <Button
        onClick={() => addItemToCart(itemData)}
        text="Add to cart"
        color="black"
        big
      />
    </>
  );
};

export default Description;
