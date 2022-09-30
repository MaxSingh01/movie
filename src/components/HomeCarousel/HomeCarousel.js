import Carousel from "react-bootstrap/Carousel";
import img1 from "../../img1.jfif";
import img3 from '../../img3.png'
import img2 from "../../img2.png";
function HomeCarousel() {
  return (
    <Carousel
      style={{ gridColumn: "1/-1", gridRow: "1/-1" }}
      controls={false}
      indicators={false}
    >
      <Carousel.Item style={{height:'100%'}}>
        <img style={{height:'85.5vh',width:'100%'}} src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item style={{height:'100%'}}>
        <img style={{height:'85.5vh',width:'100%'}} src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item style={{height:'100%'}}>
        <img style={{height:'85.5vh',width:'100%'}}
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
