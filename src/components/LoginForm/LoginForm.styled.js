import styled from "styled-components";
import { TextField } from "@mui/material";

export const LoginFormSt = styled.form`
display: flex;
gap: 8px;
flex-direction: column;
border: 1px solid #1976d2;
box-shadow: 12px 12px 20px -3px rgba(25,118,210,0.64);
padding: 15px;
width: calc(100% - 30px);
margin: 0 auto;
background-color: white;

@media screen and (min-width: 530px) {
    width: 500px;
    }`

export const LoginField = styled(TextField)`
width: 100% !important;`