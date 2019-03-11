import React, {Component} from 'react'
import  SignUp from '../../components/SignUp/signUp';
import {connect} from 'react-redux';
import  RegisterUser from '../../actions/signUpActions/signUpActions';
import {ToastContainer} from "react-toastify";


export class SignUpView extends  Component{
    state = {
        username:"",
        password:"",
        confirm:"",
        loading:false,
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    handleSubmit = e => {
        e.preventDefault()
        this.props.RegisterUser(this.state)
        this.setState({
            loading:true
        })

    };
    componentWillReceiveProps(nextProps) {
        if(nextProps.signup.isSuccessful){
            this.setState({
                loading:false
            })
            this.props.history.push('/')
        }
        else{
            this.setState({
                loading:false
            })
        }
       

    }


    render() {
        return(
            <div>
                <SignUp onChange={this.handleChange} onSubmit={this.handleSubmit} showLoader={this.state.loading} />
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
