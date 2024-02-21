import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import chatsReducer from './slices/chatsSlice';
import userReducer from './slices/usersSlice';
import buttonsReducer from './slices/buttonsSlice';
import { openWhatsAppDesktop } from './functions';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    peoples: userReducer,
    buttons: buttonsReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openWhatsAppDesktop),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

// store.dispatch(openWhatsAppDesktop())