import React from 'react'
import { Carousel } from "react-bootstrap";
const AboutBanner = () => {
  return (

        
    <>
      <img
        className="d-block w-100"
        src={
          "http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg"
        }
        height="300px"
        width="400px"
        style={{ objectFit: "cover" }}
      />
      <div>
        <Carousel.Caption>
          <h1
            style={{ fontSize: "60px", color: "white", marginTop: "-390px" }}
          >
            <b>ABOUT</b>
          </h1>
        </Carousel.Caption>
      </div>
    </>

   
  )
}

export default AboutBanner