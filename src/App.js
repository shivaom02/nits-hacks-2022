import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

export const Toastify=(type,msg)=>{
  
  switch(type){
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;     
  }
  
}

const Team = React.lazy( () => import("./pages/Team" ) );
const Home = React.lazy( () => import("./pages/Home" ) );

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/team' element={<Team />} />

        </Routes>
      </Router>
  );
}

export default App;
