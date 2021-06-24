import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {UserDataType} from "../redux/usersReducer";

export const DataUser = () => {
    const data = useSelector<AppStateType, UserDataType>(state => state.users.userData)
    const switcH = useSelector<AppStateType, boolean>(state => state.users.switch)

    return (
        <div>
            {
                switcH
                    ? <div>
                        <img src={data.avatar} alt="avatar"/>
                        <p> {data.email}</p>
                        <p>{data.first_name}</p>
                        <p>{data.last_name}</p>
                    </div>
                    : null
            }
        </div>
    );
};
