import axios from 'axios'; 

const upload = axios.create({
    baseURL: 'https://uploadimgu.herokuapp.com/',
    // baseURL: 'https://uploadimgu.herokuapp.com/',
});


export default upload;