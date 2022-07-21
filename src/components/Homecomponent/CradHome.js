import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CradHome = (props) => {
  return (
    <>

<div class="container">

<Card className="car my-5">
      <Card.Body>
        <Card.Title className="text-center t">{props.title}</Card.Title>
       
        <Card.Text className="text-center b">
          {props.des}
        </Card.Text>
        
      </Card.Body>
    </Card>
       
    </div>
    </>
  )
}

export default CradHome