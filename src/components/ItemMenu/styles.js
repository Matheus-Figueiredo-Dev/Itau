import styled from 'styled-components';

export const MenuItem = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;
