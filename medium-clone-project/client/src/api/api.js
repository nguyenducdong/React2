import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/'

export const fetchArticle_API = async() => {
    try {
        const response = await axios.get(`${url}articles`);
        const articles = response.data;
        return articles;
    } catch (error) {
        throw error;
    }
}

export const fetchUser_API = async(_id) => {
    try {
        const response = await axios.get(`${url}user/${_id}`);
        const user = response.data;
        return user
    } catch (error) {
        throw error
    }
}

export const fetchUserProfile_API = async(_id) => {
    try {
        const response = await axios.get(`${url}user/profile/${_id}`);
        const profile = response.data;
        return profile;
    } catch (error) {
        throw error;
    }
}

export const fetchArticleDetail_API = async(article_id) => {
    try {
        const response = await axios.get(`${url}article/${article_id}`);
        const article_detail = response.data;
        return article_detail;
    } catch (error) {
        throw error;
    }
}

//req.body.article_id
export const fetchClap_API = async(article_id) => {
    try {
        const response = await axios.post(`${url}article/clap`,{article_id});
        return response.data;
    } catch (error) {
        throw error;
    }
}

//id, user_id
export const fetchFollow_API = async(id, user_id) => {
    try {
        const response = await axios.post(`${url}user/follow`,{id, user_id})
        const user = response.data;
        return user_id;
    } catch (error) {
        throw error;
    }
}

export const SignInUser = async(user_data) => {
    try {
        const response = await axios.post(`${url}user`,user_data);
        const user = response.data;
        localStorage.setItem('Auth',JSON.stringify(user));
        return user;
    } catch (error) {
        throw error;
    }
}

