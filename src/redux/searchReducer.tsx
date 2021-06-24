import {Dispatch} from "redux";
import {SingleResourceType, UsersAPI} from "../api/axios";

const initialStateUsers = {
    search: '',
    singleresource:{} as SingleResourceType,
    type:false
}

type InitialStateUsers = typeof initialStateUsers

export const searchReducer = (state: InitialStateUsers = initialStateUsers, action: ActionSearchType): InitialStateUsers => {
    switch (action.type) {
        case "search/USERS":
            return {
                ...state,
                search: action.search
            }
        case "search/SINGLE_RESOURCE":
            return {
                ...state,
                singleresource:action.resourse,
                type:true
            }
        default:
            return state
    }
}

//AC
export const search = (search: string) => ({type: 'search/USERS', search} as const)
export const singleResource = (resourse: SingleResourceType) => ({type: 'search/SINGLE_RESOURCE', resourse}as const)

// type
export const singleResourceTC = (id: number) => async (dispatch: Dispatch) => {
    const {data} = await UsersAPI.singleResource(id)
    dispatch(singleResource(data.data))
}

//Type
type Search = ReturnType<typeof search>
type SingleResource = ReturnType<typeof singleResource>

type ActionSearchType = Search | SingleResource


