import styled from 'styled-components';

export const Wrapper = styled.main`
    flex: 1;
    width: 100%;
    max-width: 960px;
    overflow-x: hidden;
    overflow-y: auto;

    .image {
        margin: auto;
        width: calc( 100% - 10px );
        object-fit: contain;

        img {
            width: 100%;
        }
    }

    ol li {
        padding: 4px 0;
    }

    h2 {
        margin-left: 12px;
    }
`;

export const SectionWrapper = styled.section`
    width: 100%;
    margin: 10px 0;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;

    h2, h4, h5 {
        margin: 0;
    }

    &.time {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding: 30px 0px;

        span {
            font-size: 12px;
        }
    }

    &.ingredients {
        h2 {
            margin-bottom: 16px;
        }

        div {
            display: flex;
        }

        .column {
            width: 40%;
            max-width: 200px;
        }

        .quantity {
            text-align: end;
            justify-content: flex-end;
            margin-right: 5px;
        }

        .name {
            margin-left: 5px;
        }
    }
`;