import styled, { css } from 'styled-components';

const activeCss = css`
    outline-style: solid;
    outline-color: dodgerblue;
`;

export const Wrapper = styled.li`
    min-width: 200px;
    width: 200px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    background-color: #fff;
    transition: all ease-in-out 100ms;
    scroll-snap-align: center;

    &:hover {
        transform: scale( 1.05 ) translateY( -5px );

        span {
            text-decoration: underline;
        }
    }

    a {
        text-decoration: none;
    }

    ${({ active }) => active && activeCss }
`;

export const TitleWrapper = styled.div`
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ ({ background }) => background });
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex: 1;
    color: #fff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
    height: 92px;

    span {
        margin: 20px 10px;
        font-size: 22px;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 64px;
    font-size: 14px;

    & > div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
    }

    div:first-child {
        border-right: 1px solid #999;
    }

    .fa {
        margin-right: 10px;
    }
`;