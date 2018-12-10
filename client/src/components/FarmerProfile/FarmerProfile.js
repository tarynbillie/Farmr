import React, { Component } from 'react'
import Header from '../HeaderSide/Header.js';
import Side from '../HeaderSide/SideNav.js';
import '../ChefProfile/profile.scss';

export default class FarmerProfile extends Component {


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


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    formReset() {
        this.setState({
            name: '',
            amount: '',
            units: ''
        })
    }


    render() {
        return (
            <div className='container'>
                <Side />
                <div className='main'>
                    <Header />
                    <div className='container'>
                        <div className='profile'>
                            <h1>Farmer Profile</h1>
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
                            <form className='form2' onSubmit={this.formSubmit} formReset={this.formReset}>
                                <h2>What do you have?</h2>
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
                                            <option>Turnip</option>
                                            <option>Raddish</option>
                                            <option>Beet</option>
                                            <option>Carrot</option>
                                            <option>Kidney</option>
                                            <option>Pinto</option>
                                            <option>Peas</option>
                                            <option>Soybean</option>
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
                                <button type='submit' onSubmit={this.formSubmit}>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
