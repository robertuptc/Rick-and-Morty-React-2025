import axios from 'axios'
import { useState, useEffect } from 'react';
// Components
import CharCard from '../components/CharCard';
import MoreCharButton from '../components/MoreCharButton';
// Bootstrap
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
                {characters.map((character, i) => <CharCard key={i} character={character} i={i}/>)}
            </Container>

            <MoreCharButton onLoadMore={()=> {getEpisodes(nextPage)}} />
        </>
    )
};

export default CharactersPage;