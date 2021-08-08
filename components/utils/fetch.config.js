import { getCookie } from './functions';
const url = 'http://localhost:2900';

export default async (type, path = '') => {
    try {
        return await fetch(`${url}${path}`, type)
            .then(errorHandler)
            .then(response => { return response; })
            .catch(error => { return { error }; });
    } catch (error) {
        return { error };
    }
};

const errorHandler = (response) => {
    if (!response.ok) {
        return { error: response.statusText, errorCode: response.status };  
    }
    return response.json();
};

export const http = {
    get: () => Object.assign(options, { method: 'GET', body: undefined }),
    post: (body) => Object.assign(options, { method: 'POST', body: JSON.stringify(body) }),
    put: (body) => Object.assign(options, { method: 'PUT', body: JSON.stringify(body) }),
    delete: () => Object.assign(options, { method: 'DELETE', body: undefined })
};

const options = {
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getCookie('XSRF-TOKEN')
    })
};