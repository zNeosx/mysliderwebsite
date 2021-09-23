import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'; 
import About from './pages/About'; 
import Navigation from "./components/Navigation";

function App() {
  return (
      <Router>
        <div className="app">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
