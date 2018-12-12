import React, { Component } from 'react'
import Order from './Order/Order';
import Header from '../HeaderSide/Header.js';
import Side from '../HeaderSide/SideNav.js';
import './profile.scss';
import './Settings';

const baseUrl = 'http://localhost:8080';

export default class ChefProfile extends Component {

    state = {
        isLoading: true,
        userInfo: {
            want_id: []
        },
        name: '',
        amount: '',
        units: '',
        order: []
    }

    fetch = () => {
        const init = {
            method: "GET",
            headers: {
                // here grab token from localStorager 
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        fetch(`${baseUrl}/profile`, init)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                this.setState({ userInfo: data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentWillMount() {
        this.fetch();
    };

    formSubmit = (e) => {
        e.preventDefault();
        let newOrder = {
            name: this.state.name,
            amount: this.state.amount,
            units: this.state.units,
            profile_id: this.state.userInfo._id
        }
        console.log(newOrder)

        const init = {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'content-type': 'application/json'
            }
        };
        fetch(`${baseUrl}/want`, init)
            .then((response) => {
                return response.json();
            })
            .then(() => this.fetch())
            .catch(err => {
                console.log(err)
            })
    }

    deleteItem = (id) => {
        const init = {
            method: 'DELETE'
        }

        fetch(`${baseUrl}/want/${id}/delete`, init)
            .then(() => this.fetch())
            .catch(err => {
                console.log(err);
            });
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    // formReset = () => {
    //     this.setState({
    //         name: '',
    //         amount: '',
    //         units: ''
    //     })
    // }


    render() {
        // console.log(this.state.userInfo._id)
        if (this.state.userInfo.want_id) {
            let rows = this.state.userInfo.want_id
                .map((item) => {
                    return <Order
                        id={item._id}
                        name={item.name}
                        amount={item.amount}
                        units={item.units}
                        date_created={item.date_created}
                        deleteItem={this.deleteItem}
                    />
                });
            // const { isLoading, userInfo } = this.state

            return (
                <div className='container'>
                    <Side />
                    <div className='main'>
                        <Header />
                        <div className='container'>
                            <div className='profile'>
                                <h1>Chef Profile</h1>
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
                                    <button type='submit'>Save</button>
                                </form>
                            </div>
                            <div className='wants'>
                                <h1>Produce</h1>
                                <form className='form2' onSubmit={this.formSubmit} >
                                    <h2>What are you looking for?</h2>
                                    <div className='first'>
                                        <label>
                                            Produce
                                            <select name='name' value={this.state.name} onChange={this.handleChange}>
                                                <option>Select Produce</option>
                                                <option>Kale</option>
                                                <option>Romaine</option>
                                                <option>Spring Mix</option>
                                                <option>Spinach</option>
                                                <option>Baby Spinach</option>
                                                <option>Broccoli</option>
                                                <option>Cauliflower</option>
                                                <option>Turnip</option>
                                                <option>Eggplant</option>
                                                <option>Raddish</option>
                                                <option>Beet</option>
                                                <option>Carrot</option>
                                                <option>Kidney</option>
                                                <option>Pinto</option>
                                                <option>Peas</option>
                                                <option>Black Bean</option>
                                                <option>Lentils</option>
                                            </select>
                                        </label>
                                        <label>
                                            Amount
                                            <select name='amount' value={this.state.amount} onChange={this.handleChange}>
                                                <option>Select Amount</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </select>
                                        </label>
                                        <label>
                                            Units
                                            <select name='units' value={this.state.units} onChange={this.handleChange}>
                                                <option>Select Unit</option>
                                                <option>lbs</option>
                                                <option>bunches</option>
                                                <option>heads</option>
                                            </select>
                                        </label>
                                    </div>
                                    <button type='submit' onClick={() => this.fetch()} onSubmit={this.formSubmit}>Add</button>
                                </form>
                                <div className='orders'>
                                    <table>
                                        <thead key='thead'>
                                            <tr>
                                                <th className='one'>
                                                    Item
                                                </th>
                                                <th className='two'>
                                                    Quantity
                                                </th>
                                                <th className='three'>
                                                    Units
                                                </th>
                                                <th className='four'>
                                                    Last Ordered
                                                </th>
                                            </tr>
                                        </thead>
                                            <tbody key='tbody'>
                                                {rows}
                                            </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
