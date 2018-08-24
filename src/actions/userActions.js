import {FETCH_USER, NEW_USER} from './types';

export const fetchUser = () => dispatch => {

    fetch('https://tubekids-api.herokuapp.com/users')
        .then(res => res.json())
        .then(posts =>
            dispatch ({
                type: FETCH_USER,
                payload: posts
            }));

};

export const createUser = (postData) => dispatch => {

    fetch('https://tubekids-api.herokuapp.com/users', {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'access_token': '4OInGE3NAbZYvCSiiM2VJIK8dafhGYo2'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post =>
            dispatch ({
                type: NEW_USER,
                payload: post
            }));

};