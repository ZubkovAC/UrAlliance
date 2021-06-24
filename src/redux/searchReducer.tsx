
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
export const search = (search:string) =>({type:'search/USERS',search}as const)


type Search = ReturnType<typeof search>

type ActionSearchType = Search