import styled from 'styled-components';

export const Wrapper = styled.li`
    min-width: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    background-color: #f2f2f2;
    transition: all ease-in-out 100ms;
    scroll-snap-align: center;
    padding: 10px;

    h6 {
        font-size: 14px;
        margin: 0;
    }
`;