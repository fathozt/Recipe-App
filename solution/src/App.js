import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/about/About';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Details from './pages/details/Details';
import Login from './pages/login/Login';

function App() {
  return (
    <div >
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/details' element={<Details/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
