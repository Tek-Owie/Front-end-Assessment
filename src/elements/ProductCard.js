import styled from '@emotion/styled';

export const Product = styled.div`
    display: grid;
    gap: 5rem 2.5rem;
    grid-template-columns: repeat(3, auto);
`
export const H2 = styled.h2`
    font-weight: 400;
    font-size: 2.625rem;
    line-height: 1.813rem;
    color: #1D1F22;
    margin: 3.476rem 0 5.476rem;
`

export const ProductCard = styled('div')`
    width: 24.125rem;
    height: 27.75rem;
    padding: 2rem;

    img {
        width: 22.25rem;
        height: 21.125rem;
        margin-bottom: 1rem;
    }

    h5, h6 {
        font-weight: 500;
        font-size: 1.123rem;
        line-height: 1.813rem;
        text-align: left;
        color: #1D1F22;
        margin: 0;
    }

    h5 {
        font-weight: 300;
    }
`