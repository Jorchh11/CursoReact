import React from 'react';
import styled,{css,keyframes,ThemeProvider,createGlobalStyle} from 'styled-components';

export default function ComponentesEstilizados(){
    let mainColor="#db7093";
    let mainColor80="#db709380";

    const setTransitionTime = (time) => `all ${time} ease-in-out;`;
    
    const fadeIn = keyframes`
    0%{
        opacity:0;
    }

    100%{
        opacity:1;
    }
    `;

    const Box=styled.div`
    margin:1rem;
    padding: 1rem;
    color: ${({theme})=>theme.color};
    background-color: ${({theme})=>theme.bgColor};
    `;

    const ligth={
        color:"#222",
        bgColor: "#DDD"
    }

    const dark={
        color:"#DD",
        bgColor: "#222"
    }

    const BoxRounded = styled(Box)`
        border-radius: 5rem;
    `;


    const MyH3=styled.h3`
        padding:2rem;
        text-align:center;
        background-color: ${mainColor};
        transition: ${setTransitionTime("2s")};
        color:${(props) => props.color || "#000"};
        animation: ${fadeIn} 5s ease-out;
        /*${({isButton})=>isButton && css`
        margin:auto;
        max-width:50%;
        border-radius:0.25rem;
        cursor:pointer;
        `}*/

        &:hover{
            background-color: ${mainColor80};
        }
    `;

    const GlobalStyle = createGlobalStyle `
    h2{
        padding:2rem;
        background-color: #fff;
        color: #61dafb;

    }
    `;

    return(
        <>
        <GlobalStyle/>
         <h2>Styled-Componets</h2>   
         <MyH3>Hola Soy un H3 estilizado con styled components</MyH3>
         <MyH3 color="#61dafb">Hola Soy un H3 estilizado con styled components</MyH3>
         <MyH3 isButton={true}>Soy H3 estilizado como boton</MyH3>

         <ThemeProvider theme={ligth}>
            <Box>Soy una caja light</Box>
            <BoxRounded>Soy una caja redondeada light</BoxRounded>
         </ThemeProvider>

         <ThemeProvider theme={dark}>
            <Box>Soy una caja dark</Box>
            <BoxRounded>Soy una caja redondeada dark</BoxRounded>
         </ThemeProvider>
        </>
    );
}