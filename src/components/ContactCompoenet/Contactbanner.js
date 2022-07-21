import React from 'react'
import { Carousel } from "react-bootstrap";
const Contactbanner = () => {
  return (
    <div>
        <>
      <img
        className="d-block w-100"
        src={
          "http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-yente-van-eynde-2403392.webp"
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
            <b>Contact Us</b>
          </h1>
        </Carousel.Caption>
      </div>
    </>

    </div>
  )
}

export default Contactbanner