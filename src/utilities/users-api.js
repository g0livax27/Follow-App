import sendRequest from './send-request';

const BASE_URL = '/api/users';

export async function signUp(userData){
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    if(res.ok) {
        return res.json()
    } else {
        throw new Error('Invalid Sign Up')
    }
};

export async function login(credentials){
    return sendRequest(`${BASE_URL}/login`,'POST', credentials)  
};