import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegFormWrap = styled.div`
width: 100vw;
margin: 150px 0;

@media screen and (min-width: 740px) {
    margin: 200px 0;
  }`

export const LinkText = styled.p`
font-size: 14px;
color: rgba(0, 0, 0, 0.6);
text-align: center;
margin-top: 12px;

@media screen and (min-width: 740px) {
    font-size: 16px;
    margin-top: 16px;
  }`

export const LinkToSignIn = styled(Link)`
text-decoration: underline;
transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

&:hover {
    color: black;
}`