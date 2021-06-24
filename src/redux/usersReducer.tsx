import {Dispatch} from "redux";
import {UsersAPI, UserType} from "../api/axios";


const initialStateUsers = {
    test: 'braing',
    page: 0,
    users: [] as Array<UserType>,
    total: 0,
    total_pages: 0,
    userData:{} as UserType,
    switch:false,
    userId:0
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
        case "users/DATA_USER":
            return{
                ...state,
                userData:action.data,
                userId:action.data.id
            }
        case "users/MENU_USER":
            return {
                ...state,
                switch:action.menuUser
            }
        default:
            return state

    }
}
// AC
export const getUsers = (test: string) => ({type: 'users/GET_USERS', test} as const)
export const userData = (data: UserType) => ({type: 'users/DATA_USER', data} as const)
export const menuUser = (menuUser: boolean) => ({type: 'users/MENU_USER', menuUser} as const)
export const initUsers = (users: Array<UserType>, total: number, total_pages: number) => ({
    type: 'users/INIT_USERS',
    users, total, total_pages} as const)


// TS
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
        dispatch(userData(data.data))
        dispatch(menuUser(true))
    } catch (err) {
        alert(err)
    }
}


//Type

type GetUsers = ReturnType<typeof getUsers>
type IetUsers = ReturnType<typeof initUsers>
type UserData = ReturnType<typeof userData>
type MenuUser = ReturnType<typeof menuUser>

type ActionUsersType = GetUsers | IetUsers | UserData | MenuUser

export type UserDataType ={
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}