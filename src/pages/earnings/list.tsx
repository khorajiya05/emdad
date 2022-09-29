import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
// import { Pagination } from '../../components/pagination/pagination';
// import Dropdown from 'react-bootstrap/Dropdown';
import { DatePicker } from '../../components';
import Select from "react-select";
import { Modal } from "react-bootstrap";
import { useState } from "react";
// import User from "../../assets/img/user.jpg";

const SelectStatus = [
  { value: "All", label: "All" },
  { value: "Pending", label: "Pending" },
  { value: "Live", label: "Live" },
];


const EarningPages: React.FC = () => {
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

  const [selectedValue2, setSelectedValue2] = useState("All");
  return (
    <React.Fragment>
      <Header />
      <div id="app">
        {/* <Sidebar /> */}
        <div className="content-wrapper">
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>Earnings</h1>
                </div>
                <div className="m-l-10">
                  <div className="input-group w-250">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      title="Search"
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="input-group-text pointer"
                      >
                        <span className="fa fa-search"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="m-l-10">
                  <div className="input-group d-flex">
                    <DatePicker />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="icon dripicons-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="m-l-10">
                  <Select
                    className="custom-select-dropdown min-w-200"
                    value={
                      selectedValue2
                        ? (SelectStatus || []).find(
                          (prod) => prod.value === selectedValue2
                        ) || null
                        : null
                    }
                    onChange={(val) =>
                      setSelectedValue2((val && val.value) || "")
                    }
                    placeholder="-- Select --"
                    options={SelectStatus || []}
                  />
                </div>
                
                <div className="m-l-10">
                  <button type="button" className="btn btn-primary2">
                    Submit
                  </button>
                </div>
                <div className="m-l-10">
                  <button type="button" className="btn btn-secondary">
                    Reset
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
                        onClick={() => setTabValue(tabValue)}
                        className={
                          tabValue === 1 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Net Earning
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(2)}
                        className={
                          tabValue === 2 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Cancelled Orders Earning
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
                                <th>Vendor Name</th>
                                <th>Mobile Number</th>
                                <th>Email Id</th>
                                <th>Orders</th>
                                <th>Vendor Total Earning </th>
                                <th>Admin Total Earning  </th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(1)].map((elementInArray, index) => (
                                <React.Fragment>
                                  <tr key={index}>
                                    <td>Rahul</td>
                                    <td>7531599633</td>
                                    <td>fahad.m+1@peerbits.com</td>
                                    <td>
                                      <Link
                                        to="/cms/view"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <span className="badge badge-light">4</span>
                                      </Link>
                                    </td>
                                    <td>$209.65</td>
                                    <td>$1188.05</td>
                                  </tr>
                                </React.Fragment>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 2 ? (
                      <div className="tab-pane fadeIn active" id="tab-2">
                        <div className="table-responsive">
                          <table className="table table-hover m-0">
                            <thead>
                              <tr>
                                <th>Vendor Name</th>
                                <th>Mobile Number</th>
                                <th>Email Id</th>
                                <th>Orders</th>
                                <th>Status</th>
                                <th>Admin Total Earning </th>
                              </tr>
                            </thead>
                            <tbody>
                              {[...Array(1)].map((elementInArray, index) => (
                                <React.Fragment>
                                  <tr key={index}>
                                    <td>Chetan</td>
                                    <td>9191919199</td>
                                    <td>chetan.b+23@peerbits.com</td>
                                    <td>
                                      <Link
                                        to="/cms/view"
                                        className="btn btn-default btn-icon-only"
                                      >
                                        <span className="badge badge-light">4</span>
                                      </Link>
                                    </td>
                                    <td>
                                      <span className="badge badge-pill badge-danger">
                                        Cancelled
                                      </span>
                                    </td>
                                    <td>9191919199</td>
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

export default EarningPages;
