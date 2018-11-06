import axios from 'axios'

export const http = axios.create({
    baseURL:'https://developers.themoviedb.org/trending/movies/week'
})
