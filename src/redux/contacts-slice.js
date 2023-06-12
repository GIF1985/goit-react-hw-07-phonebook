import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        const sortArr = [...state, payload].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return sortArr;
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
            createdAt: new Date().toISOString(), 
          },
        };
      },
    },
    removeContact: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
