import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors"
import { ContactForm } from "../../components/ContactForm/ContactForm"
import { ContactList } from "../../components/ContactList/ContactList"
import { Filter } from "../../components/Filter/Filter"
import { AppWrapper, MainTitle } from "./Contacts.styled"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations"

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return(
      <AppWrapper>
        <MainTitle>Телефонна книга</MainTitle>
        <ContactForm />
        <h2>Контакти</h2>
        <Filter />
        {isLoading && !error && <b>Виконується запит...</b>}
        {contacts.length > 0 && <ContactList />}
      </AppWrapper>
    )
  }