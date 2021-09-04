import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar"
import './App.css';
import Home from "./components/home/Home";
import Favorites from "./components/notes/Favorites";
import NoteDetail from "./components/notes/NoteDetail";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NoteDetail} />
      </Switch>
    </Router>

  );
}

export default App;
