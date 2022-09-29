import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Pagination from "../../components/pagination/pagination";
import Dropdown from "react-bootstrap/Dropdown";
import { DatePicker } from "../../components";
import { Modal, Tooltip } from "react-bootstrap";
import User from "../../assets/img/user.jpg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Select from "react-select";
import { useState } from "react";
// import SweetAlert from 'react-bootstrap-sweetalert';

const SelectMembershipStatus = [
  { value: "All", label: "All" },
  { value: "Free", label: "Free" },
  { value: "Paid", label: "Paid" },
];

const SelectCustomerStatus = [
  { value: "All", label: "All" },
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];
const VendorsList: React.FC = () => {
  // constructor() {
  // super();
  // state = {
  //     disableButton: false,
  //     disableButton2: false,
  //     sweetalert: false,
  //     sweetalert2: false
  // };
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [disableButton2, setDisableButton2] = useState<boolean>(false);
  const [sweetalert, setSweetalert] = useState<boolean>(false);
  const [sweetalert2, setSweetalert2] = useState<boolean>(false);
  const [selectedValue2, setSelectedValue2] = useState("All");
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShowMap = () => setShow(true);
  const navigate = useNavigate();

  const handleRedirectToOrder = () => {
    navigate("/orders/pending-orders");
  };

  const handleRedirectToAddVendor = () => {
    navigate("/vendors/form");
  };

  const handleCloseDelete = () => {
    setShowDeleteModal(false);
  };

  const handleShowDelete = () => {
    setShowDeleteModal(true);
  };

  const handleShowChangeStatus = () => {
    // setState({ sweetalert2: true });
    setSweetalert2(true);
  };
  const hideAlert = () => {
    setSweetalert(false);
  };
  const hideAlert2 = () => {
    setSweetalert2(false);
  };

  // const { sweetalert, sweetalert2 } = state;
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
                  <h1>Manage Vendors </h1>
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
                  <Dropdown>
                    <Dropdown.Toggle
                      className="btn btn-secondary"
                      id="dropdown-basic"
                    >
                      <i className="fa fa-filter fa-fw"></i> Filter
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <div className="p-3">
                        <b>Choose filters</b>
                      </div>
                      <form id="filter-form" className="px-3">
                        {/* <div className="form-group">
                                                        <label>Membership Status</label>
                                                        <Select
                                                            className="custom-select-dropdown"
                                                            classNamePrefix="react-seleact-dropdown"
                                                            value={state.selectedValue ? ((SelectMembershipStatus || []).find(prod => prod.value === state.selectedValue) || null) : null}
                                                            onChange={(val) => setState({ selectedValue: (val.value || '') })} placeholder="-- Select --"
                                                            options={SelectMembershipStatus || []}
                                                        />
                                                    </div> */}
                        <div className="form-group">
                          <label>Status</label>
                          <Select
                            className="custom-select-dropdown"
                            value={
                              selectedValue2
                                ? (SelectCustomerStatus || []).find(
                                    (prod) => prod.value === selectedValue2
                                  ) || null
                                : null
                            }
                            onChange={(val) =>
                              setSelectedValue2((val && val.value) || "")
                            }
                            placeholder="-- Select --"
                            options={SelectCustomerStatus || []}
                          />
                        </div>
                      </form>
                    </Dropdown.Menu>
                  </Dropdown>
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
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRedirectToAddVendor}
                  >
                    Add Vendor
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
                          {/* <th>Assigned Postalcode </th> */}
                          <th>Vendor</th>
                          <th>Mobile Number</th>
                          <th>Category</th>
                          <th className="text-center">Location</th>
                          {/* <th className="text-center">Membership Status</th> */}
                          <th className="table-field-status"> Status</th>
                          <th className="table-field-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(1)].map((elementInArray, index) => (
                          <React.Fragment>
                            <tr key={index}>
                              <td>
                                <div className="media">
                                  <img
                                    className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                    src={User}
                                  />
                                  <div className="media-body">
                                    <h6 className="mt-1 mb-0">
                                      {" "}
                                      Tristar Transport LLC
                                    </h6>
                                    <span className="text-muted">
                                      Al Khurtum, Sudan
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>+249 98765 43210</td>
                              <td>Transport</td>
                              <td className="text-center">
                                <i
                                  className="pointer icon dripicons-location"
                                  onClick={handleShowMap}
                                ></i>
                              </td>

                              <td className="table-field-status">
                                <span className="badge badge-pill badge-success">
                                  Active
                                </span>
                              </td>
                              {/* <td class="text-center">
                                                                <i class="icon dripicons-checkmark text-success font-size-20"></i>
                                                            </td>	 */}
                              <td className="table-field-actions">
                                <Dropdown className="btn-group">
                                  <Dropdown.Toggle
                                    id="dropdown-basic"
                                    className="btn btn-sm btn-icon-only"
                                  >
                                    <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu>
                                    <Dropdown.Item href="/vendors/view">
                                      <i className="fa fa-info-circle fa-fw text-accent-custom"></i>{" "}
                                      View
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      href="/vendors/form"
                                      onClick={handleShowChangeStatus}
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
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header>
          <h4 className="modal-title">Vendor Location</h4>
          <button className="close" onClick={handleClose}>
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

export default VendorsList;
