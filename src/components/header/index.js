import React, { useContext } from 'react';

import { 
    Toolbar,
    IconButton,
 } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';


import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import { AppBar, Grow, ModeButton } from './styled';
import { ThemeContext } from 'styled-components';
import SignButton from '../SignButton';
 

function Header(props) {
  const {  title } = useContext(ThemeContext);
  
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
            src={title === 'dark' ? '/images/branca.png' : '/images/preto.png'}
            alt='logo'
          />
          <Grow />
          <ModeButton onClick={props.toggleTheme}
          >
            {title === 'dark' ? <Brightness6Icon/> : <Brightness3Icon />}
          </ModeButton>
          <IconButton>
            <VideoCall />
          </IconButton>
          <IconButton>
            <Apps />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <SignButton />
        </Toolbar>
      </AppBar>
        </div>
    )
};

export default Header;