import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import HomeView from '../Containers/HomeView/HomeView';
import  SignUpView from '../Containers/SignUpView/signUpView';
import NavBarView from '../Containers/NavBarView/NavBarView';
import LoginView from '../Containers/LoginView/LoginView';
import UserDashBoardView from '../Containers/userDashboardView/userDashBoardView';
import Footer from '../components/Shared/Footer';

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
                        <Footer/>

                    </div>
                </BrowserRouter>
            </div>

        )
    }
}

export default Routes
