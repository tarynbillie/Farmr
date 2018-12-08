import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import ChefProfile from './ChefProfile/ChefProfile';
import FarmProfile from './FarmerProfile/FarmProfile';
// import Settings from './ChefProfile/Settings';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path={'/home'} exact component={Home} />
            <Route path={'/profile'} exact component={ChefProfile} />
            <Route path={'/profile/farmer/:id'} exact component={FarmProfile} />
            <Route path={'/'} render={() => <Redirect to='/home' />} />
            {/* <main>
              <ChefProfile/>
              <Route path={'/settings'} exact component={Settings} />
            </main> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
