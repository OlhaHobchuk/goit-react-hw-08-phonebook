import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filters: '',
  },
  reducers: {
    filterContacts(state, { payload }) {
      state.filters = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload.id
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },

  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchContacts.fulfilled, (state, { payload }) => {
  //       state.contacts.isLoading = false;
  //       state.contacts.error = null;
  //       state.contacts.items = payload;
  //     })
  //     .addCase(addContact.fulfilled, (state, { payload }) => {
  //       state.contacts.isLoading = false;
  //       state.contacts.error = null;
  //       state.contacts.items.push(payload);
  //     })
  //     .addCase(deleteContact.fulfilled, (state, { payload }) => {
  //       state.contacts.isLoading = false;
  //       state.contacts.error = null;
  //       state.contacts.items = state.contacts.items.filter(
  //         item => item.id !== payload.id
  //       );
  //     })
  //     .addMatcher(
  //       isAnyOf([
  //         fetchContacts.pending,
  //         addContact.pending,
  //         deleteContact.pending,
  //       ]),
  //       handlePending
  //     )
  //     .addMatcher(
  //       isAnyOf([
  //         fetchContacts.rejected,
  //         addContact.rejected,
  //         deleteContact.rejected,
  //       ]),
  //       handleRejected
  //     );
  // },
});

export const contactsReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
