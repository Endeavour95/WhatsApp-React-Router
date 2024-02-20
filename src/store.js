import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import chatsReducer from './slices/chatsSlice';
import userReducer from './slices/usersSlice';
import buttonsReducer from './slices/buttonsSlice';
import { openWhatsAppDesktop } from './functions';

export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    peoples: userReducer,
    buttons: buttonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk : {
    extraArgument: openWhatsAppDesktop
  }, logger}),
})

// store.dispatch(openWhatsAppDesktop())