import {FETCH_VIDEO, NEW_VIDEO} from './types';

export const fetchPosts = () => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts =>
            dispatch ({
                type: FETCH_VIDEO,
                payload: posts
            }));

};

export const createPost = (postData) => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post =>
            dispatch ({
                type: NEW_POST,
                payload: post
            }));

};