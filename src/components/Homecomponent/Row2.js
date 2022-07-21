import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Row2 = (props) => {
  return (
    <div>

<Card className='my-3'>
      <Card.Img variant="top" src={props.imgg} />
      <Card.Body>
        <Card.Title>Lorem ipsum dolor sit amet, </Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet,  consectetur consectetur consectetur  consectetur  consecteturconsectet consectetur adipiscing elit elit elit elit elite. In tincidunt lacinia mauris sit amet maximus. Morbi tortor est, varius id dapibus eget, congue eget arcu. Nullam consectetur sed mauris.
        </Card.Text>
       <a href='#' className='text-decoration-none' style={{Color:"blue",fontSize:"16px"}}>Read More</a>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Row2