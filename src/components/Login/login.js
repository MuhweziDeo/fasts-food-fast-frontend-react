import React from 'react';
import { Link } from 'react-router-dom';
import {ToastContainer} from "react-toastify";

const login = props => {
    return(
        <section className="section section-shaped section-lg bg-primary">
            <div className="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="container pt-lg-md">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card bg-secondary shadow border-0">
                            <div className="card-header bg-white pb-5">
                                <div className="text-muted text-center mb-3">
                                    <small>Sign in with</small>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <a href="#" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <img src="../assets/img/icons/common/github.svg" />
                    </span>
                                        <span className="btn-inner--text">Github</span>
                                    </a>
                                    <a href="#" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <img src="../assets/img/icons/common/google.svg" />
                    </span>
                                        <span className="btn-inner--text">Google</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-body px-lg-5 py-lg-5">
                                <div className="text-center text-muted mb-4">
                                    <small>Or sign in with credentials</small>
                                </div>
                                <form onSubmit={props.onSubmit}>
                                    <div className="form-group mb-3">
                                        <div className="input-group input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-email-83"></i></span>
                                            </div>
                                            <input name="username" className="form-control" placeholder="Username" type="text" onChange={props.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input name="password" className="form-control" placeholder="Password" type="password" onChange={props.onChange}/>
                                        </div>
                                    </div>
                                    <div className="custom-control custom-control-alternative custom-checkbox">
                                        <input className="custom-control-input" id=" customCheckLogin" type="checkbox" />
                                            <label className="custom-control-label" htmlFor=" customCheckLogin">
                                                <span>Remember me</span>
                                            </label>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary my-4">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-6">
                                <a href="#" className="text-white btn btn-primary">
                                    <small>Forgot password?</small>
                                </a>
                            </div>
                            <div className="col-6 text-right">
                                <Link to="/signup" className="text-white btn btn-primary">
                                    <small>Create new account</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </section>
    )
}
export  default  login;
