import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Pagination from "../../components/pagination/pagination";
import { Modal } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import FireTable from "../../assets/img/fire-table.png";
import Grill from "../../assets/img/grill.png";
import PatioHeater from "../../assets/img/patio-heater.png";
import { useState } from "react";

const Timeslot: React.FC = () => {
  // constructor() {
  //     super();
  //    state = {
  //         tabValue: 1,
  //         show: false,
  //         showDeleteModal: false,
  //         value: ['10:00', '11:00'],
  //     };
  //   }
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [tabValue, setTabValue] = useState<number | object>(1);
  //   const [value,setValue] =useState<number | string>(1);
  const [firstTime, setFirstTime] = useState<string>();
  const [secondTime, setSecondTime] = useState<string>();
  const handleShow = () => {
    //setState({ show: true});
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleShowDelete = () => {
    //setState({ showDeleteModal: true});
    setShowDeleteModal(true);
  };
  const handleCloseDelete = () => {
    setShowDeleteModal(false);
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
                  <h1>Time Slots</h1>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleShow()}
                  >
                    Add New Time Slot
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover m-0">
                      <thead>
                        <tr>
                          <th className="w-300">Start Time</th>
                          <th>End Time</th>
                          <th className="text-center">Order Limit</th>
                          <th className="table-field-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(5)].map((elementInArray, index) => (
                          <React.Fragment>
                            <tr key={index}>
                              <td>09:00 AM</td>
                              <td>10:00 AM</td>
                              <td className="text-center">10</td>
                              <td className="table-field-actions">
                                <Dropdown className="btn-group">
                                  <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className="btn btn-sm btn-icon-only"
                                  >
                                    <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      href="#"
                                      onClick={() => handleShow()}
                                    >
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
                              <td>10:00 AM</td>
                              <td>11:00 AM</td>
                              <td className="text-center">10</td>
                              <td className="table-field-actions">
                                <Dropdown className="btn-group">
                                  <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className="btn btn-sm btn-icon-only"
                                  >
                                    <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      href="#"
                                      onClick={() => handleShow()}
                                    >
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
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal centered scrollable show={show} onHide={() => handleClose()} size="lg">
        <Modal.Header>
          <h4 className="modal-title">Add New Time Slot</h4>
          <button className="close" onClick={() => handleClose()}>
            <span aria-hidden="true" className="zmdi zmdi-close"></span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="form-row">
            <div className="col-md-10">
              <div className="form-row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="control-label">
                      Start Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="time"
                      value={firstTime}
                      className="form-control"
                      onChange={(e) => setFirstTime(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="control-label">
                      End Time <span className="text-danger">*</span>
                    </label>
                    <input
                      type="time"
                      value={secondTime}
                      className="form-control"
                      onChange={(e) => setSecondTime(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="control-label">
                      Order Limit <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label className="control-label d-block">&nbsp;</label>
                <button type="button" className="btn btn-danger removebtn px-3">
                  <i className="fa fa-trash-alt text-white"></i>
                </button>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-dark btn-sm">
            <i className="fa fa-plus text-white"></i> Add more
          </button>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => handleClose()}>
            Close
          </button>
          <button className="btn btn-primary" onClick={() => handleClose()}>
            Submit
          </button>
        </Modal.Footer>
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

export default Timeslot;
