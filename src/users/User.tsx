import React from 'react';
import {UserType} from "../api/axios";
import {useDispatch} from "react-redux";
import {UserDataTC} from "../redux/usersReducer";

type UserPropsType = {
    user: UserType
}

export const User = (props: UserPropsType) => {

    const dispatch = useDispatch()
    const userLoader = (id: number) => {
        dispatch(UserDataTC(id))
    }

    return (
        <div>
            <img src={props.user.avatar} alt="avatar"/>
            <div>{props.user.first_name}</div>
            <div>{props.user.last_name}</div>
            <div>{props.user.email}</div>
            <div>{props.user.id}</div>
            <button onClick={()=>userLoader(props.user.id)}>data</button>
        </div>
    );
};

