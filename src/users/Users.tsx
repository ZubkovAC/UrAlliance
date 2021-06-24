import React from 'react';
import {User} from "./User";
import {DataUser} from "../dataUser/DataUser";
import {Paginator} from "./Paginator";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {UserType} from "../api/axios";
import {GetUsersTC} from "../redux/usersReducer";

export const Users = () => {

    const users = useSelector<AppStateType,Array<UserType>>(state => state.users.users)

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={()=>dispatch(GetUsersTC(1))}>get</button>
            {users.map(u=>{
               return <User key={u.id} user={u}/>
            })}
            <Paginator />
            <DataUser  />
        </div>
    );
};

