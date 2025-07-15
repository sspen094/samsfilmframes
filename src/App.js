import Home from './Home';
import logo from './logo.svg';
import Navbar from "./Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Gallery from './Gallery';
import DetailedImage from './DetailedImage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/samsfilmframes/">
              <Home />
            </Route>
            <Route exact path="/samsfilmframes/gallery">
              <Gallery />
            </Route>
            <Route path="/samsfilmframes/gallery/:id">
              <DetailedImage />
            </Route>
          </Switch>
        </div>
      </div> 
    </Router>
      
  );
}

export default App;
