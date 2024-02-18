import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

function Delivery() {
  let { id } = useParams();
  const shoeId = parseInt(id, 10) || 0;

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('배송 정보 제출:', deliveryInfo);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">배송 정보</h2><br /><br />

            <div className="mb-3 row">
              <label htmlFor="name" className="col-sm-4 col-form-label">받는 분</label>
              <div className="col-sm-8">
                <input type="text" name="name" value={deliveryInfo.name} onChange={handleChange} className="form-control" />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="address" className="col-sm-4 col-form-label">주소</label>
              <div className="col-sm-8">
                <input type="text" name="address" value={deliveryInfo.address} onChange={handleChange} className="form-control" />
              </div>
            </div>

            <div className="mb-3 row">
              <label htmlFor="phoneNumber" className="col-sm-4 col-form-label">전화번호</label>
              <div className="col-sm-8">
                <input type="text" name="phoneNumber" value={deliveryInfo.phoneNumber} onChange={handleChange} className="form-control" />
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" variant="contained">
                배송 정보 제출
              </Button>
            </div>
          </form>
        </div>
        <div className="col-md-6 mt-4">
          {/* 여기에 배송 정보 확인 또는 기타 내용을 추가할 수 있습니다. */}
        </div>
      </div>
    </div>
  );
}

export default Delivery;
