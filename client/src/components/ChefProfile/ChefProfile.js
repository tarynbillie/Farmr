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
        leaf: '',
        root: '',
        legume: '',
        night: '',
        order: []
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
                console.log(data.want_id[0].leaf)
                this.setState({ userInfo: data, isLoading: false })
            })
            .catch(err => {
                console.log(err)
            })
    };


    // componentDidMount() {
    //     this.getUser();
    // }

    formSubmit = (e) => {
        e.preventDefault();
        let newOrder = {
            leaf: this.state.leaf,
            root: this.state.root,
            legume: this.state.legume,
            night: this.state.night
        }

        const init = {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'content-type': 'application/json'
            }
        };
        fetch(`${baseUrl}/want`, init)
        // .then(() => {
        //     this.props.handleClose();
        // })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    formReset() {
        this.setState({
            leaf: '',
            root: '',
            legume: '',
            night: ''
        })
    }


    render() {
        if (this.state.userInfo.want_id) {
            let rows = this.state.userInfo.want_id
                .map((item) => {
                    return <Order
                        // id={item.productID}
                        leaf={item.leaf}
                        root={item.root}
                        legume={item.legume}
                        night={item.night}
                        quantity={item.quantity}
                        date_created={item.date_created}
                        delete={this.deleteItem}
                    />
                });
            // const { isLoading, userInfo } = this.state

            return (
                <section>
                    <div className='container'>
                        <Side/>
                        <div className='main'>
                            <Header/>
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
                                        <button type='submit'>Save</button>
                                    </form>
                                </div>
                                <div className='wants'>
                                    <h1>Produce</h1>
                                    <form className='form2' onSubmit={this.formSubmit} formReset={this.formReset}>
                                        <h2>What are you looking for?</h2>
                                        <div className='first'>
                                            <label>
                                                Leafy Greens
                                        <select name='leaf' value={this.state.leaf} onChange={this.handleChange}>
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
                                        <select name='root' value={this.state.root} onChange={this.handleChange}>
                                                    <option>Select</option>
                                                    <option>Turnip</option>
                                                    <option>Raddish</option>
                                                    <option>Beet</option>
                                                    <option>Carrot</option>
                                                </select>
                                            </label>
                                            <label>
                                                Legumes
                                        <select name='legume' value={this.state.legume} onChange={this.handleChange}>
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
                                        <select name='night' value={this.state.night} onChange={this.handleChange}>
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
                                    <div className='orders'>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className='td-left'>
                                                        Item
                                                </th>
                                                    <th>
                                                        Quantity
                                                </th>
                                                    <th>
                                                        Last Ordered
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rows}
                                                {/* <tr>
                                                    <td className='td-left'>
                                                    {this.state.leaf}
                                                    </td>
                                                    <td>
                                                    {this.state.legume}
                                                    {/* {this.props.quantity} */}
                                                    {/* </td>
                                                    <td>
                                                    {this.state.root}
                                                    </td>
                                                    <td>
                                                        <div className='orders__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='td-left'>
                                                        Eggplant
                                                    </td>
                                                    <td>
                                                        3 lbs
                                                    </td>
                                                    <td>
                                                        09/24/2019
                                                    </td>
                                                    <td>
                                                        <div className='orders__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='td-left'>
                                                        Carrot
                                                    </td>
                                                    <td>
                                                        5 lbs
                                                    </td>
                                                    <td>
                                                        09/24/2019
                                                    </td>
                                                    <td>
                                                        <div className='orders__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className='td-left'>
                                                        Tomato
                                                    </td>
                                                    <td>
                                                        2 lbs
                                                    </td>
                                                    <td>
                                                        09/24/2019
                                                    </td>
                                                    <td>
                                                        <div className='orders__delete-icon' id={this.props.id} onClick={this.props.delete}></div>
                                                    </td>
                                                </tr> */} 
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
