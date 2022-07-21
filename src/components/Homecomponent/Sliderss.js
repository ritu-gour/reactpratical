import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Sliderss = () => {
  return (
    <div>
         <Carousel variant="dark">
      <Carousel.Item>
        <img className='img1'
         src={"http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-dana-tentis-1213710.webp"}
         height="500px" 
         width="600px"
         alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='sli'>Lorem ipsum dolor</h1>
          <p className='sli1'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='img1'
          src={"http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-chan-walrus-958545.webp"}
          height="500px" 
          width="400px"
          alt="second slide"
        />
        <Carousel.Caption>
          <h1 className='sli'>Lorem ipsum dolor</h1>
          <p className='sli1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='img1'
         src={"http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-yente-van-eynde-2403392.webp"}
         height="500px" 
         width="400px"
        
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='sli'>Lorem ipsum dolor</h1>
          <p className='sli1'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Sliderss