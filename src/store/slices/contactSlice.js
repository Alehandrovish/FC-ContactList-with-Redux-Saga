import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/contact-service";
import { initialContacts } from "../../model/initialContacts";
import { initialPersonData } from "../../model/initialPersonData";
import { CONTACTS_SLICE_NAME } from "../../constants/index";

const initialState = {
  contacts: initialContacts,
  personData: initialPersonData,
  isPending: false,
  error: null,
};

export const getContacts = createAsyncThunk(
  `${CONTACTS_SLICE_NAME}/getContact`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/");
      if (response.status >= 400) {
        throw new Error(
          `Can't get a contacts. Error status is ${response.status}`,
        );
      }
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  `${CONTACTS_SLICE_NAME}/addContact`,
  async (contact, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post("/", contact);
      if (response.status >= 400) {
        throw new Error(
          `Can't add a contacts. Error status is ${response.status}`,
        );
      }
      const data = response.data;
      dispatch(createContact(data));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  `${CONTACTS_SLICE_NAME}/deleteContact`,
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.delete(`/${id}`);
      if (response.status >= 400) {
        throw new Error(
          `Can't delete a contacts. Error status is ${response.status}`,
        );
      }
      dispatch(removeContact(id));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const editContact = createAsyncThunk(
  `${CONTACTS_SLICE_NAME}/editContact`,
  async (contact, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.put(`/${contact.id}`, contact);
      if (response.status >= 400) {
        throw new Error(
          `Can't update a contacts. Error status is ${response.status}`,
        );
      }
      const data = response.data;
      dispatch(changeContact(data));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

function setPending(state) {
  state.isPending = true;
  state.error = null;
}
function setError(state, action) {
  state.isPending = false;
  state.error = action.payload;
}

const contactSlice = createSlice({
  name: CONTACTS_SLICE_NAME,
  initialState,
  reducers: {
    createContact(state, { payload }) {
      state.contacts.push(payload);
      state.personData = { ...initialPersonData };
    },
    removeContact(state, { payload }) {
      state.contacts = [
        ...state.contacts.filter((contact) => contact.id !== payload),
      ];
      state.personData = { ...initialPersonData };
    },
    changeContact(state, { payload }) {
      state.contacts = [
        ...state.contacts.map((contact) =>
          contact.id !== payload.id ? contact : payload,
        ),
      ];
      state.personData = { ...initialPersonData };
    },
    setAddMode(state) {
      state.personData = { ...initialPersonData };
    },
    setEditMode(state, { payload }) {
      state.personData = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (state, { payload }) => {
      state.contacts = payload;
      state.isPending = false;
      state.error = null;
    });
    builder.addCase(getContacts.rejected, setError);
    builder.addCase(getContacts.pending, setPending);

    builder.addCase(addContact.rejected, setError);
    builder.addCase(addContact.pending, setPending);

    builder.addCase(deleteContact.rejected, setError);
    builder.addCase(deleteContact.pending, setPending);

    builder.addCase(editContact.rejected, setError);
    builder.addCase(editContact.pending, setPending);
  },
});

const { actions, reducer } = contactSlice;

const { createContact, removeContact, changeContact } = actions;
export const { setAddMode, setEditMode } = actions;
export default reducer;
