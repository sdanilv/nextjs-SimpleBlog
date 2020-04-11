import React from "react";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import { Action } from 'redux';

interface FooAction extends Action<'POST_GET'| 'POST_ADD'> {
    payload: string;
}

const initialState = {foo: ''};
export const reducer = (state = initialState, action: FooAction) => {
    switch (action.type) {
        case 'POST_GET':
            return {...state, foo: action.payload};
        case 'POST_ADD':
            return {...state, foo: action.payload};
        default:
            return state
    }
};
export type RootState = ReturnType<typeof reducer>;
export const makeStore = (state = initialState) => {
    return createStore(reducer, state, applyMiddleware(thunkMiddleware));
};
