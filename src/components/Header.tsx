import React from 'react';
import styled from 'styled-components';
import trollFace from '../assets/troll-face.png'

const Header = () => {
    return (
        <StyledHeader className="header">
            <img 
                src={trollFace} 
                className="header__image"
            />
            <h2 className="header__title">Meme Generator</h2>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    height: 65px;
    background: linear-gradient(90deg, #672280 1.18%, #A626D3 100%);
    color: white;
    padding: 20px;

    .header__image {
        height: 100%;
        margin-right: 6px;
    }

    .header__title {
        font-size: 1.25rem;
        margin-right: auto;
    }
`

export default Header;