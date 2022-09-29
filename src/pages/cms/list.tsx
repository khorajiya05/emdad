import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
// import { Pagination } from '../../components/pagination/pagination';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { DatePicker } from '../../components';
import { Modal } from "react-bootstrap";
import { useState } from "react";
// import User from "../../assets/img/user.jpg";

const CMSPages: React.FC = () => {
  //   constructor() {
  //     super();
  //     this.state = {
  //         tabValue: 1,
  //         show: false,
  //         showDeleteModal: false,
  //     };
  //   }
  const [tabValue, setTabValue] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleCloseDelete = () => {
    // this.setState({ showDeleteModal: false});
    setShowDeleteModal(false);
  };

  const handleShow = () => {
    // this.setState({ show: true});
    setShow(true);
  };
  const handleShowDelete = () => {
    // this.setState({ showDeleteModal: true});
    setShowDeleteModal(true);
  };

  return (
    <React.Fragment>
      <Header />
      <div id="app">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>CMS Pages</h1>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <div className="card-header clearfix ">
                  <ul className="nav nav-tabs primary-tabs">
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(tabValue)}
                        className={
                          tabValue === 1 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Customers
                      </a>
                    </li>
                    {/* <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(2)}
                        className={
                          tabValue === 2 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Vendors
                      </a>
                    </li> */}
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(3)}
                        className={
                          tabValue === 3 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Drivers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    {tabValue === 1 ? (
                      <div className="tab-pane fadeIn active" id="tab-1">
                        <div className="table-responsive">
                          <table className="table table-hover m-0">
                            <thead>
                              <tr>
                                <th>Particular Name</th>
                                <th>Last Modified on</th>
                                <th className="table-field-actions">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(1)].map((elementInArray, index) => (
                                <React.Fragment>
                                  <tr key={index}>
                                    <td>Terms & Conditions</td>
                                    <td>16th June, 2021</td>
                                    <td className="table-field-actions">
                                      <Link
                                        to="/cms/view"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr key={index}>
                                    <td>Privacy Policy</td>
                                    <td>06th April, 2021</td>
                                    <td className="table-field-actions">
                                      <Link
                                        to="/cms/view"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr key={index}>
                                    <td>About Us</td>
                                    <td>06th April, 2021</td>
                                    <td className="table-field-actions">
                                      <Link
                                        to="/cms/view"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr key={index}>
                                    <td>Contact Us</td>
                                    <td>06th April, 2021</td>
                                    <td className="table-field-actions">
                                      <Link
                                        to="/cms/contact-us"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : null}

                    {tabValue === 3 ? (
                      <div className="tab-pane fadeIn active" id="tab-3">
                        <div className="table-responsive">
                          <table className="table table-hover m-0">
                            <thead>
                              <tr>
                                <th>Particular Name</th>
                                <th>Last Modified on</th>
                                <th className="table-field-actions">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(1)].map((elementInArray, index) => (
                                <React.Fragment>
                                  <tr key={index}>
                                    <td>Terms & Conditions</td>
                                    <td>16th June, 2021</td>
                                    <td className="table-field-actions">
                                      <Link
                                        to="/cms/view"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr key={index}>
                                    <td>Privacy Policy</td>
                                    <td>06th April, 2021</td>
                                    <td className="table-field-actions">
                                      <Link
                                        to="/cms/view"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr key={index}>
                                    <td>About Us</td>
                                    <td>06th April, 2021</td>
                                    <td className="table-field-actions">
                                      <Link
                                        to="/cms/view"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr key={index}>
                                    <td>Contact Us</td>
                                    <td>06th April, 2021</td>
                                    <td className="table-field-actions">
                                      <Link
                                        to="/cms/contact-us"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
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
      <Modal centered show={showDeleteModal} onHide={() => handleCloseDelete()}>
        <Modal.Header className="justify-content-center border-0">
          <h3 className="modal-title">Delete</h3>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>
            <i className="far fa-times-circle fa-3x text-danger"></i>
          </span>
          <p className="font-size-18 m-0 mt-2">Are you sure want to delete?</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <button
            className="btn btn-dark min-w-100"
            onClick={() => handleCloseDelete()}
          >
            No
          </button>
          <button
            className="btn btn-danger min-w-100"
            onClick={() => handleCloseDelete()}
          >
            Yes
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default CMSPages;
