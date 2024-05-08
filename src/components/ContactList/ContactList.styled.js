import styled from "styled-components";
import { Button } from "@mui/material";

export const ContactsList = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 12px;`

export const ContactsListItem = styled.li`
font-size: large;
display: flex;
align-items: baseline;
gap: 16px;`

export const DeleteBtn = styled(Button)`
margin-left: auto !important;

&:hover {
    background-color: #d32f2f !important;
}`