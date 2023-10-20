import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Error from './pages/Error';

import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
