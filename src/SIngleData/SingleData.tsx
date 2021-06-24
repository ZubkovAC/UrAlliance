import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {singleResourceTC} from "../redux/searchReducer";
import {AppStateType} from "../redux/store";
import {SingleResourceType} from "../api/axios";

export const SingleData = () => {


    const dispatch = useDispatch()
    let singleresource = useSelector<AppStateType,SingleResourceType>(state=>state.search.singleresource)
    let userId = useSelector<AppStateType,number>(state=>state.users.userId)
    let type = useSelector<AppStateType,boolean>(state=>state.search.type)
    const getSingleData = () =>{
        console.log(userId)
        dispatch(singleResourceTC(userId))
    }

    return (
        <div>
            <button onClick={getSingleData}>single</button>
            {
                type?
                  <div>
                      <div>{singleresource.name}</div>
                      <div>{singleresource.color}</div>
                      <div>{singleresource.year}</div>
                      <div>{singleresource.pantone_value}</div>
                  </div>
                 :null
            }
        </div>
    );
};

