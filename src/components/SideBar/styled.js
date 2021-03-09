import styled from 'styled-components';

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
export const listItemText = styled.div`
    font-size: 14;
` 
export const listItem = styled.div`
    padding-top: 4;
    padding-bottom: 4;
`
export const ListSubheader= styled.div`
    text-transform: 'uppercase';
` 


  