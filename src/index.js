import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

class Apple extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" name="home" component={Home} />
                    <Route exact path="/login" name="login" component={Login} />
                    <Route exact path="/register" name="register" component={Register} />
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(<Apple />, document.getElementById('root'));
registerServiceWorker();

