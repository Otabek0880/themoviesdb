import axios from 'axios'
const baseURL = 'https://api.themoviedb.org/3/'
export const baseURLImages = 'https://image.tmdb.org/t/p/'
export const fileSizeImages = 'w500'
const AccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWNjN2Y1ZjQ1OTAzOGQ4ZjZmZDI3MTUwNDQ5ZDZhMSIsInN1YiI6IjYyODRkOWY3ZmE3OGNkMmRjNDY4YmJmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xsJs-bLpD4d8WjUGABE1h9U-fFCfqxPbvCpQVM_oBIY'

export const api = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${AccessToken}`,
        accept: 'application/json'
    }
})



