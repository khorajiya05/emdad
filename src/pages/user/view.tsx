import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import Bahrs from "../../assets/img/bahrs.png";
import Suburban from "../../assets/img/suburban.png";
import User from "../../assets/img/user.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserView: React.FC = () => {
  // constructor() {
  //     super();
  //     this.state = {
  //         tabValue: 1,
  //         show: false,
  //     };
  // }

  const [tabValue, setTabValue] = useState<number | object>(1);
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClose = () => {
    // this.setState({ show: false });
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleRedirectToOrder = () => {
    navigate("/user/list");
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
                    Abdul Kareem{" "}
                    <span className="badge badge-success badge-pill view-badge font-size-12">
                      Active
                    </span>{" "}
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
                {/* <div className="card-header clearfix ">
                                        <ul className="nav nav-tabs primary-tabs">
                                            <li className="nav-item" role="presentation">
                                                <a onClick={()=> setState({tabValue: 1})} className={state.tabValue === 1 ? "nav-link active show" : "nav-link"}> 
                                                    Basic Details
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a onClick={()=> setState({tabValue: 2})} className={state.tabValue === 2 ? "nav-link active show" : "nav-link"}>
                                                Vehicle Details
                                                </a>
                                            </li>
                                          
                                        </ul>
                                    </div> */}
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
                        <div className="col-lg-12 col-xl-10">
                          <h2 className="mt-0 mb-3 text-info">Abdul Kareem</h2>
                          <ul className="list-unstyled text-left row mb-0">
                            <li className="mb-3 col-md-6">
                              <label className="text-muted mb-1">
                                Mobile Number
                              </label>
                              <br /> +249 98765 43210
                            </li>
                            <li className="mb-3 col-md-6">
                              <label className="text-muted mb-1">
                                Email Id
                              </label>
                              <br /> abdulkareem@domain.com
                            </li>
                            <li className="mb-3 col-md-6">
                              <label className="text-muted mb-1">
                                Total Orders
                              </label>
                              <br /> 1
                            </li>
                            <li className="mb-3 col-md-6">
                              <label className="text-muted mb-1">
                                Total Refferal Count
                              </label>
                              <br /> 0
                            </li>
                            <li className="mb-3 col-md-6">
                              <label className="text-muted mb-0">
                                Total Referral Used
                              </label>
                              <br /> 0
                            </li>
                            {/* <li class="mb-3 col-md-6"><label class="text-muted mb-2">0ssigned postal code</label><br />
                                                                <span class="badge font-size-12 ml-0 mr-1 view-badge badge-light">M25</span>
                                                                <span class="badge font-size-12 ml-0 mr-1 view-badge badge-light">M30</span>
                                                            </li>          */}
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default UserView;
