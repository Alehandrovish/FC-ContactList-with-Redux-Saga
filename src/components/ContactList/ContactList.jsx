import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import {
  getContactsAction,
  setAddMode,
} from "../../store/actions/contactsActions";
import "./ContactList.css";

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsAction());
  }, [dispatch]);

  function onAddMode() {
    dispatch(setAddMode());
  }
  return (
    <section className="contacts-block">
      <section className="contacts-list">
        {contacts.map((contact) => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </section>
      <button onClick={onAddMode}>New</button>
    </section>
  );
}

export default ContactList;
