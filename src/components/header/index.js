import React from 'react';
import { 
    Toolbar,
    IconButton,
    Button,
 } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';


import { AppBar, Grow} from './styled';
 


function Header(props) {
  return (
    <div>
      <AppBar >
        <Toolbar>
          <IconButton
          edge='start'
          aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
            <img
            src='/images/preto.png'
            alt='logo'
          />
          <Grow />
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle style={{ paddingLeft: '2px'}}/>}
            variant='text'
            color='secondary'
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
        </div>
    )
};

export default Header;