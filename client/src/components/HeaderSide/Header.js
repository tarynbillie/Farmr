import React, { Component } from 'react'
import '../HeaderSide/headerAndSide.scss';
import '../ChefProfile/profile.scss';


export default class Header extends Component {
    render() {
        return (
                <div className='header'>
                    <img src='../../assets/arrow_back.svg' alt='back arrow' />
                    <h3>Back</h3>
                    <div className='header__gear'>
                        <img src='../../assets/Settings-gear.svg' alt='settings' />
                    </div>
                </div>
        )
    }
}
