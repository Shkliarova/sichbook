import { selectContacts, selectError, selectIsLoading } from "../../redux/contacts/selectors"
import { ContactForm } from "../../components/ContactForm/ContactForm"
import { ContactList } from "../../components/ContactList/ContactList"
import { Filter } from "../../components/Filter/Filter"
import { AppWrapper, MainTitle, MainTitleWrap, ContactTitle, ContactLoader } from "./Contacts.styled"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations"
import ContactPhoneIcon from '@mui/icons-material/ContactPhoneOutlined';
import RingVolumeIcon from '@mui/icons-material/RingVolume';

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
        <MainTitleWrap>
        <ContactPhoneIcon sx={{fontSize: 44}} color="primary"/>
        <MainTitle>Довідник контактів</MainTitle>
        </MainTitleWrap>
        <ContactForm />
        <ContactTitle>
          <h2>Контакти</h2>
          <RingVolumeIcon color="primary"/>
        </ContactTitle>
        <Filter />
        {isLoading && !error && <ContactLoader/>}
        {contacts.length > 0 && <ContactList />}
      </AppWrapper>
    )
  }