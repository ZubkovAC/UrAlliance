import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./usersReducer";
import thunk from "redux-thunk";
import {searchReducer} from "./searchReducer";

export const rootReducer = combineReducers({
    users:usersReducer,
    search:searchReducer
})



export const store = createStore(rootReducer,applyMiddleware(thunk))

export type AppStoreType = typeof  store
export type AppStateType = ReturnType<typeof rootReducer>