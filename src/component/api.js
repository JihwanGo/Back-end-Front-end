import axios from 'axios';

export function getUser(id,password,name,email,address){
    return axios.get('http://localhost:3000/api/user' + id + password + name + email + address);
}