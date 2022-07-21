import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Testimonials = (props) => {
  return (
    <div>
         <Carousel variant="dark" className='tes'>
          {/* <h1 className="text-center" style={{fontSize:"50px",color:"#fd5000"}}>Testimonial</h1> */}
          <Carousel.Item >
            <img
              className="d-block w-100 img3"
              src={props.img}
              

            />
            <Carousel.Caption>
              <h3 className='h44'>RITU GOUR</h3>
              <p className='ddi'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img3"
              src={props.img}
             
            />
            <Carousel.Caption>
              <h3 className='h44'>ROHIT RAJPUT</h3>
              <p className='ddi'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              className="d-block w-100 img3"
              src={props.img}
              
            />
            <Carousel.Caption>
              <h3 className='h44'>PAVAN GOUR</h3>
              <p className='ddi'>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    

    

    </div>
  )
}

export default Testimonials