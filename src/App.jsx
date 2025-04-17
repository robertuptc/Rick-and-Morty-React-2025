import './App.css'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';

// Components
import MyNavbar from './components/MyNavbar'
import MyButton from './components/MyButton'

function App() {
  const [displayMainPage, setDisplayMainPage] = useState(false)
  
  return (
    <>
      {displayMainPage ? 
        <>
          <MyNavbar />
          <Outlet/>
        </>
      :
      <Container className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
        <MyButton setDisplayMainPage={setDisplayMainPage}/> 
      </Container>
      }
    </>
  )
}

export default App
