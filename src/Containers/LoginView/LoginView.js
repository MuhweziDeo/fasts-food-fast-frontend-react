import React, { Component } from 'react';
import Login from '../../components/Login/login';
import {connect} from  'react-redux';
import loginAction from '../../actions/loginActions/loginActions';

export class LoginView extends  Component{
    state={
        username:"",
        password:""
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    handleSubmit =e =>{
        e.preventDefault()
        this.props.loginAction(this.state)

    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.loginState.loginSuccessful){
            this.props.history.push('/')
        }
    }

    render() {
        return(
            <Login onSubmit={this.handleSubmit} onChange={this.handleChange} />
        )
    }
}
export const mapStateToProps =state =>{
    return{
        loginState:state.LoginState
    }
}
export  default connect(mapStateToProps,{loginAction}) (LoginView) ;
