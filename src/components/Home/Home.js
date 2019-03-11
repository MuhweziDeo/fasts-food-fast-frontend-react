import React from 'react';
import {Link} from 'react-router-dom';

const Home=(props)=>{
    return(
        <div className="home__container">
        <div className="bg-primary">
            <div className="container py-md ">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <h1 className="text-white font-weight-light">Fasts Food Fast</h1>
                        <p className="lead text-white mt-4">Food Delivery at a touch of a button</p>
                        <p className="lead text-white mt-4">Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        {!localStorage.getItem('token') ? <Link to="/signup" className="btn btn-white mt-4">Get Started</Link>: <Link className="btn btn-success text-black" to="/dashboard">order Now</Link>}
                        
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
        <section class="section section-lg pt-lg-0 mt--50">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i class="ni ni-check-bold"></i>
                    </div>
                    <h6 class="text-primary text-uppercase">Eat AnyTime</h6>
                    <p class="description mt-3">Fast Foods is a great for providing all kinds of food at anytime Anywhere. Dream of it Order it Now </p>
                    <div>
                      <span class="badge badge-pill badge-primary">Press</span>
                      <span class="badge badge-pill badge-primary">Order</span>
                      <span class="badge badge-pill badge-primary">Eat</span>
                    </div>
                    <a href="#" class="btn btn-primary mt-4">Learn more</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape icon-shape-success rounded-circle mb-4">
                      <i class="ni ni-istanbul"></i>
                    </div>
                    <h6 class="text-success text-uppercase">Order</h6>
                    <p class="description mt-3">Order your meals with a touch of a button and get it delivered to you without moving a muscle</p>
                    <div>
                      <span class="badge badge-pill badge-success">business</span>
                      <span class="badge badge-pill badge-success">vision</span>
                      <span class="badge badge-pill badge-success">success</span>
                    </div>
                    <a href="#" class="btn btn-success mt-4">Learn more</a>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape icon-shape-warning rounded-circle mb-4">
                      <i class="ni ni-planet"></i>
                    </div>
                    <h6 class="text-warning text-uppercase">Prepare Lunch</h6>
                    <p class="description mt-3">At work, dont worry we are just a touch of a button away to make u get what u need</p>
                    <div>
                      <span class="badge badge-pill badge-warning">marketing</span>
                      <span class="badge badge-pill badge-warning">product</span>
                      <span class="badge badge-pill badge-warning">launch</span>
                    </div>
                    <a href="#" class="btn btn-warning mt-4">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-0">
      <div class="container">
        <div class="card bg-gradient-primary shadow-lg border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">We made Food Delivery easier for you.</h3>
                <p class="lead text-white mt-3">I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture.</p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <a href="#" class="btn btn-lg btn-block btn-white">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>

    )
};
export default Home;
