// https://reqres.in/api/users?page=2

import axios from "axios";


const instance = axios.create({
    baseURL:'https://reqres.in/api/',
    // withCredentials:true
})

export const UsersAPI = {
    getDataUsers(page:number = 1){
        return instance.get<UsersAPIType>(`users?page=${page}`)
    },
    dataUser(rageUser:number){
        return instance.get<UserDataType>(`users/${rageUser}`)
    },
    singleResource(id:number){
        return instance.get<SingleResourceType>(`unknown/${id}`)
    }
}

export type UsersAPIType = {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data:Array<UserType>
}
export type UserType ={
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export type UserDataType={
    data:UserType
    support:{
        url:string
        text:string
    }
}

export type  SingleResourceType = {
    id: number
    name: string
    year: number
    color: string
    pantone_value: string
}