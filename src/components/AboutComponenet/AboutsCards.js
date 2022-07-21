import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AboutsCards = (props) => {
  return (
    <div>
      <div class="container">
        <Card className="my-5" style={{padding:"30px 10px 50px 10px",boxShadow:"0px 0px 62px 9px rgb(0 0 0 / 13%)"}}>

          <Card.Img variant="top" className="b2 m " src={props.img} />
          <Card.Body>
            <Card.Title>{props.mg4}</Card.Title>
            <Card.Text className="j">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.bulk of thebulk of bulk of the card's
              content.bulk bulk of
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AboutsCards;
