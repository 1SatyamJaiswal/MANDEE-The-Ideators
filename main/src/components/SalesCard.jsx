import React from 'react';

function SalesCard({deal}) {
  return (
    <div className='sales-card-main'>
      <img src={require(`../uploads/${deal.picture}`)}  className='sales-img' />
      <div className="sales-price">Rs. {deal.price} /kg</div>
      <div className="sales-info">{deal.quantity} kg</div>
      <div className="sales-info">sold to gururam sellers</div>
    </div>
  );
}

export default SalesCard;