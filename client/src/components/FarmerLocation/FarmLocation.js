import React, { Component } from 'react';
import Side from '../HeaderSide/SideNav.js';
import Header from '../HeaderSide/Header.js';
import ResultsMap from './ResultsMap';
import './farmerLocation.scss';

export default class FarmerLocation extends Component {
  render() {
    return (
      <section className='farmers-location'>
        <div className='container'>
          <Side />
          <div className='main'>
            <Header />
            <div className='avail'>
              <h1>Available farmers</h1>
              <div className='search'>
                <ResultsMap {...this.props} />
                <div className='search__farms'>
                <h3>Farms near you</h3>
                  <h4>HenceForth Farm</h4>
                  <p>5642 11th Line RR4, Harriston, ON N0G 1Z0</p>
                  <h4>Reroot Organic Farm</h4>
                  <p>5642 11 Line, Harriston, ON N0G 1Z0</p>
                  <h4>Aldergrove Farm</h4>
                  <p>211537 Baseline Rd, Mount Forest, ON N0G 2L0</p>
                  <h4>Maple Woods Orgnaic Farm</h4>
                  <p>335 Sideroad 5 Greenock, Brockton, ON N0G 2V0</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
