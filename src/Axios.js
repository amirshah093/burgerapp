import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-76a4b.firebaseio.com/'
});

export default instance;