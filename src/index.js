import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import reportWebVitals from './reportWebVitals';

import Register from './pages/Register/Register';
import Signin from './pages/Signin/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />}></Route>
  <Route path='/register' element={<Register />}></Route>
  <Route path='/signin' element={<Signin />}></Route>
  <Route path='/cart' element={<Cart />}></Route>
</Routes>
</BrowserRouter>
    //<App />
    //<Home />
    //<Cartpage />
   // <Register />
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
