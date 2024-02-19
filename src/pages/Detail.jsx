import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Detail(props) {
  let { id } = useParams();
  console.log(id);

  // id를 정수로 변환, 실패 시 기본값 0 사용
  const shoeId = parseInt(id, 10) || 0;

  // props.shoes가 정의되어 있지 않거나, 길이가 0인 경우
  if (!props.shoes || props.shoes.length === 0 || isNaN(shoeId) || shoeId <= 0 || shoeId > props.shoes.length) {
    return (
      <div>
        <p>잘못된 상품 ID이거나 상품 정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={`https://doeuni.github.io/coding/shoes${shoeId}.png`} width="80%" alt={`Shoe ${shoeId}`} />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[shoeId - 1].title}</h4>
          <p>{props.shoes[shoeId - 1].content}</p>
          <p>{props.shoes[shoeId - 1].price}원</p>
          <Link to={`/delivery/${shoeId}`}>
            <Button variant="contained">구매하기</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
