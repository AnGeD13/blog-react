const BASE_URL = 'https://jsonplaceholder.typicode.com'

export function getPosts() {
    return fetch(`${BASE_URL}/posts`)
        .then((response) => response.json())
}

export function addPost(post) {
    return fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export function deletePost(id) {
    fetch(`${BASE_URL}/posts/${id}`, {
        method: 'DELETE',
      });
}