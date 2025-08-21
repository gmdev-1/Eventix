import { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router";
import Home from './Admin/pages/Home';
import Login from './Admin/pages/Login';
import Register from './Admin/pages/Register';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Home />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
