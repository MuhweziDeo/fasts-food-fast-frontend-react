import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeView from '../Containers/HomeView/HomeView';
import  SignUpView from '../Containers/SignUpView/signUpView';
import NavBarView from '../Containers/NavBarView/NavBarView';
import LoginView from '../Containers/LoginView/LoginView';
import UserDashboard from '../components/UserProfile/userDashboard';
import UserDashBoardView from '../Containers/userDashboardView/userDashBoardView';


class Routes extends Component{
    render(){
        return(
            <div>
                <BrowserRouter>

                    <div>
                        <NavBarView/>
                        <Route exact path="/"  component={HomeView}/>
                        <Route exact path="/signup" component={SignUpView}/>
                        <Route exact path="/login" component={LoginView}/>

                        <Route exact path='/dashboard' component={UserDashBoardView} />

                    </div>
                </BrowserRouter>
            </div>

        )
    }
}

export default Routes
