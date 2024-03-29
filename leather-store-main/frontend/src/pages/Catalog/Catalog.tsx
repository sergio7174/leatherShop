import React, { useEffect, useState } from 'react';
import './catalog.scss';
import ItemCard from '../../components/UI/ItemCard/ItemCard';
import Filter from '../../components/Catalog/Filter';
import { useGetAllItems } from '../../hooks/useGetAllItems';
import FiltersPanel from '../../components/Catalog/FiltersPanel/FiltersPanel';
import Pagination from '../../components/UI/Pagination/Pagination';
import Spinner from '../../components/UI/Spinner/Spinner';
import { useAppSelector } from '../../hooks';

const Catalog = () => {
  const { isLoading, items } = useGetAllItems();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    setMaxPages(
      items.length !== 0 ? Math.ceil(items.length / itemsPerPage) : 1
    );
  }, [items, itemsPerPage]);

  const { sort } = useAppSelector((state) => state.filters);

  return (
    <>
      <div className="catalog">
        <div className="catalog__container">
          <div className="catalog__container__top">
            <Filter />
            {/* <View /> */}
          </div>
          <FiltersPanel />
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="catalog__container__items">
              {sort === 'Default'
                ? items
                    .slice(
                      itemsPerPage * (currentPage - 1),
                      itemsPerPage * currentPage
                    )
                    .map((item) => <ItemCard key={item._id} item={item} />)
                : [...items]
                    .sort((a, b) => {
                      if (+a.price === +b.price) return 0;
                      return sort === 'Descending price'
                        ? +b.price - +a.price
                        : +a.price - +b.price;
                    })
                    .slice(
                      itemsPerPage * (currentPage - 1),
                      itemsPerPage * currentPage
                    )
                    .map((item) => <ItemCard key={item._id} item={item} />)}
            </div>
          )}
        </div>
        {items.length && (
          <Pagination
            maxPages={maxPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default Catalog;
