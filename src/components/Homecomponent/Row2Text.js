import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Row2Text = () => {
  return (
    <div>
        <Card className='my-3' style={{border:"none"}}>
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    </div>
  )
}

export default Row2Text