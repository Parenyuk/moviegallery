import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/'
})

export const movieGalleryApi = {
    setMovies() {
        return instance.get(`moviedb-tech/movies/list`)
    },

}
