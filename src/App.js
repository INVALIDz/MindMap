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
    
    <Provider>
        <ThemeProvider>
        <Nav/>
        <Main/>
        <Register/> 
        </ThemeProvider>
    </Provider>
    );
};

export default App;
