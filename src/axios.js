/**
 * Created an instance of axios module wit base url. Because every single requests uses same 
 * url before end points to access the "TMDB" database
*/
import axios from 'axios';
import { baseUrl } from "./constants/constants";

const instance = axios.create({
    baseURL: baseUrl,
});

export default instance;