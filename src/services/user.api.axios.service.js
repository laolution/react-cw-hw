import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers:{'Content-Type':'application/json',}
});

const getUsersAxios = () => {
    return axiosInstance.get()
}

const getUserAxios = (id) => {
  return axiosInstance.get('/'+id)
}

const getUserPost = (id) => {
    return axiosInstance.get('/'+id+'/posts')

}
export {getUserAxios,getUsersAxios}