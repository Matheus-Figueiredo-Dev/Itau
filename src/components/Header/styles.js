import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80px;
    background-color: #ec7000;
`;

export const Content = styled.div`
    width: 100%;
`;

export const ContainerItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1246px;
    padding: 0 15px;
    margin: 0 auto;
`;

export const Image = styled.img`
    display: flex;
    align-items: center;
    margin: 0 20px;
    cursor: pointer;
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin: 0 20px 0 0;
`;

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    height: 70%;
    padding: 0 20px;
    border-radius: 3px;
    background-color: #106eb0;
    cursor: pointer;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    height: 100%;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;
