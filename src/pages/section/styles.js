import styled from 'styled-components';
import background from '../../assets/bg-hero.jpg';

export const Container = styled.main`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1246px;
    padding: 0 50px;
    margin: 0 auto;
`;

export const ContainerLeft = styled.section`
    flex: 1;
    max-width: 500px;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 72px;
    margin-bottom: 16px;
`;

export const Description = styled.p`
    color: #fff;
    font-size: 20px;
    max-width: 400px;
    margin-bottom: 32px;
`;

export const Button = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;

export const NavButton = styled.button`
    background-color: transparent;
    border: none;
    color: #fff;
    font-weight: bold;
    display: flex;
    gap: 8px;
    margin-top: 60px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;

export const ContainerRight = styled.section`
    img {
        margin-right: -50px;
    }
`;
