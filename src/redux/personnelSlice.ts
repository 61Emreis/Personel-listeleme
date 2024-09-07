import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Personel {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  position: string;
  email: string;
}

interface PersonelState {
  list: Personel[];
}

const initialState: PersonelState = {
  list: [],
};

const personelSlice = createSlice({
  name: 'personnel',
  initialState,
  reducers: {
    setPersonnel: (state, action: PayloadAction<Personel[]>) => {
      state.list = action.payload;
    },
    addPersonnel: (state, action: PayloadAction<Personel>) => {
      state.list.push(action.payload);
    },
  },
});

export const { setPersonnel, addPersonnel } = personelSlice.actions;
export default personelSlice.reducer;
