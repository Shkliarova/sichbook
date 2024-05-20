import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegFormWrap = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);`

export const LinkText = styled.p`
font-size: 16px;
color: rgba(0, 0, 0, 0.6);
text-align: center;
margin-top: 16px;`

export const LinkToSignIn = styled(Link)`
text-decoration: underline;
transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

&:hover {
    color: black;
}`