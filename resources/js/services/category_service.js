import {http, httpFile} from './http_service';

export function createCategory(data) {
    return httpFile().post('/categories', data);
}