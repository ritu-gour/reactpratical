import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SecC = (props) => {
  return (
    <>
    <div class="container">
    
            <Card className='my-5 bb' >
             <h3 className='text-center my-2'>ABOUT US</h3>
          <Card.Img variant="top" className="b2 m " src={props.img} />
          <Card.Body>
            <Card.Title>{props.mg4}</Card.Title>
            <Card.Text className="j">

              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <td className="mt-5 d-flex justify-content-center" style={{color:"black",fontSize:25,cursor:"pointer"}}  >
            <i class="fa-brands fa-facebook mx-"></i><i class="fa-brands fa-instagram-square mx-4"></i><i class="fa-brands fa-linkedin"></i>
                    </td>
          </Card.Body>
        </Card>
           
        </div>
        </>
  )
}

export default SecC