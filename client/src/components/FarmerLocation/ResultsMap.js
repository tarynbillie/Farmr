import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import './resultsMap.scss';

const styles = {
 position: 'relative',
 width: '600px',
 height: '500px',
};

export class MapContainer extends Component {

   render() {     
       return (
         <div className='map'>
          <Map 
          className='map'
          google={this.props.google}
          zoom={15}
          style={styles}
          initialCenter={{
            lat: 43.6532,
            lng: -79.3832
          }}
          >
          <Marker
            onClick={this.onMarkerClick}
            name={this.props.address}
            />
          </Map>
         </div>
       );
     }
   }
   export default GoogleApiWrapper({
       apiKey: process.env.REACT_APP_API
     }) (MapContainer);