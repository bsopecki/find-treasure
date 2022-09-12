import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Container from "./UI/container/Container";
import Login from "./components/login/Login";
import GameBoard from "./components/gameboard/GameBoard";

function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Routes>
            <Route  path="/" exact element={<Login/>}/>
            <Route path="/gameboard" element={<GameBoard/>}/>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
