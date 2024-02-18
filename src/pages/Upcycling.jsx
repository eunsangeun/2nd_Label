import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import data from '../data';
import bg from '../bg.png'
import { useState } from 'react';
import shoes from '../data'
export default function SharingClothes() {

  let [shoes] = useState(data)
  
  return (
    
    <Routes>
    <Route path='/' element={
      <>
        <div className="container">
          <div className="row">

            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}>
              {/*js에서 변수넣고 싶을 때 그냥 넣으면안되고 변수 중간에 문자넣는 문법사용해야함*/}
            </div>
            {
              shoes.map((a, i) => {
                return (
                  <Card shoes={shoes[i]} i={i + 1}></Card>
                )
              })
            }
          </div>
        </div>
      </>
    } />
    <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
    {/*props전송. detail->shoes*/}
  </Routes>


  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
