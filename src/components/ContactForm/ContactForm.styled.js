import styled from "styled-components";
import {Form, Field} from "formik"
import { Button } from "@mui/material";
import InputMask from 'react-input-mask';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export const ContactsForm = styled(Form)`
display: flex;
gap: 4px;
flex-direction: column;`

export const FormBtn = styled(Button)`
height: 35px;
margin-left: auto !important;`

export const ContactsFormWrap = styled.div`
display: flex;
gap: 8px;
align-items: flex-end;`

export const ContactsField = styled(Field)`
border-color: #1976d2;
opacity: 50%;
width: 230px;
height: 35px;
font-size: 18px;
text-indent: 8px;
border-radius: 5px;`

export const ContactField = styled(InputMask)`
border-color: #1976d2;
opacity: 50%;
width: 230px;
height: 35px;
font-size: 18px;
text-indent: 8px;
border-radius: 5px;`

export const FieldWrap = styled.div`
display: flex;
flex-direction: column;`

export const FormLabel = styled.label`
color: rgba(0, 0, 0, 0.65);
margin-bottom: 4px;`

export const AddContact = styled(AddIcCallIcon)`
margin-left: 8px;`