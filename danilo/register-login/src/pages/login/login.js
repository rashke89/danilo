import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth-service";
import {useHistory} from "react-router";
import {setUser} from "./store/action";
import {useDispatch} from "react-redux";

export const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const onLogin = () => {
        AuthService.login(state)
            .then(res => {
                AuthService.storeUserData(res.data);
                dispatch(setUser(res.data));
                history.push('/home')
            })
            .catch(error => console.log(error))
    }

    return (
        <>

            <h1>Login</h1>
            <input type="text" placeholder="user name" value={state.username} onChange={event => setState({...state, username: event.target.value})}/>
            <input type="password" placeholder="password" value={state.password} onChange={event => setState({...state, password: event.target.value})}/>
            <button onClick={event => onLogin()}>Login</button>
        </>
    )
}