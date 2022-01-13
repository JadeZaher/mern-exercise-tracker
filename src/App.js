import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//import Exercise from "../backend/models/exercises.model";
import Navbar from "./Components/navbar.component"
import ExerciseList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercises.component";
import CreateExercise from "./Components/create-exercise.component";
import CreateUser from "./Components/create-user.component";

function App() {
  return (
    
      <Router>
      <div className="container">
      <Navbar />
        
        <br/>
        <Routes>
        <Route path="/" exact element = {<ExerciseList/>}/>
        <Route path="/update/:id" element = {<EditExercise/>}/>
        <Route path="/create" element = {<CreateExercise/>}/>
        <Route path="/user" element = {<CreateUser/>}/>
        </Routes>
        
        </div>
      </Router>
    
  );
}

export default App;
