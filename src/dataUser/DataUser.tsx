import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {UserDataType} from "../redux/usersReducer";

export const DataUser = () => {
    const data = useSelector<AppStateType, UserDataType>(state => state.users.userData)

    return (
        <div>
            <p>{data.avatar}</p>
            <p> {data.email}</p>
            <p>{data.first_name}</p>
            <p>{data.last_name}</p>
        </div>
    );
};
