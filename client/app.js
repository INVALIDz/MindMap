import React,{Fragment} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './layout/navbar'
import Landing from './layout/landing'
import Login from './layout/login'
import Register from './layout/register'
import './style.css'


const App = () => {
    <Router>
        <Fragment>
            <Navbar/>        
            <Route exact path='/index' component={Landing}/>
            <section className="container">
                <Switch>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </section>
        </Fragment>
    </Router>;
};

export default App;