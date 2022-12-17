import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {appReducer} from "./app-reducer";
import thunk from 'redux-thunk'
import {packListReducer} from "./pack-list-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    packs: packListReducer,
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>
