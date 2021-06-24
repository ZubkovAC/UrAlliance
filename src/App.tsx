import React, {useEffect} from 'react';
import './App.css';
import {Users} from "./users/Users";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";
import {useDispatch} from "react-redux";
import {GetUsersTC} from "./redux/usersReducer";
import {SingleData} from "./SIngleData/SingleData";

// react, redux, api, visualbuilder, ant design, bootstrap

function App() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetUsersTC(1))
    },[])

  return (
    <div className="App">
        <Header/>
        <Users/>
        <SingleData />
        <Footer/>
    </div>
  );
}

export default App;
