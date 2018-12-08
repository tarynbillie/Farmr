import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './home.scss';

export default class Home extends Component {


  state = {
    isOpen1: false,
    isOpen2: false

  }

  showModal1 = () => {
    this.setState({
      isOpen1: true,
    });
  };

  hideModal1 = () => {
    this.setState({
      isOpen1: false
    });
  };

  showModal2 = () => {
    this.setState({
      isOpen2: true,
    });
  };

  hideModal2 = () => {
    this.setState({
      isOpen2: false
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
  }

  // formReset() {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     errorMsg: ''
  //   })
  // }


  render() {
    return (
      <div className='home'>
        <section className='hero-container'>
          <div className='header'>
            <Link to={'/'} className='header__link'>
              <h1>FARMR</h1>
            </Link>
            <div className='header__nav'>
              <Login handleClose={this.hideModal1} isOpen={this.state.isOpen1} />
              <Register handleClose={this.hideModal2} isOpen={this.state.isOpen2} />
              <a href='#section1'>
                <h3>About</h3>
              </a>
              <a href='#section2'>
              <h3>Contact</h3>
              </a>
              <h3 className='header__log' onClick={this.showModal1}>Login</h3>
              <button className='signup-btn' onClick={this.showModal2}>Sign up</button>
            </div>
          </div>
          <div className='hero-container__blurb'>
            <p className='firstBlurb'>From their farm to your table</p>
            <p className='secondBlurb'>Connecting you and your farmer, making communication effortless.</p>
            <div className='more'>
              <h3>Learn more</h3>
              <button className='signup-btn' onClick={this.showModal2}>Sign up</button>
            </div>
          </div>
        </section>
        <section className='about-container' id='section1'>
          <div className='about-container__background'>
            <div className='about-us'>
              <h3>ABOUT US</h3>
              <h4>Farmers are just the best</h4>
              <p>Mallet herbs basil nest, in welding equipment pens quail. Grapes at yams mushrooms organic berries gobble.
                Haybine carrots soybeans, owls duck raising or, cheep in plows. Prairie dogs raccoons robins rats.
          </p>
            </div>
            <img src='../assets/About.jpg' alt='bowl of food' />
          </div>
        </section>
        <footer className='contact-container' id='section2'>
          <div className='first-column'>
            <h2>FARMR</h2>
            <div className='first-column__icon'>
              <img src='../assets/Location.svg' alt='location icon' />
              <h4>5642 11 Line, Harriston, ON N0G 1Z0</h4>
            </div>
            <div className='first-column__icon'>
              <img src='../assets/Phone.svg' alt='phone icon' />
              <h4>519 876 2987</h4>
            </div>
            <div className='first-column__icon'>
              <img src='../assets/Email.svg' alt='email icon' />
              <h4>tarynli@hotmail.com</h4>
            </div>
          </div>
          <div className='second-column'>
            <h1>Contact Us</h1>
            <form onSubmit={this.formSubmit} formReset={this.formReset}>
              <div className='first'>
                <label>
                  Name
              <input type='text' name='name'/>
                </label>
                <label>
                  Email
              <input type='text' name='email'/>
                </label>
              </div>
              <div className='second'>
                <label>
                  Business name
              <input type='text' name='buinessName'/>
                </label>
                <label>
                  Phone number
              <input type='text' name='phoneNum'/>
                </label>
              </div>
              <label>
                Message
              <textarea className='input-message' type='text' name='message' rows='5'/>
              </label>
              <div className='btn'>
                <button type='submit'>Send</button>
              </div>
            </form>
          </div>
          <div className='copy'>
            <h5>© FARMR 2018. All Rights Reserved.</h5>
          </div>
        </footer>
      </div>
    )
  }
}
