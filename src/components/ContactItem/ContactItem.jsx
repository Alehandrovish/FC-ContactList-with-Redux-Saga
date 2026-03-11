import { useSelector, useDispatch } from "react-redux";
import {
  deleteContactAction,
  setEditMode,
} from "../../store/actions/contactsActions";
import "./ContactItem.css";

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const idOfPerson = useSelector((state) => state.personData.id);

  const { id, firstName, lastName } = contact;

  function onContactDelete(event) {
    event.stopPropagation();
    dispatch(deleteContactAction(id));
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
