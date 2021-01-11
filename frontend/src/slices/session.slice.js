import { createSlice } from '@reduxjs/toolkit';

import api from '../utils/axios';

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {},
}

const session = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    }
  }
});

export const { setLoading, setLoggedIn, setUser } = session.actions;
export default session.reducer;

export const getSession = (data) => async (dispatch) => {
  try {
    dispatch(setLoading({ loading: true }));
    dispatch(setLoggedIn({ isLoggedIn: false }));
    dispatch(setUser({ user: {} }));

    // api call
    const response = await api.post('/login url', data);

    // just an example
    if (response.success) {
      dispatch(setLoggedIn({ isLoggedIn: false }));
      dispatch(setUser({ user: response.data }));
    }

    dispatch(setLoading({ loading: false }));
  } catch(error) {
    dispatch(setLoading({ loading: false }));
  }
}