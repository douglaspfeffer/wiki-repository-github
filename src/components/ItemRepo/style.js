import styled from 'styled-components'

export const ItemContainer = styled.div`

    width: 80%;

    h3 {
        font-size: 3.2rem;
        color: #fafafa;
    }

    p {
        font-size: 1.6rem;
        color: #fafafa60;
        margin: 0 0 2rem 0;
    }

    a.ir {
        color: #ffff00;
        border: .1rem solid #ffff00;
        text-decoration: none;
        padding: .5rem;
        border-radius: .5rem;
    }
    
    button.remover {
        color: #ff0000;
        border: .1rem solid #ff0000;
        padding: .5rem;
        border-radius: .5rem;
        cursor: pointer;
        background: transparent;
    }

    hr {
        color: #fafafa60;
        margin: 2rem 0;
    }
`