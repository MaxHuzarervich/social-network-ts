import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'aa1f6061-8f98-4319-8eee-239786445cdc'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}}


//мы говорим что возвращается не тот промис который возвращается методом get, а мы берем именно data из response
// then возвращает нам промис и в нем сидит не весь response а только data