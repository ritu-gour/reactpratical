import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ContactInfor = (props) => {
  return (
    <div>
         <div class="container">
        <Card className="my-5" style={{padding:"30px 10px 50px 10px",boxShadow:"0px 0px 62px 9px rgb(0 0 0 / 13%)"}}>

          <Card.Img variant="top" className=" cc " src={props.imags}  />
          <Card.Body>
            {/* <Card.Title>{props.mg4}</Card.Title> */}
            <Card.Text className="text-center">
              <h3 className="text-center">{props.tt}</h3>
              <p className="text-center">{props.nma}</p>
              
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ContactInfor