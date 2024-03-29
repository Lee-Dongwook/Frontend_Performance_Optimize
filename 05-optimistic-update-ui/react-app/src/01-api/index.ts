import type { Board } from '../00-domain';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchPosts = async() => {
    const response = await fetch(`${BASE_URL}/api/posts`, {
        method: 'GET'
    });

    try {        
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error(error);
        return;
    }
}

export const createPost = async(newPost: Board) => {
    const response = await fetch(`${BASE_URL}/api/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
    });

    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error(error);
        return;
    }
}

export const updatePost = async({id, updatedPost}: {id: number, updatedPost: Board}) => {
    const response = await fetch(`${BASE_URL}/api/posts/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
    });

    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error(error);
        return;
    }
}

export const deletePost = async(id: number) => {
    const response = await fetch(`${BASE_URL}/api/posts/${id}`, {
        method: 'DELETE',
    });

    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.error(error);
        return;
    }
}