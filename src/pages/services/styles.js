import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 128px;
    position: relative;
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

export const ContainerLeft = styled.div`
    flex: 1;
    max-width: 600px;
    margin-bottom: 100px;
`;

export const Title = styled.h2`
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: #ec7000;
    margin-bottom: 35px;
`;

export const SubTitle = styled.h3`
    color: #33303e;
    font-size: 56px;
    font-weight: bold;
    line-height: 61px;
    margin-bottom: 24px;
`;

export const Description = styled.p`
    font-size: 18px;
    max-width: 554px;
    margin-bottom: 68px;
    color: #4e4b59;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 36px;
`;

export const Menu = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 30px 0;
    border-bottom: 1px solid #7a7786;
`;

export const ContainerRight = styled.div`
    position: relative;
    top: 0;
    right: 0;
    width: 32%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    transform: translateX(-50%);
`;
