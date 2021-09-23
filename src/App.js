import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'; 
import About from './pages/About'; 
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
