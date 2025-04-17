import axios from 'axios'
import { useState, useEffect } from 'react';
// Components
import MoreCharButton from '../components/MoreCharButton';
// Bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';


const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [nextPage, setNextPage] = useState('');

    useEffect(()=> {
        getEpisodes(`https://rickandmortyapi.com/api/character`)
    }, [])


    const getEpisodes = async(webUrl) => {
        const results = await axios.get(webUrl)
        const data = await results.data.results
        setCharacters([...characters, ...data])
        setNextPage(results.data.info.next)
    };


    return (
        <>
            <Container className="d-flex flex-wrap my-5">
            {characters.map((character, i) => (
                <Card className='m-1' style={{ width: '13rem' }} key={i}>
                    <Card.Img variant="top" src={character.image} />
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text className="fs-6 mb-0">
                                <span>Gender: {character.gender}</span> <br/>
                                <span>Species: {character.species}</span> <br/>
                                <span>Status: {character.status}</span>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
            </Container>

            <MoreCharButton onLoadMore={()=> {getEpisodes(nextPage)}} />
        </>
    )
};

export default CharactersPage;