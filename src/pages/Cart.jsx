import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import React from 'react';

export default function Cart() {
  // Use useSelector to get the cart state from Redux
  const cart = useSelector((state) => state.cart);  
  //sconsole.log(cart) 
  return (
    <div className="page-container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>안녕</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
