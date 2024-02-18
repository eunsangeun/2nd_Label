import React from 'react';
import { useNavigate } from 'react-router-dom';

const CenteredRectangleBox = () => {
  const navigate = useNavigate();

  // 쿠폰 내역 데이터
  const couponData = [
    { no: 1, productName: '상품 A' },
    { no: 2, productName: '상품 B' },
    { no: 3, productName: '상품 C' },
    // 추가적인 쿠폰 내역을 필요에 따라 여기에 추가할 수 있습니다.
  ];

  // 주문 내역 데이터
  const orderData = [
    { orderNo: '2022001', orderProduct: '상품 X' },
    { orderNo: '2022002', orderProduct: '상품 Y' },
    { orderNo: '2022003', orderProduct: '상품 Z' },
    // 추가적인 주문 내역을 필요에 따라 여기에 추가할 수 있습니다.
  ];

  const handleClick = () => {
    // Calendar 페이지로 이동
    navigate('/calendar');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh', // 뷰포트 높이(화면 전체 높이) 만큼 설정
        marginTop: '100px',
      }}
    >
      <div
        style={{
          width: '800px',
          height: '200px',
          backgroundColor: 'beige',
          border: '2px solid navy',
          padding: '20px',
          position: 'relative',
        }}
      >
        {/* Outer rectangle content */}
        <p style={{ marginBottom: '10px', marginTop: '60px', marginLeft: '90px' }}>이름</p>

        {/* Inner rectangle */}
        <div
          style={{
            width: '200px',
            height: '100px',
            backgroundColor: 'yellow',
            border: '2px solid darkgreen',
            borderRadius: '8px',
            position: 'absolute',
            top: '50%', // Adjusted to 60% to lower the position
            left: '75%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Inner rectangle content */}
          <button onClick={handleClick} style={{ marginBottom: '10px', marginTop: '40px', marginLeft: '50px' }}>certificate issue</button>
        </div>
      </div>

      {/* Coupon section */}
      <div
        style={{
          marginTop: '20px',
          width: '800px',
          padding: '20px',
        }}
      >
        <h2>Coupon 내역</h2>
        <hr style={{ margin: '20px 0', border: '1px solid black' }} />
        <div style={{ display: 'flex', borderBottom: '1px solid black', paddingBottom: '10px' }}>
          <div style={{ flex: 1, marginRight: '10px', paddingLeft: '10px', borderRight: '1px solid black' }}>
            <p>No</p>
            {couponData.map((coupon) => (
              <p key={coupon.no}>{coupon.no}</p>
            ))}
          </div>
          <div style={{ flex: 2, paddingLeft: '10px' }}>
            <p>상품명</p>
            {couponData.map((coupon) => (
              <p key={coupon.no}>{coupon.productName}</p>
            ))}
          </div>
        </div>
        {/* 추가적인 쿠폰 내역을 여기에 추가할 수 있습니다. */}
       
      </div>

      {/* Order section */}
      <div
        style={{
          marginTop: '20px',
          width: '800px',
          padding: '20px',
        }}
      >
        <h2>주문 내역</h2>
        <hr style={{ margin: '20px 0', border: '1px solid black' }} />
        <div style={{ display: 'flex', borderBottom: '1px solid black', paddingBottom: '10px' }}>
          <div style={{ flex: 1, marginRight: '10px', paddingLeft: '10px', borderRight: '1px solid black' }}>
            <p>주문 No</p>
            {orderData.map((order) => (
              <p key={order.orderNo}>{order.orderNo}</p>
            ))}
          </div>
          <div style={{ flex: 2, paddingLeft: '10px' }}>
            <p>주문 상품</p>
            {orderData.map((order) => (
              <p key={order.orderNo}>{order.orderProduct}</p>
            ))}
          </div>
        </div>
        {/* 추가적인 주문 내역을 여기에 추가할 수 있습니다. */}
        
      </div>
    </div>
  );
};

export default CenteredRectangleBox;

