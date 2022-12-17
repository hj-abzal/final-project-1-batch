import axios from 'axios';

export const token = localStorage.getItem('token')

const instance = axios.create({
    baseURL: 'https://cards-nya-back-production.up.railway.app/2.0',
    headers: {
        withCredentials: true,
        Authorization: `Bearer ${token}`
    }
});

export const authApi = {
    me: () => {
        return instance.get('auth/me')
    },
    login: (email: string, password: string) => {
        return instance.post('auth/login', {email, password})
    },
    create: (email: string, password: string) => {
        return instance.post('auth/register', {email, password})
    },
    update: (email: string) => {
        return instance.put(`auth/me`, {email})
    }
}
export const packsApi = {
    get: () => {
        return instance.get('cards/pack?token=e04fb420-7ae6-11ed-b20e-1deb1e1768f4')
    },

}