import React from 'react';

function SalesCard(props) {
  return (
    <div className='sales-card-main'>
      <img src="https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop-500x500.jpg"  className='sales-img' />
      <div className="sales-price">Rs. 161 /kg</div>
      <div className="sales-info">6 kg</div>
      <div className="sales-info">sold to gururam sellers</div>
    </div>
  );
}

export default SalesCard;