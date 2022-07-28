import React,{useState} from 'react';
import './App.css';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import Navbar from './components/Navbar';
import Products from './components/Products';
import Customer from './components/Customer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';

  


function App() {
  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };
  return (

    <Router>
    <div className="container">
     <Navbar/>
     <Routes>
     <Route exact path='/products' element={<Products />}></Route>
     <Route exact path='/customer' element={<Customer />}></Route>
     <Route exact path='/' element={<Home/>}></Route>
    
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
