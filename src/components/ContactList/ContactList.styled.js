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
justify-content: space-between;`

export const DeleteBtn = styled(Button)`
`