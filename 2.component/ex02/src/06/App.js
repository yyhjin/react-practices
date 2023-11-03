import React from 'react';
import './assets/scss/App.scss';

// import Header from './Header';
import styled from 'styled-components';

const StyledH1 =  styled.h1`
    width: 180px;
    text-align: center;
    font-size: 12px;
    margin: 100px auto;
    padding: 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color: #cdc1ce
`;

const StyledDiv = styled.div`
    text-align: center;
`;

function App() {
    return (
        <StyledDiv id={'App'}>
           <StyledH1>CSS in JS: Styled Component</StyledH1>
        </StyledDiv>
    );
}

export {App};