import React, { useContext } from 'react';
import Switch from 'react-switch';

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

import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness3Icon from '@material-ui/icons/Brightness3';

import { AppBar, Grow, ModeButton } from './styled';
import { ThemeContext } from 'styled-components';
 

function Header(props) {
  const { colors, title } = useContext(ThemeContext);
  
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
          {/* <Switch 
                    onChange={props.toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor=''
                    onColor='white'
                />  */}
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