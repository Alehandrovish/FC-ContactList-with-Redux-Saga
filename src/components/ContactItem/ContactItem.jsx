import { useSelector, useDispatch } from "react-redux";
import { deleteContact, setEditMode } from "../../store/slices/contactSlice";
import "./ContactItem.css";

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const idOfPerson = useSelector((state) => state.personData.id);

  const { id, firstName, lastName } = contact;

  function onContactDelete(event) {
    event.stopPropagation();
    dispatch(deleteContact(id));
  }

  function onEdit() {
    dispatch(setEditMode(contact));
  }

  return (
    <div
      className={`content-item ${id === idOfPerson ? " focus" : ""}`}
      onDoubleClick={onEdit}
    >
      <p>
        {firstName} {lastName}
      </p>
      <span className="btn-delete" onClick={onContactDelete}>
        X
      </span>
    </div>
  );
}

export default ContactItem;
