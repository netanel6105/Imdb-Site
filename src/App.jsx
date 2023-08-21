import React from 'react'
import './App.css';
import { BrowserRouter , Routes, Route ,Link} from "react-router-dom";
import Home from './components/home';

function App() {
  return (

    <BrowserRouter>
      <header className='container'>
        {/* <Link to={"/"} className="me-2">Home</Link>
        <Link to={"/"} className="me-2"></Link>
        <Link to={"/"} className="me-2"></Link> */}
        

      </header>

    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/*' element={<div>
        <h2>page 404, not found!</h2>
      </div>}/>
    </Routes>

    </BrowserRouter>
   
  );
}

export default App;
