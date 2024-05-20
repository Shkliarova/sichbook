import styled from "styled-components";
import { Button } from "@mui/material";

export const ContactsList = styled.ul`
display: flex;
flex-direction: column;
gap: 8px;
margin-top: 8px;

@media screen and (min-width: 740px) {
    margin-top: 12px;
  }`

export const ContactsListItem = styled.li`
font-size: large;
display: flex;
flex-direction: column;
gap: 8px;
border: 2px solid rgba(25, 118, 210, 0.5);
border-radius: 5px;
padding: 6px;

@media screen and (min-width: 740px) {
    flex-direction: row;
    align-items: baseline;
    gap: 16px;
    border: none;
    padding: 0;
  }`

export const DeleteBtn = styled(Button)`
margin-left: auto !important;

&:hover {
    background-color: #d32f2f !important;
}`