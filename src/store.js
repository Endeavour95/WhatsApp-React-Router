import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './slices/chatsSlice';
import userReducer from './slices/usersSlice';
import buttonsReducer from './slices/buttonsSlice';

export const store = configureStore({
  reducer: {
    chats : chatsReducer,
    users : userReducer,
    buttons : buttonsReducer,
  },
})