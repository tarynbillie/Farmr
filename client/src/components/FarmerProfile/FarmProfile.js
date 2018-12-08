import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../ChefProfile/profile.scss';

export default class FarmProfile extends Component {
  render() {
    return (
      <div className='profile-container'>
        <div className='header'>
          <Link to={'/home'}>
            <img src='../../assets/arrow_back.svg' alt='back arrow'></img>
            <h1>Back</h1>
          </Link>
        </div>

        <div className='user-side'>
          <img src='../assets/DSC_2366.jpg' alt='user' className='user-side__photo'  />
          {/* USERICON - this.state.userImage */}
          {/* user.username */}
          <span className='user-side__title'>Taryn Li</span>
          <ul className='user-side__paths'>
            <Link to='/settings'>
              <li>Profile</li>
            </Link>
            <li>Chefs</li>
            <li>Invoices</li>
            <li>Reminders</li>
          </ul>
        </div>
      </div>
    )
  }
}
