import  React from 'react';
import { Dropdown, Image } from 'semantic-ui-react'
import {Link } from 'react-router-dom';

const trigger = (
    <span>
    <Image avatar src={localStorage.getItem('img')} /> {localStorage.getItem('username')}
  </span>
)

const options = [
    { key: 'user', text: 'Profile', icon: 'user', as:Link, to:'/dashboard'},
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick:()=>{
        localStorage.clear()
            window.location.reload()
        } },
]

export const DropdownImageTrigger = () => (
    <Dropdown trigger={trigger} options={options} pointing='top left' icon={null} />
)
const NavBar = (props) =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container">
                <Link className="navbar-brand" to="/">Fasts Foods Fast</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default"
                        aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-default">
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <a href="index.html">
                                    <img src="assets/img/brand/blue.png"/>
                                </a>
                            </div>
                            <div className="col-6 collapse-close">
                                <button type="button" className="navbar-toggler" data-toggle="collapse"
                                        data-target="#navbar-default" aria-controls="navbar-default"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <ul className="navbar-nav ml-lg-auto">
                        {!props.IsAuthenticated ?
                            <li className="nav-item  btn btn-white">
                                <Link to="/login"> Login </Link>

                            </li>
                            : <li className="nav-item text-white">
                            <DropdownImageTrigger/>
                        </li>}

                    </ul>

                </div>
            </div>
        </nav>
    )
};
export  default NavBar;
