import { Formik } from "formik";
import * as Yup from 'yup';
import { ContactsForm, ContactsField, ContactsFormWrap, FormBtn, FieldWrap, FormLabel, ContactField } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
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
        {({ values, handleChange, handleBlur }) => (
            <ContactsForm>
                <ContactsFormWrap>
                    <FieldWrap>
                        <FormLabel htmlFor="name">Ім'я студента:</FormLabel>
                        <ContactsField type="text" name="name" required />
                    </FieldWrap>
                    <FieldWrap>
                        <FormLabel htmlFor="number">Телефон:</FormLabel>
                        <ContactField 
                            mask="999-99-99-999" 
                            maskChar="_"
                            value={values.number}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="number"
                            required
                        />
                    </FieldWrap>
                    <FormBtn variant="contained" type="submit" style={{marginLeft: "auto"}}>Додати контакт</FormBtn>
                </ContactsFormWrap>
            </ContactsForm>
        )}
        </Formik>
    )
}
