import axios from "axios";

export const getUsers = (currentPage: number, pageSize: number) => {

return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
    {withCredentials: true})
    .then(response => response.data)
}

    //мы говорим что возвращается не тот промис который возвращается методом get, а мы берем именно data из response
    // then возвращает нам промис