import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import Bahrs from "../../assets/img/bahrs.png";
import Suburban from "../../assets/img/suburban.png";
import User from "../../assets/img/user.jpg";
import { Accordion } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ViewOrder: React.FC = () => {
  // constructor() {
  //     super();
  //     state = {
  //         tabValue: 1,
  //         show: false,
  //     };
  // }
  const [show, setShow] = useState<boolean>(false);
  const [tabValue, setTabValue] = useState<number | object>(1);
  const navigate = useNavigate();

  const handleClose = () => {
    // setState({ show: false });
    setShow(false);
  };
  const handleShow = () => {
    // setState({ show: true });
    setShow(true);
  };
  const handleRedirectToOrder = () => {
    navigate("/driver/list");
  };

  return (
    <React.Fragment>
      <div id="app">
        <div className="d-block d-lg-none">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          <Header />
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>
                    Abdul Kareem
                    <span className="badge badge-warning badge-pill view-badge font-size-12">
                      Pending
                    </span>
                  </h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToOrder()}
                  >
                    <i className="fa fa-angle-left">&nbsp;</i> Back
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <div className="card-header clearfix ">
                  <ul className="nav nav-tabs primary-tabs">
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(1)}
                        className={
                          tabValue === 1 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Basic Details
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(2)}
                        className={
                          tabValue === 2 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Upcoming Order
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(3)}
                        className={
                          tabValue === 3 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Assign Timeslots
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    {tabValue === 1 ? (
                      <div className="tab-pane fadeIn active" id="tab-1">
                        <div className="card-body">
                          <div className="media">
                            <img
                              src={User}
                              className="align-self-start mr-5 ml-3 rounded-circle img-thumbnail o-cover"
                              alt="profile-image"
                              width="130"
                              height="130"
                            />
                            <div className="media-body">
                              <div className="row">
                                <div className="col-lg-12 col-xl-8">
                                  <h2 className="mt-0 mb-3 text-info">
                                    Abdul Kareem
                                  </h2>
                                  <ul className="list-unstyled text-left row mb-0">
                                    {/* <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-1">
                                        Mobile Number
                                      </label>
                                      <br /> +249 98765 43210
                                    </li> */}
                                    <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-1">
                                        Assign Timeslot
                                      </label>
                                      <br /> 12:00 PM to 3:00 PM
                                      <br /> 10:00 PM to 8:00 PM
                                    </li>
                                    <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-1">
                                        Email Id
                                      </label>
                                      <br /> abdulkareem@domain.com
                                    </li>
                                    <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-1">
                                        Vehicle details
                                      </label>
                                      <br /> Current Fuel : -26417.3
                                      <br />
                                      Fuel Capacity : 995
                                    </li>
                                    <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-2">
                                        Assigned Geofence
                                      </label>
                                      <br />
                                      <span className="badge font-size-12 ml-0 mr-1 view-badge badge-light">
                                        Blue Nile
                                      </span>
                                      <span className="badge font-size-12 ml-0 mr-1 view-badge badge-light">
                                        Blue Nile
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 2 ? (
                      <div className="tab-pane fadeIn active" id="tab-2">
                        <div className="table-responsive">
                          <table className="table table-hover nowrap m-0">
                            <thead>
                              <tr>
                                <th>Order Id</th>
                                <th>Timeslot </th>
                                <th>Vehicle </th>

                                <th className="table-field-status">
                                  {" "}
                                  Status
                                  {/* <br /> Promocode (5%) 
                                                                    <OverlayTrigger
                                                                        placement="top"
                                                                        overlay={
                                                                            <Tooltip id={`tooltip01`}>
                                                                                {`Price comes from Sub Total * PB Discount Promocode%`}
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <i className="fa fa-info-circle top-1 m-l-5"></i>
                                                                    </OverlayTrigger> */}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#00001 </td>
                                <td>10:00 am to 10:30 am</td>
                                <td>1</td>
                                {/* <td className="min-w-175">
                                                                    <div className="d-flex align-items-center">
                                                                        <img className="w-40 h-40 rounded-circle o-cover mr-3" src={Bahrs} alt="Product Logo" /> Bahr's Fuel
                                                                    </div>
                                                                </td> */}

                                <td className="table-field-status">
                                  <span className="badge badge-pill badge-success">
                                    Accept
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>#00001 </td>
                                <td>10:00 am to 10:30 am</td>
                                <td>1</td>
                                {/* <td className="min-w-175">
                                                                    <div className="d-flex align-items-center">
                                                                        <img className="w-40 h-40 rounded-circle o-cover mr-3" src={Bahrs} alt="Product Logo" /> Bahr's Fuel
                                                                    </div>
                                                                </td> */}

                                <td className="table-field-status">
                                  <span className="badge badge-pill badge-success">
                                    Accept
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                            {/* <tfoot>
                                                            <tr>
                                                                <td colspan="3"> </td>
                                                                <td className="font-weight-500">Total</td>
                                                                <td className="font-weight-500 text-right">$46.50</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3"> </td>
                                                                <td>(-) Promocode Discount</td>
                                                                <td className="text-right">$1.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3"> </td>
                                                                <td>(+) Delivery Fee</td>
                                                                <td className="text-right">$1.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3"> </td>
                                                                <td>(+) Service Fee</td>
                                                                <td className="text-right">$1.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3"> </td>
                                                                <td>(+) Service Charge</td>
                                                                <td className="text-right">$1.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3"> </td>
                                                                <td>(+) Back to House</td>
                                                                <td className="text-right">$2.75</td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="3"> </td>
                                                                <td className="font-weight-500 font-size-16">Grand Total</td>
                                                                <td className="font-weight-500 text-success text-right font-size-16">$51.25</td>
                                                            </tr>
                                                        </tfoot> */}
                          </table>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 3 ? (
                      <div className="tab-pane fadeIn active" id="tab-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-12 col-xl-8">
                              <ul className="list-unstyled text-left row mb-0">
                                <li className="mb-3 col-md-6">
                                  <label className="text-muted mb-1">M25</label>
                                  <br /> 06:00 - 07:00 | 07:00 - 08:00 | 08:00 -
                                  09:00
                                </li>
                                <li className="mb-3 col-md-6">
                                  <label className="text-muted mb-1">M26</label>
                                  <br /> 06:00 - 07:00 | 07:00 - 08:00
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <div className="card-body">
                            <div className="card-header" id="headingFaqOne">
                              <button
                                className="btn btn-link collapsed"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseFaqOne"
                                aria-expanded="false"
                                aria-controls="collapseFaqOne"
                              >
                                M25
                              </button>
                            </div>
                            <Accordion>
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor
                                  in reprehenderit in voluptate velit esse
                                  cillum dolore eu fugiat nulla pariatur.
                                  Excepteur sint occaecat cupidatat non
                                  proident, sunt in culpa qui officia deserunt
                                  mollit anim id est laborum.
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                  Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat. Duis aute irure dolor
                                  in reprehenderit in voluptate velit esse
                                  cillum dolore eu fugiat nulla pariatur.
                                  Excepteur sint occaecat cupidatat non
                                  proident, sunt in culpa qui officia deserunt
                                  mollit anim id est laborum.
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div> */}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal centered size="lg" show={show} onHide={() => handleClose()}>
        <Modal.Header>
          <h4 className="modal-title">Truck Location</h4>
          <button className="close" onClick={() => handleClose()}>
            <span aria-hidden="true" className="zmdi zmdi-close"></span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8219652911444!2d72.49649711496726!3d22.993573384967775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84576f8f3c2d%3A0x43df72e8efb0b1ac!2sPeerbits!5e0!3m2!1sen!2sin!4v1635418479463!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ViewOrder;
