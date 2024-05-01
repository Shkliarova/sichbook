import styled from "styled-components";
import {Form, Field} from "formik"

export const ContactsForm = styled(Form)`
display: flex;
gap: 4px;
flex-direction: column;`

export const ContactsField = styled(Field)`
border-color: #1976d2;
opacity: 50%;
width: 230px;
height: 35px;
font-size: 18px;
text-indent: 8px;
border-radius: 5px;

&::placeholder{
    font-size: 18px;
    text-indent: 8px;
}`

// export const FormError = styled(ErrorMessage)`
// color: red;
// margin-left: 4px;`