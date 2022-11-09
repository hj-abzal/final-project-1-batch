import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cards-nya-back-production.up.railway.app/2.0',
    headers: {
        withCredentials: true,
    }
});

export const authApi = {
    me: () => {
        return instance.get('auth/me')
    },
    login: (email: string, password: string) => {
        return instance.post('auth/login', { email, password})
    },
    create: (email:string,password:string) => {
        return instance.post('auth/register', { email,password})
    },
    update: (email:string) => {
        return instance.put(`auth/me`, {email})
    }
}