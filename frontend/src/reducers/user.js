import { createSlice } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

const getUserCookie = Cookie.get('user');

const initialState = getUserCookie ? JSON.parse(getUserCookie) : null;

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            console.log('action', action);
            console.log('state', state);
            return (state = action?.payload);
            // return (state.userData = action?.payload);
        },
        logout: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
