import ACTION_TYPES from "./actionTypes";

//get contacts
export function getContactsAction() {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ACTION,
  };
}
export function getContactsRequest() {
  return {
    type: ACTION_TYPES.GET_CONTACTS_REQUEST,
  };
}
export function getContactsSuccess(contacts) {
  return {
    type: ACTION_TYPES.GET_CONTACTS_SUCCESS,
    payload: contacts,
  };
}
export function getContactsError(error) {
  return {
    type: ACTION_TYPES.GET_CONTACTS_ERROR,
    payload: error,
  };
}

//delete contact
export function deleteContactAction(id) {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ACTION,
    payload: id,
  };
}
export function deleteContactRequest() {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_REQUEST,
  };
}
export function deleteContactSuccess(payload) {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_SUCCESS,
    payload,
  };
}
export function deleteContactError(error) {
  return {
    type: ACTION_TYPES.DELETE_CONTACT_ERROR,
    payload: error,
  };
}

//add contact
export function addContactAction(contact) {
  return {
    type: ACTION_TYPES.POST_CONTACT_ACTION,
    payload: contact,
  };
}
export function addContactRequest() {
  return {
    type: ACTION_TYPES.POST_CONTACT_REQUEST,
  };
}
export function addContactSuccess(newContact) {
  return {
    type: ACTION_TYPES.POST_CONTACT_SUCCESS,
    payload: newContact,
  };
}
export function addContactError(error) {
  return {
    type: ACTION_TYPES.POST_CONTACT_ERROR,
    payload: error,
  };
}

//edit contact
export function editContactAction(contact) {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ACTION,
    payload: contact,
  };
}
export function editContactRequest() {
  return {
    type: ACTION_TYPES.PUT_CONTACT_REQUEST,
  };
}
export function editContactSuccess(newContact) {
  return {
    type: ACTION_TYPES.PUT_CONTACT_SUCCESS,
    payload: newContact,
  };
}
export function editContactError(error) {
  return {
    type: ACTION_TYPES.PUT_CONTACT_ERROR,
    payload: error,
  };
}

//rest
export function setAddMode() {
  return {
    type: ACTION_TYPES.SET_ADD_MODE,
    payload: null,
  };
}
export function setEditMode(contact) {
  return {
    type: ACTION_TYPES.SET_EDIT_MODE,
    payload: contact,
  };
}
