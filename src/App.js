import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import FormData from './components/FormData';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />}></Route>
        <Route path='/data' element={<FormData />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
