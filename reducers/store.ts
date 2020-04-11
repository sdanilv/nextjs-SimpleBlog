import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {initialPostsState, postsReducer} from "./PostsReducer";

export const reducers = combineReducers({
    Posts: postsReducer
});

const initialState = {Posts: initialPostsState};

export type RootState = ReturnType<typeof reducers>;
export const makeStore = (state = initialState) => {
    return createStore(reducers, state, applyMiddleware(thunkMiddleware));
};
