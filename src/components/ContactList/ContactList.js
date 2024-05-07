import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { ContactsList, ContactsListItem, DeleteBtn } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    return(
        <ContactsList>
            {contacts.map(item => 
            <ContactsListItem key={item.id}>
                <p>{item.name}: </p><i>{item.number}</i>
                <DeleteBtn variant="contained" size="small" onClick={()=>dispatch(deleteContact(item.id))}>
                    видалити
                </DeleteBtn>
            </ContactsListItem>)}
        </ContactsList>
    )
}