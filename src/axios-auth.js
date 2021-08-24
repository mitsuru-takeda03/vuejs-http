import axios from 'axios';

export default axios.create({
    baseURL: 'https://firestore.googleapis.com/v1/projects/vuejs-http-5b81f/databases/(default)/documents'
})