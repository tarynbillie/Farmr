import React, { Component } from 'react'
import Side from '../HeaderSide/SideNav.js';
import Header from '../HeaderSide/Header.js';
import '../HeaderSide/headerAndSide.scss';
import './invoices.scss';


export default class Invoice extends Component {
  render() {
    return (
      <section className='farmers'>
        <div className='container'>
          <Side />
          <div className='main'>
          <Header/>
          <div className='invoice'>
            <h1>Invoices</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
