import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import '../HeaderSide/headerAndSide.scss';
import '../ChefProfile/profile.scss';

export default class HeaderAndSide extends Component {
    render() {
        return (
            <div className='user-side'>
                <Link to={'/home'} className='user-side__link'>
                    <h1>FARMR</h1>
                </Link>
                <img src='../assets/DSC_2366.jpg' alt='user' className='user-side__photo' />
                <span className='user-side__title'>Welcome</span>
                <ul className='user-side__paths'>
                    <div className='nav'>
                        <Link to={'/profile'} className='nav__link'>
                            <img src='../assets/User.svg' alt='user icon' />
                            <li>Chef profile</li>
                        </Link>
                    </div>
                    <div className='nav'>
                        <Link to={'/farmers'} className='nav__link'>
                            <img src='../assets/User.svg' alt='user icon' />
                            <li>Farmer profile</li>
                        </Link>
                    </div>
                    <div className='nav'>
                        <Link to={'/farmerlocation'} className='nav__link'>
                            <img src='../assets/Wheat.svg' alt='wheat icon' />
                            <li>Location</li>
                        </Link>
                    </div>
                    <div className='nav'>
                        <Link to={'/invoice'} className='nav__link'>
                            <img src='../assets/MoneyBill.svg' alt='money icon' />
                            <li>Invoices</li>
                        </Link>
                    </div>
                    <div className='nav'>
                        <Link to={'/reminder'} className='nav__link'>
                            <img src='../assets/Bell.svg' alt='bell icon' />
                            <li>Reminders</li>
                        </Link>
                    </div>
                </ul>
            </div>
        )
    }
}
