import styled from 'styled-components';

export const AppBar =styled.div`
    background-color: ${props => props.theme.colors.headerBackground};
    box-shadow: 'none';
    position: fixed;
    width: 100vw;
    z-index: +1; 
    img {
      width: 100px;
      height: 30px;
    }
`;
export const Grow = styled.div`
    flex-grow: 1;
`
export const ModeButton =styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  outline: 0;
`