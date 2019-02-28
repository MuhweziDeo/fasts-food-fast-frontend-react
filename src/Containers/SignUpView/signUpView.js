import React, {Component} from 'react'
import  SignUp from '../../components/SignUp/signUp';
import {connect} from 'react-redux';
import  RegisterUser from '../../actions/signUpActions/signUpActions';
import {ToastContainer} from "react-toastify";


export class SignUpView extends  Component{
    state = {
        username:"",
        password:"",
        confirm:""
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    handleSubmit = e => {
        e.preventDefault()
        this.props.RegisterUser(this.state)

    };
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.signup.isSuccessful){
            this.props.history.push('/')
        }

    }


    render() {
        return(
            <div>
                <SignUp onChange={this.handleChange} onSubmit={this.handleSubmit}/>
                <ToastContainer/>
            </div>
        )
    }
};
export  const mapStateToProps=(state)=>{
    return{
        signup:state.SignUpState
    }
}
export  default connect(mapStateToProps,{RegisterUser})  (SignUpView);
