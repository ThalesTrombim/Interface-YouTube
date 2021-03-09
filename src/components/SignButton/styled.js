import styled from 'styled-components';

export const Button = styled.button `
    font-size: 14px;
    font-weight: bold;
    padding: 5px 10px;
    width: 150px;
    height: 60px;
    border: 2px solid blue;
    border-radius: 3px;
    display: flex;
    color: ${props => props.theme.colors.text};
    background: transparent;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`
