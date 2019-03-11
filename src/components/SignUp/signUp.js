import React from "react";
import Loader from '../Shared/loader';
import {Link} from 'react-router-dom';

const signUp=props=>{
    return(
        <section className="section section-shaped section-lg">
            <div className="shape bg-primary ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="container pt-lg-md p-5">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card bg-secondary shadow border-0">

                            <div className="card-body px-lg-5 py-lg-5">
                                <div className="text-center display-4">
                                    Register
                                </div>
                                <hr/>
                                <form onSubmit={props.onSubmit}>
                                    <div className="form-group">
                                        <div className="input-group input-group-alternative mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-hat-3"></i></span>
                                            </div>
                                            <input name="username" className="form-control" placeholder="username" type="text" onChange={props.onChange}
                                            required />
                                        </div>
                                    </div>
                                    <div className="form-group ">
                                        <div className="input-group input-group-alternative mb-3">
                                            <div className="input-group-prepend ">
                                                <span className="input-group-text"><i
                                                    className="ni ni-email-83"></i></span>
                                            </div>
                                            <input name="password" className="form-control" placeholder="password" type="password" onChange={props.onChange} 
                                            required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group input-group-alternative">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i
                                                    className="ni ni-lock-circle-open"></i></span>
                                            </div>
                                            <input name="confirm" className="form-control" placeholder="confirm" type="password" onChange={props.onChange}
                                            required />
                                        </div>
                                    </div>
                                    <div className="text-muted font-italic">
                                        <small>password strength:
                                            <span className="text-success font-weight-700">strong</span>
                                        </small>
                                    </div>
                                    <div className="row my-4">
                                        <div className="col-12">
                                            <div className="custom-control custom-control-alternative custom-checkbox">
                                                <input className="custom-control-input" id="customCheckRegister"
                                                       type="checkbox"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="customCheckRegister">
                          <span>I agree with the
                            <a href="#">Privacy Policy</a>
                          </span>
                                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                    {!props.showLoader ? null:  <Loader/> }
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary mt-4">Create account</button>
                                    </div>

                                </form>
                                <div className="text-center mt-3">
                                        <p>Already Have An Account Login <Link to="/login">Here</Link> </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export  default  signUp;
