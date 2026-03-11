import { put } from "redux-saga/effects";
import api from "../api/contact-service";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
} from "../store/actions/contactsActions";

export function* getContactsSaga() {
  yield put(getContactsRequest());
  try {
    const contacts = yield api.get("/").then(({ data }) => data);
    yield put(getContactsSuccess(contacts));
  } catch (error) {
    yield put(getContactsError(error));
  }
}

export function* deleteContactSaga({ payload }) {
  yield put(deleteContactRequest());
  try {
    yield api.delete(`/${payload}`);
    yield put(deleteContactSuccess(payload));
  } catch (error) {
    yield put(deleteContactError(error));
  }
}

export function* addContactSaga({ payload }) {
  yield put(addContactRequest());
  try {
    const newContact = yield api.post("/", payload).then(({ data }) => data);
    yield put(addContactSuccess(newContact));
  } catch (error) {
    yield put(addContactError(error));
  }
}

export function* editContactSaga({ payload }) {
  yield put(editContactRequest());
  try {
    const newContact = yield api
      .put(`/${payload.id}`, payload)
      .then(({ data }) => data);
    yield put(editContactSuccess(newContact));
  } catch (error) {
    yield put(editContactError(error));
  }
}
