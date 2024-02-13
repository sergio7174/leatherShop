import React from 'react';
import './image.scss';
import Slider from '../Slider/Slider';
import { ImageProps, ISlides } from './imageInterfaces';

const Image: React.FC<ImageProps> = ({ item }) => {
    const allItemImages = [item.imageCover, ...item.images];

    const slides: ISlides[] = allItemImages.map((img) => ({
     path: `http://localhost:5000/public/images/${item.imageCover}`,
     name: img,
        }));

  return (
    <>
      <div className="image">
        <Slider slides={slides} />
      </div>
    </>
  );
};

export default Image;
