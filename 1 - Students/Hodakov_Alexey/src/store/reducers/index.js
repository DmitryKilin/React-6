import { connectRouter } from "connected-react-router";

import { combineReducers } from "redux";
import chatsReducer from "./chats.reducer.js";
import messagesReducer from "./messages.reducer.js";
import contactsReducer from "./contacts.reducer.js";

export default (history) =>
  combineReducers({
    chatsReducer,
    messagesReducer,
    contactsReducer,
    router: connectRouter(history),
  });
