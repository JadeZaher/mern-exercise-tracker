import {BrowserRouter as Router, Route} from "react-router-dom";
import Exercise from "../backend/models/exercises.model";
import './App.css';
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component = {ExerciseList}/>
      <Route path="/edit/:id" component = {EditExercise}/>
      <Route path="/create" component = {CreateExercise}/>
      <Route path="/delete" component = {DeleteExercise}/>
    </Router>
  );
}

export default App;
