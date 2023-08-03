import { createSlice } from '@reduxjs/toolkit';

interface UserInterface {
  _id: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
  first_name: string;
  last_name: string;
  id: string;
  token: string;
  username: string;
}

const initialState: UserInterface = {
  _id: '',
  email: '',
  password: '',
  isLoggedIn: false,
  first_name: '',
  last_name: '',
  token: '',
  id: '',
  username: '',
};

const { actions, reducer } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.id = action.payload._id;
    },
    updateToken: (state, action) => {
      localStorage.setItem('ivca_access_token', action.payload);
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      localStorage.removeItem('ivca_access_token');
      state.email = '';
      state.password = '';
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout, updateToken } = actions;

export default reducer;
