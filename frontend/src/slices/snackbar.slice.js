import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message: '',
    severity: '',
    timestamp: -1,
};

const snackbar = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        show(state, action) {
            state.message = action.payload.message;
            state.severity = action.payload.severity;
            state.timestamp = new Date().getTime();
        },
    },
});

export const { show } = snackbar.actions;
export default snackbar.reducer;