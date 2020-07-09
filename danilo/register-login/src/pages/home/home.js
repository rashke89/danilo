import React, {useEffect} from "react";
import AuthService from "../../services/auth-service";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {removeUser, setUser} from "../login/store/action";
import {userDefaultIMg} from "../../assets";

export const Home = () => {

    let history = useHistory();
    let userStore = useSelector(store => store.userStore);
    const dispatch = useDispatch();

    useEffect(() => {
        !AuthService.getUserData() && history.push('/login');

        if (userStore)
            dispatch(setUser(AuthService.getUserData()))
    }, []);

    const onLogoutUser = () => {
        AuthService.logout(history);
        dispatch(removeUser())
    };

    const userImgView = () => <img src={userStore && userStore.hasOwnProperty('img') ? userStore.img : userDefaultIMg} alt=""/>

    return (
        <>
            <h1>HOME page</h1>

            <h3>Welcom MR {userStore.first_name}</h3>

            {userImgView()}

            <button onClick={event => onLogoutUser()}>Log out</button>
        </>
    )
}