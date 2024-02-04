import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../image/001.png'
import Image2 from '../image/002.png'
import Image3 from '../image/003.png'
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
     
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />
   
          
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;