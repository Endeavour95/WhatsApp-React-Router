import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import chatsReducer from './slices/chatsSlice';
import userReducer from './slices/usersSlice';
import buttonsReducer from './slices/buttonsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    peoples: userReducer,
    buttons: buttonsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // middleware: () => new Tuple(thunk)
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // middleware:()=>[logger],
})