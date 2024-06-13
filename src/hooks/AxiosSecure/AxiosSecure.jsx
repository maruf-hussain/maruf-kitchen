import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const AxiosSecureData = axios.create({
    baseURL: 'http://localhost:5000'
})
const AxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth()
    // ...........request interseptor.............................>
    AxiosSecureData.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('rewq ins confo stoapp', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {

        return Promise.reject(error);
    });

    //   ............response interceptor......................>
    AxiosSecureData.interceptors.response.use(function (response) {
        return response;

    },  async (error) => {
        const status = error.response.status;
        // console.log('errore response status interceptor', status)
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    });

    return AxiosSecureData;
};

export default AxiosSecure;