import { combineReducers } from "redux";

import { allRoomsReducer } from "./roomReducer";

const mainReducer = combineReducers({
  allRooms: allRoomsReducer
});

export default mainReducer;
