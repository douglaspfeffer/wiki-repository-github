import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    *, body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        font-size: 62.5%
    }

    body{
        font-size: 1.6rem;
        background-color: #22272e;
        color: #fff;
    }
`