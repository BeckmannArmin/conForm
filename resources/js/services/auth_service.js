import jwt from 'jsonwebtoken';
import {http, httpFile} from './http_service';

export function register(user) {
    http().post('/register', user);
}

export function logout() {
    http().post('/logout');
    localStorage.removeItem("jwt");
}

export function setToken(user) {
    const token = jwt.sign({ user: user }, 'user')
    localStorage.setItem("jwt",token);
}

export function isLoggedIn() {
    const token = localStorage.getItem("jwt");
    return token != null;
}

export function getAccessToken() {
    const token = localStorage.getItem("jwt");
    if(!token) {
        return null;
    }

    return token;
}