
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types"

function Players({item}) {

  return (
    <div className='container' key={item.id}>
      <Card.Img className='image' variant="top"  src={item.image}/>
      <Card.Body className='body'>
        <Card.Title><b>Name: </b>{item.name}</Card.Title>
        <Card.Text>
        <b>Age: </b>{item.age} <br/> <b>Team: </b>{item.team} <br/> <b>Position: </b>{item.position} <br/> <b>Nationality: </b> {item.nationality} <br/> <b>Rating: </b>{item.rating}
        </Card.Text>
        <Button variant="primary" className='btn'>Click</Button>
      </Card.Body>
    </div>
  );
}
Players.propTypes = {
  item: PropTypes.shape({
  items: PropTypes.string,
  fullName: PropTypes.string
})
}
export default Players;