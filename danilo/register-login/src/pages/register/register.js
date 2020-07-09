import React, {useEffect, useState} from "react";
import AuthService from "../../services/auth-service";
import {useHistory} from "react-router";

export const Register = (props) => {
    const history = useHistory();
    const [state, setState] = useState({
        name: '',
        pass: ''
    });
    useEffect(() => {
    })

    const onRegister = () => {
        AuthService.register(state)
            .then(res => {
                history.push('/login')
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            register page
            <input type="text" placeholder="ime" value={state.name} onChange={event => setState({...state, name: event.target.value})}/>
            <input type="password" placeholder="password" value={state.pass} onChange={event => setState({...state, pass: event.target.value})}/>
            <button onClick={event => onRegister()}>Submit</button>
        </>
    )
}