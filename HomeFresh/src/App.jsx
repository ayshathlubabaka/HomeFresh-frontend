import 'tailwindcss/tailwind.css';
import Nav from './Components/Nav';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

 

  return (
    <Router>

      <Nav />
      <Routes>
        <Route path = "/"  element = {<Home />} />
        <Route path = "/login"  element = {<Login />} />
        <Route path = "/signup"  element = {<Signup />} />

      </Routes>


      
    </Router>
  )
}

export default App
