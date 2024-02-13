import React, { useState } from 'react';
import './myOrderDetails.scss';
import Colors from '../../../../UI/Colors/Colors';
import Button from '../../../../UI/Button/Button';
import { IOrder } from '../../../../../types/data';
import { useCancelOrder } from '../../../../../hooks/useCancelOrder';
import Modal from '../../../../UI/Modal/Modal';

type MyOrderDetailsProps = { order: IOrder };

const MyOrderDetails = React.memo(({ order }: MyOrderDetailsProps) => {
  const [openModal, setOpenModal] = useState(false);
  const cancelOrder = useCancelOrder();

  return (
    <>
      {openModal && (
        <Modal
          setOpen={setOpenModal}
          Content={
            <>
              <p>Are you sure you want to cancel your order?</p>
              <div className="modal__content__buttons">
                <Button
                  text="Yes"
                  color="grey"
                  onClick={() => {
                    cancelOrder(order._id!);
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
      <div className="myOrderDetails">
        {order.items.map((item) => (
          <div key={item._id} className="myOrderDetails__item">
            <div className="myOrderDetails__item-left">
              <img
                src={`http://localhost:5000/public/images/${item.imageCover}`}
                alt="Product View"
                className="myOrderDetails__item-left-img"
              />
              <div className="myOrderDetails__item-left__info">
                <h2 className="myOrderDetails__item-left__info-title">
                  {item.name}
                </h2>
                <p>Skin type:
                  {item.leather}</p>
                <Colors
                  leatherColor={item.colors.leatherColor}
                  threadsColor={item.colors.threadsColor}
                  fromMyOrders
                />
                <p className="myOrderDetails__item-left__info-qty">
                Quantity: {item.quantity}
                </p>
              </div>
            </div>
            <p className="myOrderDetails__item-right">
              {item.price * item.quantity} $.
            </p>
          </div>
        ))}

        <p className="myOrderDetails__address">
        Delivery address: {order.address.city}, {order.address.address},
          {order.address.zipcode}
        </p>

        <div className="myOrderDetails__bottom">
          <div className="myOrderDetails__bottom-total">
            <p>Total: {order.total} $.</p>
          </div>
          {order.status !== 'Completed' && (
            <div className="myOrderDetails__bottom-btns">
              <Button
                text="Cancel the order"
                color="gray"
                onClick={() => setOpenModal(true)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default MyOrderDetails;
