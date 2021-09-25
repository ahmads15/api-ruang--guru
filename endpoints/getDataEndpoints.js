import supertest from 'supertest';

const env = require('dotenv').config();

const api = supertest(process.env.API_GET_DATA);

export const apiGetDataMinPrice300 =  () => api.get('/discovery/search?minPrice=300000')
    .set('Accept','application/json');

export const apiGetDataMinPrice300500 =  () => api.get('/discovery/search?minPrice=300000&maxPrice=500000')
    .set('Accept','application/json');


export const apiGetDataPagenPageSize =  () => api.get('/discovery/search?pageSize=10&page=5&searchQuery=video')
    .set('Accept','application/json');

    export const apiGetDataSortPriceDesc=  () => api.get('/discovery/search?page=1&pageSize=20&searchQuery=video&sortBy=price&orderBy=desc&minPrice=0&maxPrice=999999999&minDuration=0&maxDuration=999999999')
    .set('Accept','application/json');
