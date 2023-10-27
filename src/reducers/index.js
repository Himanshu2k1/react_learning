import formReducer from "./fromReducers";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer=combineReducers({
    data:formReducer,
});

export default rootReducer;