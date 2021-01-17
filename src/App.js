import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/Navbar"
import ExercisesList from "./components/ExercisesList"
import EditExercise from "./components/EditExercise"
import CreateExercise from "./components/CreateExercise"
import CreateUser from "./components/CreateUser"
import MealList from './components/MealList'

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/meals" component={MealList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Router>
    </div>
  );
}

export default App;