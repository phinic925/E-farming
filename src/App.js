import React from 'react';
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
  

  
  return (
   
    <Router>
    <div className="container">
     <Navbar/>
     <Routes>
     {/* <Route exact path='/products' element={<Products />}></Route> */}
     <Route exact path='/customer' element={<Customer />}></Route>
     <Route exact path='/' element={<Home/>}></Route>
    
      </Routes>
      
      
    </div>
    </Router>
 
   
  );
}

export default App;
