import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import ExerciseList from "./components/exercise-list";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import CreateUser from "./components/create-user";




function App() {
  
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br />
        <Route exact path = '/' component = {ExerciseList} />
        <Route path = '/edit/:id' component = {EditExercise} />
        <Route path = '/create' component = {CreateExercise} />
        <Route path = '/user' component = {CreateUser} />
      </div>
    </Router>
     
    
  );
}

export default App;





