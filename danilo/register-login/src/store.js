import {combineReducers, createStore} from 'redux';
import {userReducer} from "./pages/login/store/reducer";

const store = combineReducers({
    userStore: userReducer
});

export default createStore(store)