import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReduser } from "./todoReduser";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReduser
})

export type RootState = ReturnType<typeof rootReducer>