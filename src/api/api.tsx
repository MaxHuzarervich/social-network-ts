import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '09fdfea4-0315-4da1-8525-2baf0617aa13'
    },
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userID: number) {
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID: number) {
        return instance.delete(`unfollow/${userID}`)
    },
    getProfile(userId: string) {//get возвращает промис, мы на этот промис подписаны then-ом и этот
        // промис после подписки возвращает нам другой промис
        return instance.get(`profile/` + userId)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    } //me возвращает результат отработки метода get, метод get возвращает промис
    // и мы на этот промис then-ом подписываемся в HeaderContainer, когда запрос закончится, выполнится логика
    // в скобках then
}


//мы говорим что возвращается не тот промис который возвращается методом get, а мы берем именно data из response
// then возвращает нам промис и в нем сидит не весь response а только data