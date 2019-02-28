import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeView from '../Containers/HomeView/HomeView';
import  SignUpView from '../Containers/SignUpView/signUpView';
import NavBarView from '../Containers/NavBarView/NavBarView';

class Routes extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>

                    <div>
                        <NavBarView/>
                        <Route exact path="/"  component={HomeView}/>
                        <Route exact path="/signup" component={SignUpView}/>
                    </div>
                </BrowserRouter>
            </div>

        )
    }
}

export default Routes
