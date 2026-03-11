import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../store/actions/actionTypes";
import {
  getContactsSaga,
  deleteContactSaga,
  addContactSaga,
  editContactSaga,
} from "./contactsSaga";

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_CONTACTS_ACTION, getContactsSaga);
  yield takeLatest(ACTION_TYPES.DELETE_CONTACT_ACTION, deleteContactSaga);
  yield takeLatest(ACTION_TYPES.POST_CONTACT_ACTION, addContactSaga);
  yield takeLatest(ACTION_TYPES.PUT_CONTACT_ACTION, editContactSaga);
}

export default rootSaga;
