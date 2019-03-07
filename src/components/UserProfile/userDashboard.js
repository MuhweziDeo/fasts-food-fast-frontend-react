import React from 'react'
import faker from 'faker'
import {ToastContainer} from "react-toastify";
import dateConvetor from '../../helpers/utils';

const userDashboard = props => {
    const orderList=props.orderList.map(order=>{
        console.log(props.orderList.length)
        return(

            <div className="col-lg-4 mb-5">
                <div className="card card-lift--hover shadow border-0">
                  <div className="card-body py-5">
                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i className="ni ni-istanbul"></i>
                    </div>
                    <h6 className="text-success text-uppercase">orderID: {order.orderid} </h6>
                    <p className="description mt-3">Meal Name: {order.meal_name} </p>
                    <p className="description mt-3">Quantity: {order.quantity} </p>
                    <p className="description mt-3">Status: <span className="btn btn-info p-0">{order.status} </span></p>
                    <p className="description mt-3">Location: {order.location} </p>
                    <p className="description mt-3 ">PlacedOn: <strong>{dateConvetor(order.order_date)}</strong></p>     
                    <div>
                      <span className="badge badge-pill badge-primary">fastfoods</span>
                      <span className="badge badge-pill badge-primary">takeaways</span>
                    </div>
                    <a href="#" className="btn btn-outline-primary mt-4">Edit</a>
                    <a href="#" className="btn btn-outline-danger mt-4">Delete</a>
                  </div>
                </div>
              </div>  

        )
    });
    const menu = props.menu.map(meal => {
        return(
            <option key={meal.id}>{meal.meal_name}</option>
        )
    })
    return(
        <main className="profile-page bg-primary">
            <section className="section">
                <div className="container">
                    <div className="card card-profile mt-0">
                        <div className="px-4">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="">
                                        <a href="#">
                                            <img src={localStorage.getItem('img')}
                                                 className="rounded-circle img-fluid" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center mt-5 col-lg-9 ">
                                <h3>{localStorage.getItem('username')}
                                    <span className="font-weight-light">, 27</span>
                                </h3>
                                <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>{faker.address.streetName()}
                                    {faker.address.city()}
                                </div>
                                <div className="h6 mt-4"><i className="ni business_briefcase-24 mr-2"></i>{faker.name.jobTitle()}

                                </div>
                                <div><i className="ni education_hat mr-2"></i>{faker.internet.email()}</div>
                            </div>
                            </div>
                          
                            <div className="mt-5 py-5 border-top text-center">
                                <div className="nav-wrapper">
                                    <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text"
                                        role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-icons-text-1-tab"
                                               data-toggle="tab" href="#tabs-icons-text-1" role="tab"
                                               aria-controls="tabs-icons-text-1" aria-selected="true"><i
                                                className="ni ni-cloud-upload-96 mr-2"></i>My Orders
                                                   <span className="badge badge-danger ml-2">{props.orderList.length}</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-2-tab"
                                               data-toggle="tab" href="#tabs-icons-text-2" role="tab"
                                               aria-controls="tabs-icons-text-2" aria-selected="false"><i
                                                className="ni ni-bell-55 mr-2"></i>Place An Order</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-3-tab"
                                               data-toggle="tab" href="#tabs-icons-text-3" role="tab"
                                               aria-controls="tabs-icons-text-3" aria-selected="false"><i
                                                className="ni ni-calendar-grid-58 mr-2"></i> Profile</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="tabs-icons-text-1"
                                                 role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
                                                 <div className="row">
                                                 {orderList}
                                                 </div>
                                               

                                                {props.message}
                                            </div>
                                            <div className="tab-pane fade" id="tabs-icons-text-2" role="tabpanel"
                                                 aria-labelledby="tabs-icons-text-2-tab">
                                                <form onSubmit={props.onSubmit}>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleFormControlSelect1">Select Meal</label>
                                                        <select className="form-control" onChange={props.onChange} name="meal" required>
                                                            <option >Select a Meal</option>
                                                            {menu}
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="number" min="1" className="form-control" name="quantity"
                                                                 placeholder="quantity" onChange={props.onChange}
                                                        required />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                                  placeholder="location" name="location" onChange={props.onChange}
                                                        required />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="submit" className="btn btn-primary"
                                                                       value="Order" />
                                                    </div>

                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="tabs-icons-text-3" role="tabpanel"
                                                 aria-labelledby="tabs-icons-text-3-tab">
                                               Manage Profile Here
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer/>
            </section>
        </main>

)
}
export default userDashboard
