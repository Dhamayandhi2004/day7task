// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Login from './components/Login';
import './App.css'

function App(){
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/signup'element={<SignUp/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default App
