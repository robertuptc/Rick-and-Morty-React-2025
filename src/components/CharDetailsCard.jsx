// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

const CharDetailsCard = ({ character }) => {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center min-vh-100 p-4'>
            <Card className='m-1' style={{ width: '13rem' }}>
                <Card.Img variant="top" src={character.image} />
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text className="fs-6 mb-0">
                            <span>Gender: {character.gender}</span> <br/>
                            <span>Species: {character.species}</span> <br/>
                            <span>Status: {character.status}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default CharDetailsCard;