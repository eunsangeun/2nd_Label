import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './Detail';
import data from '../data';
import bg from '../bg.png';
import { useState } from 'react';
import Image1 from '../image/001.png'

export default function SharingClothes() {
  let [shoes] = useState(data);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="container">
              <div className="row">
                <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }}>
                  {/*js에서 변수넣고 싶을 때 그냥 넣으면안되고 변수 중간에 문자넣는 문법사용해야함*/}
                </div>
                {shoes.slice(0, 7).map((a, i) => (
                  <Card key={i} shoes={shoes[i]} index={i + 1}></Card>
                ))}
              </div>
            </div>
          </>
        }
      />
      <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      {/*props전송. detail->shoes*/}
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
      <img src={`https://doeuni.github.io/coding/shoes${props.index}.png`} width="250px" height="250px" alt={`Shoe ${props.index}`} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
