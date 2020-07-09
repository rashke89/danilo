import {REMOVE_USER, STORE_USER} from "./types";

export const setUser = (user) => ({
    payload: user,
    type: STORE_USER
})

export const removeUser = () => ({
    type: REMOVE_USER
})