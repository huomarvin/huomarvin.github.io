import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Detail from './detail';
import { BrowserRouter, Route, Link } from "react-router-dom";
class App extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter >
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail" component={Detail} />
                </div>
            </BrowserRouter>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
