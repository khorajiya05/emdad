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
const VendorsView: React.FC = () => {
  // constructor() {
  //     super();
  //     state = {
  //         tabValue: 1,
  //         show: false,
  //     };
  // }
  const [show, setShow] = useState<boolean>(false);
  const [tabValue, setTabValue] = useState<number | object>(1);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
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
    navigate("/vendors/list");
  };

  const handleCloseDelete = () => {
    setShowDeleteModal(false);
  };

  const handleShowDelete = () => {
    setShowDeleteModal(true);
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
              <div className="d-flex align-items-center justify-content-end">
                <div className="mr-auto">
                  <h1>
                    Tristar Transport LLC
                    <span className="badge badge-success badge-pill view-badge font-size-12">
                      Active
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
              <div className="card  clearfix">
                <div className="card-body p-0">
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
                              <li className="mb-3 col-md-6">
                                <label className="text-muted mb-1">
                                  Location
                                </label>
                                <br /> Al Khurtum, Sudan <i className="icon dripicons-location pointer ml-1 align-middle" onClick={() => handleShowDelete()}></i>

                              </li>
                              <li className="mb-3 col-md-6">
                                <label className="text-muted mb-1">
                                  Mobile Number
                                </label>
                                <br /> +249 98765 43210
                              </li>
                              <li className="mb-3 col-md-6">
                                <label className="text-muted mb-1">
                                  Category
                                </label>
                                <br /> Transport
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div >
      <Modal centered show={showDeleteModal} onHide={() => handleCloseDelete()}>
        <Modal.Body>
          <Modal.Header>
            <h4 className="modal-title">Vendor Location</h4>
            <button className="close" onClick={() => handleCloseDelete()}>
              <span aria-hidden="true" className="zmdi zmdi-close"></span>
            </button>
          </Modal.Header>
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
    </React.Fragment >
  );
};

export default VendorsView;
