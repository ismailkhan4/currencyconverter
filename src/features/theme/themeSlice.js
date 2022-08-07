import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  mode: 'green',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    green: state => {
      state.mode = 'green';
    },
    spring: state => {
      state.mode = 'spring';
    },
    salmon: state => {
      state.mode = 'salmon';
    },
    web: state => {
      state.mode = 'web';
    },
  },
});

export const {green, spring, salmon, web} = themeSlice.actions;
export default themeSlice.reducer;
