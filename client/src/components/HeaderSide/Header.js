import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../HeaderSide/headerAndSide.scss';
import '../ChefProfile/profile.scss';


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to={'/home'} className='header__link' onClick={() => localStorage.clear()}>
                    <img src='../../assets/arrow_back.svg' alt='back arrow' />
                    <h3>Log out</h3>
                </Link>
                <div className='header__gear'>
                    <img src='../../assets/Settings-gear.svg' alt='settings' />
                </div>
            </div>
        )
    }
}
