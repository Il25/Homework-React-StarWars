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
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Container}/>
            <Route exact path="/people" component={People}/>
            <Route exact path="/planets" component={Planets}/>
            <Route exact path="/films" component={Films}/>
            <Route exact path="/species" component={Species}/>
            <Route exact path="/vehicles" component={Vehicles}/>
            <Route exact path="/starships" component={Starships}/>
          </Switch>
          <Footer />
        </div>
      </Router>  
    );
  };
};

export default App;
