import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from '../redux/actions/action';
const HomeRow = () => {
  const [data, setData] = useState(Cardsdata);
  
  const dispatch = useDispatch();
  
  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }
  console.log();
  return (
   
      
   <>
      
        {data.slice(0,1).map((element, id) => {
          return (
            <>
              <Card  className='my-3'>
                <Card.Img variant="top" src={element.imgdata}   />
                <Card.Body style={{}}>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                  Price :  ₹ {element.price}
                  </Card.Text>
                  <p>Lorem ipsum dolor sit  sapiente quis quia officia aspernatur illum fuga enim, sunt ipsam facilis vero assumenda nisi?</p>
                  <div className=" ">
                  <a  href="#" variant="primary" 
                  onClick={()=> send(element)}
                  className="col-lg-12 text-decoration-none" style={{color:"blue",fontSize:"20px"}}>Add to Cart</a>
                  </div>
                  
                </Card.Body>
              </Card>
            </>
          );
        })}
</>
   
  );
};

export default HomeRow;


