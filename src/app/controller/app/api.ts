import { environment } from 'src/environments/environment';


const api = {
    endpoints: {
        login: {
            requestType: 'post',
            url: '/user/login',
            responseInterface: []
        },
        signUp: {
            requestType: 'post',
            url: '/user/sign-up',
            responseInterface: []
        }
    },
    defaultDomain: environment.API_URL
};

export default api;