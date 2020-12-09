import {http, httpFile} from './http_service';

export function createConceptPaper(data) {
    return httpFile().post('/conceptPaper', data);
}

export function loadConceptPaper() {
    return http().get('/conceptPaper');
}

export function deleteConceptPaper(id) {
    return http().delete(`conceptPaper/${id}`);
}

export function updateConceptPaper(id, data) {
    return httpFile().post(`conceptPaper/${id}`, data);
}

export function loadMore(nextPage) {
    return http().get(`conceptPaper?page=${nextPage}`);
}