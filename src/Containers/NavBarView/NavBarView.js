import React,{ Component } from 'react';
import NavBar from '../../components/Shared/NavBar/NavBar';
const jwt = require('jsonwebtoken');

class NavBarView extends Component{
    state={
        IsAuth:false
    }
    componentWillMount() {
       const  token=localStorage.getItem('token')
        if(token){
            try {
                const decoded= jwt.verify(token, 'thisissesandnkananasckcnakanks');
                this.setState({
                    IsAuth:true
                })
            } catch(err) {
                this.setState({
                    IsAuth:false
                })

            }

        };
    };

    render() {
        return(
            <NavBar IsAuthenticated={this.state.IsAuth}/>
        )
    }
}

export  default NavBarView;
