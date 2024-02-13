import React from 'react';
import './homeItems.scss';
import { Link } from 'react-router-dom';
import { CATALOG_ROUTE } from '../../../utils/consts';
import ItemCard from '../../UI/ItemCard/ItemCard';
import { useGetAllItems } from '../../../hooks/useGetAllItems';
import Spinner from '../../UI/Spinner/Spinner';
import SeeIcon from '../../../assets/icons/SEE01.png';
import ShopIcon from '../../../assets/icons/SHOP02.png';

const HomeItems = () => {
  const { isLoading, items } = useGetAllItems();

  return (
    <div className="home-items">
      <div className="home-items__heading">
      <div style={{display: 'flex', flexDirection:'row'}}>
                  <div>
                  <h4>Shop</h4>
                  </div>
                  &nbsp; &nbsp;
                  <div>
                     <img src={ShopIcon}
                      className="header__container-inner__nav iconMenu"
                      alt='Admin'
                    />
                  </div>
          </div>
        
        <Link to={CATALOG_ROUTE} className="home-items__heading-link">
        
        <div style={{display: 'flex', flexDirection:'row'}}>
                  <div>
                  See all
                  </div>
                  &nbsp; &nbsp;
                  <div>
                     <img src={SeeIcon}
                      className="header__container-inner__nav iconMenu"
                      alt='Admin'
                    />
                  </div>
          </div>
        </Link>
      </div>
      <div className="home-items__container">
        {isLoading ? (
          <Spinner />
        ) : (
          items
            ?.slice(0, 4)
            .map((item) => <ItemCard key={item._id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default HomeItems;
