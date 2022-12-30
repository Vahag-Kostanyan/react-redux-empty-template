import {combineReducers} from "redux";
import exampleSlice from "./ExampleSlice";
export default combineReducers({example: exampleSlice})