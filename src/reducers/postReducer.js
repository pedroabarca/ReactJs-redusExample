import {FETCH_POSTS, NEW_POST, NEW_VIDEO, NEW_USER, NEW_PROFILE, FETCH_VIDEO, FETCH_USER, FETCH_PROFILE } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        case NEW_USER:
            return {
                ...state,
                item: action.payload
            };
        case FETCH_USER:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;

    }
    
}