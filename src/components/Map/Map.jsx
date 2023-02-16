import React from 'react';
import GoogleMapReact from 'google-map-react';
// paper is basically a div with a bg color
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons';
import { Rating } from '@material-ui/lab'; // still  being worked on, so importing lab instead of core
import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates}) => { 
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)'); // set to false if screen is less than 600px

  // this is the default coordinates - used for testing, but now we have coordinates as a prop
  // @ can use the belwo coordinates or the coordinates from the parent component - but if we use the coordinates from the parent component, we need to remove the default coordinates and delete the incoming coords prop
  // const coordinates = { lat: 12.248278039408776, lng: 109.1981618106365 }; 


  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB16p5MQIwgEVZwAQwkJHzM_DRerIIJ85k' }}
        // defaultCenter={coordinates} // @ this is the default coordinates to start with - deleted because we are using the coordinates from the parent component 
        center={coordinates}
        defaultZoom={14}
        options={''}
        onChange={(e) => {
          console.log(e)
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={''}

      >
        {/*  this is where the markers will go */}
      </GoogleMapReact>
    </div>
  )
}

export default Map;