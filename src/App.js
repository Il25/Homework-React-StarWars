import React from 'react';
import './App.css';
import Header from './components/header';
import Container from './components/container';
import Footer from './components/footer';
import People from './components/people';
import Planets from './components/planets';
import Films from './components/films';
import Species from './components/species';
import Vehicles from './components/vehicles';
import Starships from './components/starships';

import { BrowserRouter as Router, Route} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Container}/>
          <Route path="/people" component={People}/>
          <Route path="/planets" component={Planets}/>
          <Route path="/films" component={Films}/>
          <Route path="/species" component={Species}/>
          <Route path="/vehicles" component={Vehicles}/>
          <Route path="/starships" component={Starships}/>
          <Footer />
        </div>
      </Router>  
    );
  };
};

export default App;
