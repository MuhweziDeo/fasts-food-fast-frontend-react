import React, { Component} from 'react';
import {connect} from "react-redux";
import UserDashboard from '../../components/UserProfile/userDashboard';
import {getUserOrdersAction,postAnOrderAction} from '../../actions/userOrdersActions/userOrderActions';
import {getMenuActions} from '../../actions/menuActions/menuActions';
import {ToastContainer} from "react-toastify";

export class UserDashBoardView extends Component{
    state = {
        meal:"",
        location:"",
        quantity:""

    }
    componentWillMount() {
        this.props.getUserOrdersAction()
        this.props.getMenuActions()
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.postAnOrderAction(this.state);
        setTimeout(() => {
            this.props.getUserOrdersAction()
        },500)
    };
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };
   

    render() {
        const userOrders=this.props.userOrdersState.payload;
        const userOrdersMessage=this.props.userOrdersState.message;
        const menu = this.props.menuState.payload;
        return(
            <div>
                <UserDashboard orderList={userOrders} message={userOrdersMessage} onSubmit={this.handleSubmit}
                               menu={menu} onChange={this.handleChange} />
                               <ToastContainer/>

            </div>



        )
    }
}

export const mapStateToProps = state =>{
    return{
        userOrdersState:state.UserOrders,
        menuState:state.Menu
    }
}
export  default connect(mapStateToProps,{getUserOrdersAction,getMenuActions,postAnOrderAction}) (UserDashBoardView)
