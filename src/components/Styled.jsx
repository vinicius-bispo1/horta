import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`
const Center = css`
display: flex;
justify-content: center;
align-items: center;
`;

export const Main = styled.main`
background-color: #F66000;
height: 100vh;
`;
export const BoxOne = styled.div`
/* border: solid red 3px; */
height: 45vh;
width: 40vw;
${Center}
flex-direction: column;
justify-content: space-around;
align-items: end;
gap: 50px;
h2{
 color: white; 
 font-weight: 200; 
 /* border: solid red 3px;  */
 width: 79%;
 font-size: 3rem;
}
`;

export const Title = styled.h1`
color: white;
font-size: 5rem;
font-weight: 200;
/* border: solid red 3px; */
width: 32vw;
${Center}
flex-direction: column;
span{
    font-size: 3rem;
}
`;

export const BoxTwo = styled.section`

height: 50vh;
`
export const BoxItem = styled.div`
/* border: solid red 3px; */
width: 52vw;
height: 45vh;
${Center}
flex-wrap: wrap;
justify-content: end;
gap: 20px;


img{
    width: 10vw;
    border-radius: 10px;
}
`