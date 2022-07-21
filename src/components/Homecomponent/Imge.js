import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Imge = (props) => {
  return (
    <div>
        <Card className='my-3' >
      <Card.Img variant="top" src={props.imgg} height={"180px"}/>
     
    </Card>
    </div>
  )
}

export default Imge