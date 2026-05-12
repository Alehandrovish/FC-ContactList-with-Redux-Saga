import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import ContactItem from "../ContactItem/ContactItem";
import { getContacts, setAddMode } from "../../store/slices/contactSlice";
import { initialPersonData } from "../../model/initialPersonData";
import "./ContactList.css";

function ContactList({ formikRef }) {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  function onAddMode() {
    dispatch(setAddMode());
    formikRef.current.resetForm({
      values: initialPersonData,
    });
  }
  return (
    <section className="contacts-block">
      <section className="contacts-list">
        {contacts.map((contact) => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </section>
      <Button
        variant="outlined"
        style={{ alignSelf: "center" }}
        onClick={onAddMode}
      >
        New
      </Button>
    </section>
  );
}

export default ContactList;
