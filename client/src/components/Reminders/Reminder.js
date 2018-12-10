import React, { Component } from 'react'
import Side from '../HeaderSide/SideNav.js';
import Header from '../HeaderSide/Header.js';
import '../HeaderSide/headerAndSide.scss';
import './reminder.scss';


export default class Reminder extends Component {
  render() {
    return (
      <section className='farmers'>
        <div className='container'>
          <Side />
          <div className='main'>
            <Header />
            <div className='reminder'>
              <h1>Reminders</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
