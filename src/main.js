import { createApp } from 'vue';
import App from './App.vue';
import axios from "axios";

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vuejs-http-5b81f/databases/(default)/documents';
// axios.defaults.headers.common['Authorization'] = "hogehoge";
// axios.defaults.headers.get['Accept'] = "application/json";
axios.interceptors.request.use(
    config => {
        // headerの付け替えとかする。
        console.log('interceptors request', config);
        return config;
    },
    error => {
        // error時のretryを書いたりする。
        // 例外をスローしてcatchにつなげる。
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    response => {
        // headerの付け替えとかする。
        console.log('interceptors response', response);
        return response;
    },
    error => {
        // error時のretryを書いたりする。
        // 例外をスローしてcatchにつなげる。
        return Promise.reject(error);
    }
);
axios.interceptors.request.eject();

createApp(App).mount('#app')
