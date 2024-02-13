import React, { useState } from 'react';
import './userProfile.scss';
import Navigation from '../../components/UserProfile/Navigation/Navigation';
import Address from '../../components/UserProfile/Content/Address/Address';
import MyInfo from '../../components/UserProfile/Content/MyInfo/MyInfo';
import MyOrders from '../../components/UserProfile/Content/MyOrders/MyOrders';
import useGetAllAddresses from '../../hooks/useGetAllAddresses';
import useGetMe from '../../hooks/useGetMe';

const UserProfile = () => {
  useGetAllAddresses();
  useGetMe();

  const [currentTab, setCurrentTab] = useState('My orders');

  return (
    <div className="profile">
      <h1 className="profile__heading">Personal Area</h1>
      <div className="profile__container">
        <div className="profile__container__nav">
          <Navigation setCurrentTab={setCurrentTab} currentTab={currentTab} />
        </div>
        <div className="profile__container__content">
          {currentTab === 'My orders' && <MyOrders />}
          {currentTab === 'Delivery addresses' && <Address />}
          {currentTab === 'My details' && <MyInfo />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
