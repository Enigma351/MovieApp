import './../src/css/App.css'
import HomePage from './pages/HomePage'
import Favorites from './pages/Favorites'
import {Route, Routes} from "react-router-dom"
import NavBar from './Components/NavBar'
import { MovieProvider } from './Context/MovieContext'
const App=()=> {
 
  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/favorites" element={<Favorites/>}>
          </Route>
        </Routes>
      </main>
    </MovieProvider>  
  )
}

export default App
