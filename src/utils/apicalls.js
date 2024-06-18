import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://be-nc-news-unk8.onrender.com'
})

export const fetchArticles = (page) => {
    return newsApi
    .get('/api/articles', {params: {
        p: page
    }})
    .then((response) => {
        
        return response
    })
}

export const fetchIndividualArticle = (id) => {
    return newsApi
    .get(`/api/articles/${id}`)
    .then((response) => {
        return response
    })
}