import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import ChefProfile from './ChefProfile/ChefProfile';
import FarmProfile from './FarmerProfile/FarmerProfile';
import Farmerlocation from './FarmerLocation/FarmLocation';
import Invoice from './Invoices/Invoice';
import Reminder from './Reminders/Reminder';
// import Settings from './ChefProfile/Settings';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path={'/home'} exact component={Home} />
            <Route path={'/profile'} exact component={ChefProfile} />
            <Route path={'/farmers'} exact component={FarmProfile} />
            <Route path={'/farmerlocation'} exact component={Farmerlocation} />
            <Route path={'/invoice'} exact component={Invoice} />
            <Route path={'/reminder'} exact component={Reminder} />
            {/* <Route path={'/profile/farmer/:id'} exact component={FarmProfile} /> */}
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
