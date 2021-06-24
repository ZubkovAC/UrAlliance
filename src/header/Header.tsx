import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {search} from "../redux/searchReducer";

export const Header = () => {

    const dispatch = useDispatch()
    const text = useSelector<AppStateType,string>(state=>state.search.search)
    const valueText = (e:string) =>{
        dispatch(search(e))
    }
    return (
        <div>
            <input type="text" onChange={(e)=>valueText(e.currentTarget.value)}/>
            {text}
        </div>
    );
};

