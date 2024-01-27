import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import ApplicationForm from "./pages/ApplicationForm";
import Upcycling from "./pages/Upcycling";
import NotFound from "./pages/NotFound";
import QueryStringTest from "./pages/QueryStringTest";
import SharingClothes from "./pages/SharingClothes";
import Findclothes from "./pages/Findclothes";
import MyPage from "./pages/MyPage";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Button from "react-bootstrap";
import data  from "./data";
import { useState } from "react";
function App() {
  let [shoes] = useState(data)
  return (
    <div className="root-wrap">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/applicationform" element={<ApplicationForm />} />
          <Route path="/upcycling" element={<Upcycling />} />
          <Route path="/test" element={<QueryStringTest />} />
          <Route path="/findclothes" element={<Findclothes />} />
          <Route path="/sharingclothes" element={<SharingClothes/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/" element={<Home/>} />

          <Route path="/*" element={<NotFound />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
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
export default App;