import React from 'react';
import './banner.scss';
import bg from '../../../assets/img/bannerLeatherSer2.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bg} alt="" className="banner__img" />
    </div>
  );
};

export default Banner;
