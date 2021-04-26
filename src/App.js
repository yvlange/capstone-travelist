import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./components/Add";
import Trips from "./components/Trips";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <header>travelist.</header>
        <main className="Main"></main>
        <footer className="Footer">
          <Switch>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/trips">
              <Trips />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </footer>
      </div>
    </Router>
  );
}

export default App;
