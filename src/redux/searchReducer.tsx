import {Dispatch} from "redux";
import {SingleResourceType, UsersAPI} from "../api/axios";

const initialStateUsers ={
    search:''
}

type InitialStateUsers = typeof initialStateUsers

export const searchReducer = (state:InitialStateUsers = initialStateUsers,action: ActionSearchType) =>{
    switch (action.type) {
        case "search/USERS":
            return {
                ...state,
                search: action.search
            }
        default:
            return state

    }
}
//AC
export const search = (search:string) =>({type:'search/USERS',search}as const)
export const singleResource = (resourse:SingleResourceType) =>({ type:'search/SINGLE_RESOURCE',resourse })
// type

export const singleResourceTC = (id:number) =>async(dispatch:Dispatch)=>{
    const {data} = await UsersAPI.singleResource(id)
    dispatch(singleResource(data))
}


//Type
type Search = ReturnType<typeof search>

type ActionSearchType = Search


