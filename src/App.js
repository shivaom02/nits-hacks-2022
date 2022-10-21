import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

const Team = React.lazy( () => import("./pages/Team" ) );
const Home = React.lazy( () => import("./pages/Home" ) );
const Profile = React.lazy( () => import("./pages/Profile" ) );

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/team' element={<Team />} />
          <Route exact path='/profile' element={<Profile />} />

        </Routes>
      </Router>
  );
}

export default App;
