import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
// import ChefProfile from '../ChefProfile/ChefProfile';
import './login.scss';

class Login extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      isLoggedIn: false,
      isLoginError: false,
      errorMessage: ''
    }
  }

  login = () => {
    // construct the POST body
    const body = {
      email: this.state.email,
      password: this.state.password
    };

    const init = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch('http://localhost:8080/login', init)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        /*
          {
            token: 'wpiefjaw;oeifjaw;oeifj.oiwaejfoawiejfo.owaiefoewij'
          }
        */
         localStorage.setItem('token', data.token);
         this.setState({
           isLoggedIn: data.login
                   });
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.email.trim() === '' || this.state.password === '') {
      this.setState({
        errorMsg1: '*field is required',
        errorMsg2: '*field is required'
      })
    } else {
      this.login();
    }
  }

  formReset() {
    this.setState({
      email: '',
      password: '',
      errorMsg: '',
    })
  }


  renderLogin = () => {
    // const { isLoginError, errorMessage } = this.state
    return (
      <div style={{ ...flex, display: this.props.isOpen ? 'flex' : 'none' }}>
        <div className='modal-layer' onClick={this.props.handleClose} style={modalLayer}></div>
        <div className="form-container" style={formModal}>
          <h1>Log in to your account</h1>
          <form onSubmit={this.formSubmit} formReset={this.formReset}>
            <label>
              Email address
                      <input type='email' name='email' value={this.state.email} onChange={this.handleChange}/>
            </label>
            <label>
              Password
                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
              <div className='error'> {this.state.errorMsg2} </div>
            </label>
            <p>Forgot your password?</p>
            <div className='btn'>
              <button type='submit' onClick={this.login}>Log in</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  render() {
    const { isLoggedIn } = this.state

    // Handle the Signup/Login
    if (!isLoggedIn){ 
      return this.renderLogin() 
    } else {
      return (
        <Redirect to='/profile'/>
      )

    }

  }
}

Login.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Login;

const flex = {
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  zIndex: 20,
  overflow: 'hidden',
  backgroundColor: 'rgba(57,57,57,0.6)',
};

const modalLayer = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  zIndex: 20,
  backgroundColor: 'transparent'
};

const formModal = {
  position: 'absolute',
  color: 'rgb(57,57,57)',
  backgroundColor: '#FFFFFF',
  width: '420px',
  maxWidth: '100%',
  maxHeight: '100%',
  zIndex: 20,
  borderRadius: '8px',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column'
};
