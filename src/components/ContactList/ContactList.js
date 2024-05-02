import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { ContactsList, ContactsListItem } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Button } from "@mui/material";

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectFilteredContacts);

    return(
        <ContactsList>
            {contacts.map(item => 
            <ContactsListItem key={item.id}>
                {item.name}: <i>{item.number}</i>
                <Button variant="contained" size="small" onClick={()=>dispatch(deleteContact(item.id))}
                style={{marginLeft: "16px"}}>видалити</Button>
            </ContactsListItem>)}
        </ContactsList>
    )
}