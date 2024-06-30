import Home from './Home';
import logo from './logo.svg';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Process from './Process';
import Gallery from './Gallery';
import DetailedImage from './DetailedImage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/myprocess">
              <Process />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
            <Route path="/gallery/:id">
              <DetailedImage />
            </Route>
          </Switch>
        </div>
      </div> 
    </Router>
      
  );
}

export default App;
