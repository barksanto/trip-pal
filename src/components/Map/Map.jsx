import React from 'react';
import GoogleMapReact from 'google-map-react';
// paper is basically a div with a bg color
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons';
import { Rating } from '@material-ui/lab'; // still  being worked on, so importing lab instead of core
import useStyles from './styles';

const Map = () => { 
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)'); // set to false if screen is less than 600px
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB16p5MQIwgEVZwAQwkJHzM_DRerIIJ85k' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        options={''}
        onChange={''}
        onChildClick={''}

      >
        {/*  this is where we will put our markers */}
      </GoogleMapReact>
    </div>
  )
}

export default Map;