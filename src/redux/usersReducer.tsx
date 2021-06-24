import {Dispatch} from "redux";
import {UsersAPI, UserType} from "../api/axios";


const initialStateUsers = {
    test: 'braing',
    page: 0,
    users: [] as Array<UserType>,
    total: 0,
    total_pages: 0,
    userData:{} as UserType
}

type InitialStateUsers = typeof initialStateUsers

export const usersReducer = (state: InitialStateUsers = initialStateUsers, action: ActionUsersType):InitialStateUsers => {
    switch (action.type) {
        case "users/GET_USERS":
            return {...state, test: action.test}
        case "users/INIT_USERS":
            return {
                ...state,
                users: [...action.users],
                total: action.total,
                total_pages: action.total_pages
            }
        case "users/DATA_USERS":
            return{
                ...state,

            }
        default:
            return state

    }
}

export const getUsers = (test: string) => ({type: 'users/GET_USERS', test} as const)
export const userData = (data: UserType) => ({type: 'users/DATA_USERS', data} as const)
export const initUsers = (users: Array<UserType>, total: number, total_pages: number) => ({
    type: 'users/INIT_USERS',
    users, total, total_pages} as const)

export const GetUsersTC = (page: number) => async (dispatch: Dispatch) => {
    try {
        let {data} = await UsersAPI.getDataUsers(page)
        dispatch(initUsers(data.data, data.page, data.total_pages))
    } catch (err) {
        alert(err)
    }
}

export const UserDataTC = (page: number) => async (dispatch: Dispatch) => {
    try {
        let {data} = await UsersAPI.dataUser(page)
        debugger
        dispatch(userData(data.data))
    } catch (err) {
        alert(err)
    }
}



type GetUsers = ReturnType<typeof getUsers>
type IetUsers = ReturnType<typeof initUsers>
type UserData = ReturnType<typeof userData>

type ActionUsersType = GetUsers | IetUsers | UserData

export type UserDataType ={
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}