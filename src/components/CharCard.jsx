// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// React Router Dom
import { useNavigate } from 'react-router-dom'

const CharCard = ({ character, i }) => {

    const navigate = useNavigate();
    const navigateToCharDetailPage = () => navigate(`/character/${character.id}`)



    return (
        <Card className='m-1' style={{ width: '13rem' }} key={i}>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                {/* <Card.Text className="fs-6 mb-0">
                        <span>Gender: {character.gender}</span> <br/>
                        <span>Species: {character.species}</span> <br/>
                        <span>Status: {character.status}</span>
                </Card.Text> */}
                <Button onClick={()=> navigateToCharDetailPage()} variant="primary">Get Details</Button>
            </Card.Body>
        </Card>
    )
}

export default CharCard;