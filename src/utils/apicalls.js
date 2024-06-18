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

export const fetchComments = (article_id, p) => {
    const endpoint = `/api/articles/${article_id}/comments`
    const params = {p}
    
    return newsApi
    .get(endpoint, {params})
    .then((response) => {
        return response
    })
}

export const updateArticleVotes = (article_id, inc_votes) => {
    const endpoint = `/api/articles/${article_id}`
    const requestBody = {inc_votes}
    return newsApi
.patch(endpoint, requestBody)
}

export const addComment = (article_id, username, body) => {
    
    const commentBody = {
        username, body
    }
    
    const endpoint = `/api/articles/${article_id}/comments`
    
    return newsApi
    .post(endpoint, commentBody)
    .then((response) => {
        return response
    })
    .catch((err) => {
        console.log(err)
    })
}