import styled from "@emotion/styled";

export const Nav = styled('nav')`
    & > ul {
        display: flex;
        list-style: none;
        align-items: flex-start;
        text-transform: uppercase;
    }
    & > img {
        position: absolute;
        width: 41px;
        height: 41px;
        left: 699px;
        top: calc(50% - 41px/2 + 4.5px)
    }
    & > li {
        flex-direction: row;
        padding: 22rem;
    }
    & > a {
        text-decoration: none;
    }
`;