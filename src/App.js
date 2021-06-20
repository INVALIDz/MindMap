import React from 'react';
import Provider from './context/';
import ThemeProvider from './features/ThemeProvider'
import Nav from './features/Nav';
import Register from './features/Register';
import Main from './features/Main'
import { BrowserRouter as Router,Route,Switch,withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'


const App = () => {
    
    return (
    <Router>
    <Provider>
        <ThemeProvider>
        <Route exact path='/' component={withRouter(Nav)}/>
        <Route exact path='/' component={withRouter(Main)}/>
        <Route exact path='/' component={withRouter(Register)}/>      
        </ThemeProvider>
    </Provider>
    </Router>);
};

export default App;
