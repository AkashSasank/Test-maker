import { combineReducers } from '@reduxjs/toolkit';

import snackbarReducer from '../slices/snackbar.slice';
import sessionReducer from '../slices/session.slice';
// import friendListReducer from '../pages/FriendList/friendList.slice';

const reducerList = {
    snackbar: snackbarReducer,
    session: sessionReducer,
    // friendList: friendListReducer,
};

export default combineReducers(reducerList);