import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const Drawer = styled.div `
    width: 240;
    flex-shrink: 0; 
    width: 240;
    border-right: none;
    background: ${props => props.theme.colors.sideBarBackground};
    position: fixed; 
    overflow-y: scroll;
    height: 100vh;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: #232323;
    }

    ::-webkit-scrollbar-thumb {
    background: #696969;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #888;
    }
`
export const ListSubheader = styled.div`
      text-transform: uppercase;
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 15px;
      color: ${props => props.theme.colors.text};
`

export const useStyles = makeStyles((props) => ({

    drawer: {
      width: 240,
    },
    listItemText: {
      fontSize: 14,
    },
    listItem: {
      paddingTop: 4,
      paddingBottom: 4,
    },    
})); 


  