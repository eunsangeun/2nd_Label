import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './Detail';
import upcyclingData from '../data';
import bg from '../bg.png';

export default function Upcycling() {
  let [items] = useState(upcyclingData);

  // 데이터를 8번째 배열부터 시작되도록 변경
  const displayedItems = items.slice(7);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="container">
              <div className="row">
                <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}>
                  {/* js에서 변수를 넣고 싶을 때 그냥 넣으면 안되고 변수 중간에 문자를 넣는 문법을 사용해야함 */}
                </div>
                {displayedItems.map((item, i) => (
                  <Card key={i} item={item} index={i + 8}></Card>
                ))}
              </div>
            </div>
          </>
        }
      />
      <Route path="/detail/:id" element={<Detail items={items} />} />
    </Routes>
  );
}

function Card(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${props.index}`);
  };

  return (
    <div className="col-md-4" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {/* 이미지 경로 및 데이터 속성 변경 */}
      <img src={`https://doeuni.github.io/coding/shoes${props.index}.png`} width="250px" height="250px" alt={`Item ${props.index}`} />
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </div>
  );
}
