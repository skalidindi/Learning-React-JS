import React from 'react';
import { default as ScriptjsLoader } from 'react-google-maps/lib/async/ScriptjsLoader';
import { GoogleMap } from 'react-google-maps';
import { default as FaSpinner } from 'react-icons/lib/fa/spinner';
import { GOOGLE_MAPS_API_KEY } from '../api_keys';

const GoogleMapCell = (props) => (
  <ScriptjsLoader
    hostname={'maps.googleapis.com'}
    pathname={'/maps/api/js'}
    query={ { v: '3', libraries: 'geometry,drawing,places', key: GOOGLE_MAPS_API_KEY } }
    loadingElement={
      <div>
        <FaSpinner />
      </div>
    }
    containerElement={
      <div style={ { height: '100%' } } />
    }
    googleMapElement={
      <GoogleMap defaultZoom={12} defaultCenter={ { lat: props.lat, lng: props.lon } } />
    }
  />
);

GoogleMapCell.propTypes = {
  lat: React.PropTypes.number,
  lng: React.PropTypes.number,
  lon: React.PropTypes.number,
};

export default GoogleMapCell;
