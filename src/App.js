import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Add from "./components/Add";
import Trips from "./components/Trips";
import DestinationShuffle from "./components/DestinationShuffle";
import SavedTrip from "./components/SavedTrip";
import EditTrip from "./components/EditTrip";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">travelist.</header>

        <main className="Main">
          <Switch>
            <Route path="/destinationShuffle">
              <DestinationShuffle />
            </Route>
            <Route path="/trips">
              <Trips />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/saved-trip/:id/edit">
              <EditTrip />
            </Route>
            <Route path="/saved-trip/:id">
              <SavedTrip />
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
