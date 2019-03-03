import React from 'react'
import faker from 'faker'
import {ToastContainer} from "react-toastify";
import dateConvetor from '../../helpers/utils';

const userDashboard = props => {
    const orderList=props.orderList.map(order=>{
        return(
            <div className="row">
                <div className="col-md-2">
                    {order.orderid}
                </div>
                <div className="col-md-2">
                    {order.meal_name}
                </div>
                <div className="col-md-2">
                    {order.quantity}
                </div>
                <div className="col-md-2">
                    {order.status}
                </div>
                <div className="col-md-2">
                    {order.location}
                </div>
                <div className="col-md-2">
                    {dateConvetor(order.order_date)}
                </div>

            </div>

        )
    })
    return(
        <main className="profile-page bg-primary">
            <section className="section">
                <div className="container">
                    <div className="card card-profile shadow mt-0">
                        <div className="px-4">
                            <div className="row justify-content-start">
                                <div className="col-lg-3 order-lg-2">
                                    <div className="card-profile-image">
                                        <a href="#">
                                            <img src={localStorage.getItem('img')}
                                                 className="rounded-circle" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-5">
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
                            <div className="mt-5 py-5 border-top text-center">
                                <div className="nav-wrapper">
                                    <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-icons-text"
                                        role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-icons-text-1-tab"
                                               data-toggle="tab" href="#tabs-icons-text-1" role="tab"
                                               aria-controls="tabs-icons-text-1" aria-selected="true"><i
                                                className="ni ni-cloud-upload-96 mr-2"></i>Orders</a>
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

                                                <table className="table table-bordered">
                                                    <thead>
                                                    <tr>
                                                        <th>OrderID</th>
                                                        <th>MEAL NAME</th>
                                                        <th>QUANTITY</th>
                                                        <th>STATUS</th>
                                                        <th>LOCATION</th>
                                                        <th>DATE</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    </tbody>
                                                </table>
                                                {orderList}

                                                {props.message}
                                            </div>
                                            <div className="tab-pane fade" id="tabs-icons-text-2" role="tabpanel"
                                                 aria-labelledby="tabs-icons-text-2-tab">
                                                <p className="description">Cosby sweater eu banh mi, qui irure terry
                                                    richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan
                                                    aliquip quis cardigan american apparel, butcher voluptate nisi
                                                    qui.</p>
                                            </div>
                                            <div className="tab-pane fade" id="tabs-icons-text-3" role="tabpanel"
                                                 aria-labelledby="tabs-icons-text-3-tab">
                                                <p className="description">Raw denim you probably haven't heard of them
                                                    jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
                                                    master cleanse. Mustache cliche tempor, williamsburg carles vegan
                                                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                                                    synth.</p>
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
