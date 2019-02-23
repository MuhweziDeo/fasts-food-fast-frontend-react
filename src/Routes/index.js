import React, { Component } from 'react'
import App from "../App"
import {BrowserRouter,Route} from 'react-router-dom';


class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
            <Route exact path="/"  component={App}/>
            </div>    
            </BrowserRouter>
        )
    }
}

export default Routes