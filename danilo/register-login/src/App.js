import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Register} from "./pages/register/register";
import {Home} from "./pages/home/home";
import {Login} from "./pages/login/login";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {createBrowserHistory} from "history";
import store from "./store";
import {Provider} from "react-redux";

const createHistory = createBrowserHistory();
const App = (props) => {
    return (
        <div className="App">
            <Provider store={store}>
                <Router history={createHistory}>

                    <Switch>
                        <Route exact path="/" render={(props) => <Register {...props} />}/>
                        <Route path="/home" render={(props) => <Home {...props} />}/>
                        <Route path="/login" render={(props) => <Login {...props} />}/>
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
