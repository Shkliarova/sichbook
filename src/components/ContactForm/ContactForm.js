import {Formik} from "formik"
import * as Yup from 'yup';
import { ContactsForm, ContactsField} from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux"
import { addContacts } from "../../redux/contacts/operations";
import { Button } from "@mui/material";
import { selectContacts } from "../../redux/contacts/selectors";

const contactSchema = Yup.object().shape({
    name: Yup.string().required("Обов'язково"),
    number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}-\d{3}$/g, 'Приклад: xxx-xx-xx-xxx')
    .required("Обов'язково")
})

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)

    return(
        <Formik initialValues={{
            name: '',
            number: ''
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
            const isDuplicate = contacts.some((contact) =>
            contact.name.toLowerCase() === values.name.toLowerCase() ||
            contact.number === values.number
        );

        if (isDuplicate) {
          alert('Цей контакт вже є у вашій контактній книзі!');
          actions.resetForm();
        } else{
            dispatch(addContacts(values));
            actions.resetForm();
        }
        }}>
        <ContactsForm>
            <div style={{display: "flex", gap: "8px"}}>
                <ContactsField type="text" name="name" required />
                <ContactsField type="tel" name="number" placeholder="xxx-xx-xx-xxx" required/>
                    {/* <FormError name="number" component="span"/> */}
                <Button variant="contained" type="submit" style={{marginLeft: "auto", height: "35px"}}>Додати контакт</Button>
            </div>
        </ContactsForm>
        </Formik>
    )
}