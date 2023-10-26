import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
  
   <>
      <div className='container center1'>
        <BrowserRouter>
          <Routes>
             <Route path = "/" element={<Header/>}/>
             <Route path = "/home" element={<Header/>}/>
             <Route path="/about" element={<About />}/>
             <Route path="/contact" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
      </div>
   </>
  );
}

export default App;
