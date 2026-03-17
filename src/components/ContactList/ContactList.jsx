import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import { getContacts, setAddMode } from "../../store/slices/contactSlice";
import "./ContactList.css";

function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
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
