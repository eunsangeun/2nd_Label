import React from "react";
import SharingClothes from "./SharingClothes";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Detail() {
  return (
    <div className="page-container" style={{ fontSize: "32px", textAlign: "left" }}>
      <style>
        {`
          .container {
            display: flex;
            align-items: flex-start;
          }

          .box {
            margin-left: 80px; /* 수정: 우측이 아니라 좌측에 여백을 주도록 변경 */
            background-color: lightgray;
            padding: 10px;
            width : 800px;
          }

          img {
            width: 50%;

          }

          @media (max-width: 1000px) {
            .container {
              flex-direction: column;
              align-items: flex-start;
            }

            .box {
              margin-left: 0; /* 수정: 모바일에서는 좌측 여백을 없애도록 변경 */
              margin-bottom: 10px;
            }

            img {
              width: 100%;
            }

            .box p {
                margin-bottom: 10px; /* 수정: 각각의 <p> 태그 사이에 10px 간격을 추가 */
            }
          }
        `}
      </style>
      <div className="container">
        <img
          src="https://codingapple1.github.io/shop/shoes1.jpg"
          alt="신발"
        />
        <div className="box">
            <h2>상품명</h2><br></br>
            <p>구분</p><br></br>
            <p>??까지 남은시간</p><br></br>
            <p>특이사항</p><br></br>
            <Button variant="outline-success">구매하기</Button>{' '}
        </div>
      </div>
    </div>
  );
}
