import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;

export const StyledList = styled.ul`
    overflow-x: auto;
    width: 100%;
    display: flex;
    padding: 0;
    margin: 20px auto;
    scroll-snap-type: both mandatory;

    & > li {
        margin: 0 10px;
    }

    & > li:last-child {
        margin-right: 20px;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;