import { createBrowserRouter } from 'react-router-dom'
// Components
import App from './App'
import AboutPage from './pages/AboutPage'
import ErrorPage from './pages/ErrorPage'
// import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import CharacterDetailsPage from './pages/CharacterDetailsPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            // {
            //     index: true,
            //     element: <HomePage/>
            // },
            {
                path: "/about",
                element: <AboutPage/>
            },
            {
                path: "/characters",
                element: <CharactersPage/>
            },
            {
                path: "/character/:id",
                element: <CharacterDetailsPage/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);

export default router;