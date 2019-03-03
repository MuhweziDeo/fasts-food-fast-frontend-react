import React, { Component} from 'react';
import {connect} from "react-redux";
import UserDashboard from '../../components/UserProfile/userDashboard';
import {getUserOrdersAction} from '../../actions/userOrdersActions/userOrderActions';

export class UserDashBoardView extends Component{
    componentWillMount() {
        this.props.getUserOrdersAction()
    }

    render() {
        const userOrders=this.props.userOrdersState.payload
        const userOrdersMessage=this.props.userOrdersState.message

        return(
            <div>
                <UserDashboard orderList={userOrders} message={userOrdersMessage}/>

            </div>



        )
    }
}

export const mapStateToProps = state =>{
    return{
        userOrdersState:state.UserOrders
    }
}
export  default connect(mapStateToProps,{getUserOrdersAction}) (UserDashBoardView)
