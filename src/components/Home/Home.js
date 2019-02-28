import React from 'react';
import {Link} from 'react-router-dom';

const Home=(props)=>{
    return(
        <div className="bg-primary">
            <div className="container py-md ">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <h1 className="text-white font-weight-light">Bootstrap carousel</h1>
                        <p className="lead text-white mt-4">Argon Design System comes with four pre-built pages to help you
                            get started faster. You can change the text and images and you're good to go.</p>
                        <Link to="/signup" className="btn btn-white mt-4">Get Started</Link>
                    </div>
                    <div className="col-lg-6 mb-lg-auto">
                        <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                            <div id="carousel_example" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel_example" data-slide-to="0" className="active"></li>
                                    <li data-target="#carousel_example" data-slide-to="1"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="img-fluid" src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                             alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="img-fluid" src="https://images.pexels.com/photos/3660/food-restaurant-dinner-lunch.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                             alt="Second slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carousel_example" role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel_example" role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Home;
