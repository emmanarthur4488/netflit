import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Questions from './Components/Questions/Questions';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
        </Routes>
        <Hero/>
        <Main/>
        <Questions/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
