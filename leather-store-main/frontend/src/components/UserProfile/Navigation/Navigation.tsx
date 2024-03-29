import React, { useState } from 'react';
import Tab from './Tab/Tab';
import logoutsvg from '../../../assets/icons/logout.svg';
import portrait from '../../../assets/icons/portrait.svg';
import location from '../../../assets/icons/location.svg';
import orders from '../../../assets/icons/orders.svg';
import useLogout from '../../../hooks/useLogout';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

interface NavigationProps {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation: React.FC<NavigationProps> = React.memo(
  ({ setCurrentTab, currentTab }) => {
    const logoutUser = useLogout();
    const [openModal, setOpenModal] = useState(false);

    const tabs = [
      { text: 'My orders', icon: orders },
      { text: 'Delivery addresses', icon: location },
      { text: 'My details', icon: portrait },
    ];

    return (
      <>
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
        <div className="nav">
          {tabs.map((tab, i) => (
            <Tab
              key={tab.text}
              text={tab.text}
              onClick={() => setCurrentTab(tab.text)}
              active={currentTab === tab.text}
              icon={tab.icon}
            />
          ))}
          <Tab
            text={'LogOut'}
            onClick={() => setOpenModal(true)}
            active={currentTab === 'LogOut'}
            icon={logoutsvg}
          />
        </div>
      </>
    );
  }
);

export default Navigation;
