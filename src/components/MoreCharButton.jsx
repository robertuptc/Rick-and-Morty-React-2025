import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
const MoreCharButton = ({ onLoadMore }) => {

    return (
        <>
        <Container className='d-flex justify-content-center mb-5'>
            <Button onClick={onLoadMore}>Load More Characters</Button>
        </Container>
        </>
    )
};

export default MoreCharButton;