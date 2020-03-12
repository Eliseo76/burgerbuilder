import axios from 'axios';


const instance = axios.create({
   baseURL: 'https://react-my-burger-32a52.firebaseio.com/'
});

export default instance;