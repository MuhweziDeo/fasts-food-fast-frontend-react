import React, {Component} from 'react'
import Home from '../../components/Home/Home';
import {ToastContainer} from "react-toastify";

export class HomeView extends  Component{
    render() {
        return(
            <div>
                <Home />
                <ToastContainer/>
            </div>
        )
    }
};

export  default  HomeView;
