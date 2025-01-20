import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key : "29793aceff0cd560c1e757e874d09a4f",
        language : "ko-KR",
        page: 1
    }
})

export default instance;


