import Container from "react-bootstrap/esm/Container";

const HomePage = () => {
    return (
        <>
        <Container className='d-flex flex-column justify-content-center align-items-center min-vh-100 p-4'>
            <article>
                <h1 className="text-center">Rick and Morty </h1>
                <p className="text-center fs-5">
                    Rick and Morty is an adult animated science fiction sitcom created by Justin Roiland and Dan Harmon. The series follows the misadventures of Rick Sanchez, a brilliant but alcoholic and nihilistic scientist, and his grandson Morty Smith, a nervous but good-hearted teenager. 
                </p>
                <p className="text-center fs-5">
                    They frequently travel to other dimensions and planets, often causing trouble for Morty's family (Jerry, Beth, and Summer) who are often dragged along.
                </p>
            </article>
        </Container>
        </>
    )
};

export default HomePage;
