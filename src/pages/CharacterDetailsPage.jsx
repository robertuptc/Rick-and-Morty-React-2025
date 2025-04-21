// axios
import axios from "axios";
// Components
import CharDetailsCard from "../components/CharDetailsCard";
// React Router Dom
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetailsPage = () => {
    const [character, setCharacter] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        const getCharacter = async () => {
            const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            const data = result.data
            setCharacter(data)
        }
        getCharacter()
    }, [id])

    return (
        <CharDetailsCard character={character}/>
    )
};

export default CharacterDetailsPage;