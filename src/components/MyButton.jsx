import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

const MyButton = ({ setDisplayMainPage }) => {
    const [colors, setColors] = useState(['primary', 'secondary', 'success', 'warning', 'danget', 'info', 'light',  'dark'])
    const [count, setCount] = useState(0)

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setCount((prev) => (prev + 1) % colors.length) 
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])

    
    return (
        <>
            <h1>Watch Rick and Morty</h1>
            <Button variant={colors[count]} onClick={()=> {setDisplayMainPage(true)}}>Click Me!</Button>
        </>
    )
};

export default MyButton;