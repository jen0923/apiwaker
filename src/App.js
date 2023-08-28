import { Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Films from './components/Films';
import Startships from './components/Startships';
import Vehicles from './components/Vehicles';
import Species from './components/Species';

function App() {
  return (
    <div className="App">
      <Form></Form>
      <Routes>
        <Route path="/People/:id" element={<People></People>}></Route>
        <Route path="/Planets/:id" element={<Planets></Planets>}></Route>
        <Route path="/Films/:id" element={<Films></Films>}></Route>
        <Route path="/Startships/:id" element={<Startships></Startships>}></Route>
        <Route path="/Vehicles/:id" element={<Vehicles></Vehicles>}></Route>
        <Route path="/Species/:id" element={<Species></Species>}></Route>
      </Routes>
    </div>
  );
}

export default App;