import React from "react";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Student from "./pages/Student";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/login' element = {<Login/>} />
      <Route path='/student' element = {<Student/>} />
      <Route path='/register' element = {<Register/>} />
      {/* <Route path='/setAvatar' element = {<SetAvatar/>} />
      <Route path='/' element = {<Chat/>} /> */}
    </Routes>
 </BrowserRouter>
  );
}

export default App;
