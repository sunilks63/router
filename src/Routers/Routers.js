import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Connection} from "../Pages";
import {Dataset} from "../Pages";
import {Overview} from "../Pages";
class RouterRoute extends Component{
    render(){
        return(
            <React.Fragment>
            <Route exact path="/" component={Overview} />
            <Route exact path="/Connection" component={Connection} />
            <Route exact path="/Datasets" component={Dataset} />
            </React.Fragment>   
        )
    }
}

export default RouterRoute;