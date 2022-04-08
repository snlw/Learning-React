import styled from "styled-components";

export const Button = styled.button`
    background : ${props => props.clicked ? "red" : "white"};
    color : ${props => props.clicked ? "white" : "red"};
    font-size : 1em;
    margin : 1em;
    padding : 0.25em 1em;
    border : 2px solid red;
    border-radius : 3px;
`;