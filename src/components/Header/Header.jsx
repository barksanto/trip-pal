import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Typography, Toolbar, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';


const Header = () => { 

  const classes = useStyles()
  
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {/* typography is every text element - can be changed to headings, subtitles and titles */}
        <Typography variant="h5" className={classes.title}>
          Adventure Advisor
        </Typography>
        {/* Box effectively works as a div - properties can be flex etc.. */}
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography >
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...' classes={{root: classes.InputRoot, input: classes.inputInput}} />
            </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;