import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './profile.scss';
import './Settings';

const baseUrl = 'http://localhost:8080'

export default class ChefProfile extends Component {

    state = {
        isLoading: true,
        userInfo: {}
        
    }
    componentWillMount() {
        // here grab token from localStorager 
        const init = {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        fetch(`${baseUrl}/profile`, init)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                this.setState({ userInfo: data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
            })
    };


    // componentDidMount() {
    //     this.getUser();
    // }


    render() {
        // const { isLoading, userInfo } = this.state

        return (
            <div className='profile-container'>
                <div className='user-side'>
                    <Link to={'/home'}>
                        <h1>FARMR</h1>
                    </Link>
                    <img src='../assets/DSC_2366.jpg' alt='user' className='user-side__photo' />
                    <span className='user-side__title'>Welcome {this.state.username} </span>
                    <ul className='user-side__paths'>
                        <div className='nav'>
                            <img src='../assets/User.svg' alt='user icon'></img>
                            <li>Chef profile</li>
                        </div>
                        <div className='nav'>
                            <img src='../assets/Wheat.svg' alt='wheat icon'></img>
                            <li>Farmers</li>
                        </div>
                        <div className='nav'>
                            <img src='../assets/MoneyBill.svg' alt='money icon'></img>
                            <li>Invoices</li>
                        </div>
                        <div className='nav'>
                            <img src='../assets/Bell.svg' alt='bell icon'></img>
                            <li>Reminders</li>
                        </div>
                    </ul>
                </div>
                <div className='main'>
                    <div className='header'>
                        <img src='../../assets/arrow_back.svg' alt='back arrow'></img>
                        <h3>Back</h3>
                    </div>
                    <div className='container'>
                        <div className='profile'>
                            <h1>Profile</h1>
                            <form className='form1'>
                                <h2>Restaurant details</h2>
                                <div className='first'>
                                    <label>
                                        Business name
                                <input type='text' />
                                    </label>
                                    <label>
                                        Phone number
                                <input type='text' />
                                    </label>
                                </div>
                                <div className='second'>
                                    <label>
                                        Address
                                <input type='text' />
                                    </label>
                                </div>
                                <div className='first'>
                                    <label>
                                        City
                                <input type='text' />
                                    </label>
                                    <label>
                                        Country
                                <input type='text' />
                                    </label>
                                </div>
                                <div className='first'>
                                    <label>
                                        Province
                                <select className='prov'>
                                            <option>Select</option>
                                            <option>Alberta</option>
                                            <option>British Columbia</option>
                                            <option>Manitoba</option>
                                            <option>New Brunswick</option>
                                            <option>Newfoundland and Labrador</option>
                                            <option>Northwest Territories</option>
                                            <option>Nova Scotia</option>
                                            <option>Nunavut</option>
                                            <option>Ontario</option>
                                            <option>Prince Edward Island</option>
                                            <option>Quebec</option>
                                            <option>Saskatchewan</option>
                                            <option>Yukon</option>
                                        </select>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className='wants'>
                            <h1>Produce</h1>
                            <form className='form2'>
                                <h2>What are you looking for?</h2>
                                <div className='first'>
                                    <label>
                                        Leafy Greens
                                        <select>
                                            <option>Select</option>
                                            <option>Kale</option>
                                            <option>Romaine</option>
                                            <option>Spring Mix</option>
                                            <option>Spinach</option>
                                            <option>Baby Spinach</option>
                                        </select>
                                    </label>
                                    <label>
                                        Root
                                        <select>
                                            <option>Select</option>
                                            <option>Turnip</option>
                                            <option>Raddish</option>
                                            <option>Beet</option>
                                            <option>Carrot</option>
                                        </select>
                                    </label>
                                    <label>
                                        Legumes
                                        <select>
                                            <option>Select</option>
                                            <option>Kidney</option>
                                            <option>Pinto</option>
                                            <option>Peas</option>
                                            <option>Soybean</option>
                                            <option>Black Bean</option>
                                            <option>Lentils</option>
                                        </select>
                                    </label>
                                    <label>
                                        Nightshade
                                        <select>
                                            <option>Select</option>
                                            <option>Tomato</option>
                                            <option>Cherry Tomato</option>
                                            <option>Potato</option>
                                            <option>Eggplant</option>
                                            <option>Bell Peppers</option>
                                        </select>
                                    </label>
                                </div>
                                <button type='submit'>Add</button>
                            </form>
                            <div className='oders'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
