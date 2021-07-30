import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { ButtonStyled } from './components/ButtonStyled'
import SelectTheme from "./components/SelectTheme";

import { theme_one,theme_two } from "./theme";

const AppWrapper = styled.div`
text-aling:center;
`;

const AppHeader = styled.div`
    background-color: ${props => props.theme.primary};
    height:150px;
    padding:20px;
    color:#fff;
`;

const AppTitle = styled.h1`
    font-size:30px;
    color:#fff;
`;




function AppStyled(){
    const [theme,setTheme]=useState(theme_one)


    const handleTheme = e => {
        let theme = e.target.value
        //theme = 'theme_one' 

        theme === 'theme_one' ? (theme = theme_one) : (theme = theme_two)
        
        //theme = {primary:#fff,...}
        setTheme(theme)
    }
    return(
        <ThemeProvider theme={theme}>

        
            <AppWrapper>
                <AppHeader>
                    <AppTitle>Hola Perros</AppTitle>
                </AppHeader>

                <ButtonStyled>
                    Este es un boton con estilo
                </ButtonStyled>

                <ButtonStyled primary>
                    Este es un boton con estilo
                </ButtonStyled>

                <ButtonStyled secondary>
                    Este es un boton con estilo
                </ButtonStyled>

                <ButtonStyled danger>
                    Este es un boton con estilo
                </ButtonStyled>

                <SelectTheme handleTheme={handleTheme}/>
            </AppWrapper>
        </ThemeProvider>
    )   
}


export default AppStyled