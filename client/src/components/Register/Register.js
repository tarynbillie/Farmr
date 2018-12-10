import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Login/login.scss';

export default class Register extends Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            isSignUp: false,
            isSignUpError: false,
            errorMessage: ''
        }
    }

    signUp = () => {
        const body = {
            username: this.state.username,
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

        fetch('http://localhost:8080/register', init)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    isSignUp: true
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
    }

    formReset() {
        this.setState({
            username: '',
            email: '',
            password: '',
            errorMsg: ''
        })
    }

    render() {
        // const { isSignUpError, errorMessage } = this.state

        return (
            <div style={{ ...flexModal, display: this.props.isOpen ? 'flex' : 'none' }}>
                <div className='modal-layer' onClick={this.props.handleClose} style={modal}></div>
                <div className="form-container" style={form}>
                    <h1>Create your account</h1>
                    <form onSubmit={this.formSubmit} formReset={this.formReset}>
                        <label>
                            Username
                            <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
                        </label>
                        <label>
                            Email address
                      <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
                        </label>

                        <label>
                            Password
                        <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
                            <div className='error'> {this.state.errorMsg2} </div>
                        </label>
                        <div className='btn'>
                            <button type='submit' onClick={this.signUp}>Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Register.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

const flexModal = {
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

const modal = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 20,
    backgroundColor: 'transparent'
};

const form = {
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
