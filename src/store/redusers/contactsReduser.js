import { initialContacts } from "../../model/initialContacts";
import { initialPersonData } from "../../model/initialPersonData";
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  contacts: initialContacts,
  personData: initialPersonData,
  isParsing: false,
  error: null,
};

const emptyPerson = () => ({ ...initialPersonData });

export default function reduser(state = initialState, { type, payload }) {
  switch (type) {
    //success
    case ACTION_TYPES.GET_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: payload,
        isParsing: false,
      };
    case ACTION_TYPES.DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
        personData: emptyPerson,
        isParsing: true,
      };
    case ACTION_TYPES.POST_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: [...state.contacts, payload],
        personData: emptyPerson,
        isParsing: false,
      };
    case ACTION_TYPES.PUT_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id !== payload.id ? contact : payload,
        ),
        personData: emptyPerson,
        isParsing: false,
      };

    //request
    case ACTION_TYPES.GET_CONTACTS_REQUEST:
    case ACTION_TYPES.DELETE_CONTACT_REQUEST:
    case ACTION_TYPES.POST_CONTACT_REQUEST:
    case ACTION_TYPES.PUT_CONTACT_REQUEST:
      return {
        ...state,
        isParsing: true,
      };

    //error
    case ACTION_TYPES.GET_CONTACTS_ERROR:
    case ACTION_TYPES.DELETE_CONTACT_ERROR:
    case ACTION_TYPES.POST_CONTACT_ERROR:
    case ACTION_TYPES.PUT_CONTACT_ERROR:
      return {
        ...state,
        isParsing: false,
        error: payload,
      };

    //rest
    case ACTION_TYPES.SET_ADD_MODE:
      return {
        ...state,
        personData: emptyPerson(),
      };
    case ACTION_TYPES.SET_EDIT_MODE:
      return {
        ...state,
        personData: payload,
      };
    default:
      return state;
  }
}
