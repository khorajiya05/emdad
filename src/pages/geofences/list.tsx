import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
// import { Pagination } from '../../components/pagination/pagination';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { DatePicker } from '../../components';
import Select from "react-select";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
// import User from "../../assets/img/user.jpg";

const SelectStatus = [
  { value: "All", label: "All" },
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];


const GeofanceList: React.FC = () => {
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

  const navigate = useNavigate();

  const handleRedirectToRolespermissions = () => {
    navigate("/geofences/form");
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
                  <h1>Geofences</h1>
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
                  <Select
                    className="custom-select-dropdown w-150"
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
                  <button type="button" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
                <div className="m-l-10">
                  <button type="button" className="btn btn-primary" onClick={handleRedirectToRolespermissions}>
                    Add New Geofence
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover nowrap m-0">
                      <thead>
                        <tr>
                          <th className="sorting">
                            <span>Geofence Name</span>
                          </th>
                          <th className="table-field-status">Status</th>
                          <th className="table-field-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(5)].map((elementInArray, index) => (
                          <React.Fragment>
                            <tr key={index}>
                              {/* <div className="media">
                                                                <img className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover" src={User} />
                                                                <div className="media-body">
                                                                    <h6 className="mt-1 mb-0">John Smith</h6>
                                                                    <span className="text-muted">+1 987 654 3210</span>
                                                                </div>
                                                            </div> */}
                              <td>Al Jazirah</td>
                              <td className="table-field-status">
                                <span className="badge badge-pill badge-success">
                                  Active
                                </span>
                              </td>
                              <td className="table-field-actions">
                                <Dropdown className="btn-group">
                                  <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className="btn btn-sm btn-icon-only"
                                  >
                                    <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleRedirectToRolespermissions}>
                                      <i className="fa fa-edit fa-fw text-accent-custom"></i>{" "}
                                      Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      href="#"
                                      onClick={() => handleShowDelete()}
                                    >
                                      <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>{" "}
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                            </tr>
                            <tr key={index}>
                              {/* <td>
                                                             <div className="media">
                                                                 <img className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover" src={User} /> 
                                                                <div className="media-body">
                                                                    <h6 className="mt-1 mb-0">John Smith</h6>
                                                                    <span className="text-muted">+1 987 654 3210</span>
                                                                </div>
                                                            </div> 
                                                        </td> */}
                              <td>Al Qadarif</td>

                              <td className="table-field-status">
                                <span className="badge badge-pill badge-danger">
                                  Inactive
                                </span>
                              </td>
                              <td className="table-field-actions">
                                <Dropdown className="btn-group">
                                  <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className="btn btn-sm btn-icon-only"
                                  >
                                    <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleRedirectToRolespermissions}>
                                      <i className="fa fa-edit fa-fw text-accent-custom"></i>{" "}
                                      Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      href="#"
                                      onClick={() => handleShowDelete()}
                                    >
                                      <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>{" "}
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* <Pagination /> */}
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
      {/* 
      <Modal centered scrollable show={this.state.showActorModal} onHide={() => this.handleCloseActors()}>
                    <Modal.Header className="justify-content-center">
                        <h3 className="modal-title">Actors</h3>
                        <button className="close" onClick={() => this.handleCloseActors()}>
                            <span aria-hidden="true" className="zmdi zmdi-close"></span>
                        </button>
                    </Modal.Header>
                    <Modal.Body className="p-0">
                        <ul className="list-group list-group-flush customer-list pb-0">
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={User} className="w-40 h-40 rounded-circle" />
                                    <span className="customer-name">John Smith</span>
                                </div> 
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={User} className="w-40 h-40 rounded-circle" />
                                    <span className="customer-name">Peter Williams</span>
                                </div> 
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={User} className="w-40 h-40 rounded-circle" />
                                    <span className="customer-name">John Smith</span>
                                </div> 
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={User} className="w-40 h-40 rounded-circle" />
                                    <span className="customer-name">Peter Williams</span>
                                </div> 
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={User} className="w-40 h-40 rounded-circle" />
                                    <span className="customer-name">John Smith</span>
                                </div> 
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={User} className="w-40 h-40 rounded-circle" />
                                    <span className="customer-name">Peter Williams</span>
                                </div> 
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={User} className="w-40 h-40 rounded-circle" />
                                    <span className="customer-name">John Smith</span>
                                </div> 
                            </li>
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src={User} className="w-40 h-40 rounded-circle" />
                                    <span className="customer-name">Peter Williams</span>
                                </div> 
                            </li>
                        </ul>
                    </Modal.Body>
                </Modal> */}

    </React.Fragment>
  );
};

export default GeofanceList;
