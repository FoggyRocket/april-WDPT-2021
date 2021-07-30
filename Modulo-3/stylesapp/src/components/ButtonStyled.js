import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
    font-size:1rem;
    border-radius:5px;
    margin:0 1rem;
    backgound:trasnparent;
    color: ${props => props.theme.primary};
    border:2px solid ${props => props.theme.primary};
    padding:0.25rem 1rem;

    ${props=>
        props.primary && css`
        background:${props => props.theme.primary};  
        color:#fff;
        border-color:${props => props.theme.primary};
        `}

    ${props=>
        props.secondary && css`
        background:${props => props.theme.secondary};  
        color:#fff;
        border-color:${props => props.theme.secondary};
        `}

    ${props=>
        props.danger && css`
        background:${props => props.theme.danger};  
        color:#fff;
        border-color:${props => props.theme.danger};
        `}
`;