import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Add from "./components/Add";
import Trips from "./components/Trips";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">travelist.</header>

        <main className="Main">
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/">
              <Trips />
            </Route>
          </Switch>
        </main>

        <footer className="Footer">
          <Navigation />
        </footer>
      </div>
    </Router>
  );
}

export default App;
