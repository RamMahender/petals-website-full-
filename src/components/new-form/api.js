import fetch from 'isomorphic-fetch';

// * snip *

export function createBlogPost(data) {
    return fetch('http://13.233.64.181:5000/api/createchild', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);
}


