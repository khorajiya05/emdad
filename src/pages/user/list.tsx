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
// import SweetAlert from 'react-bootstrap-sweetalert';
import { useState } from "react";
const SelectMembershipStatus = [
  { value: "All", label: "All" },
  { value: "Free", label: "Free" },
  { value: "Paid", label: "Paid" },
];

const SelectCustomerStatus = [
  { value: "All", label: "All" },
  { value: "Diesel", label: "Diesel" },
  { value: "Petrol", label: "Petrol" },
];
const UserList: React.FC = () => {
  // constructor() {
  //     super();
  //     state = {
  //         disableButton: false,
  //         disableButton2: false,
  //         sweetalert: false,
  //         sweetalert2: false
  //     };
  // }
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [disableButton2, setDisableButton2] = useState<boolean>(false);
  const [sweetalert, setSweetalert] = useState<boolean>(false);
  const [sweetalert2, setSweetalert2] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRedirectToOrder = () => {
    navigate("/orders/pending-orders");
  };
  const handleRedirectToAddVendor = () => {
    navigate("/user/form");
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
    // setState({ sweetalert: false });
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
                  <h1>Manage Users</h1>
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
                {/* <div className="m-l-10">
                                        <div className="input-group d-flex">
                                            <DatePicker />
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                    <i className="icon dripicons-calendar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
                {/* <div className="m-l-10">
                                        <Dropdown>
                                            <Dropdown.Toggle className="btn btn-secondary" id="dropdown-basic">
                                                <i class="fa fa-filter fa-fw"></i> Filter
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <div className="p-3"><b>Choose filters</b></div>
                                                <form id="filter-form" className="px-3">
                                                    
                                                    <div className="form-group">
                                                        <label>Customer Status</label>
                                                        <Select
                                                            className="custom-select-dropdown"
                                                            value={state.selectedValue2 ? ((SelectCustomerStatus || []).find(prod => prod.value === state.selectedValue2) || null) : null}
                                                            onChange={(val) => setState({ selectedValue2: (val.value || '') })} placeholder="-- Select --"
                                                            options={SelectCustomerStatus || []}
                                                        />
                                                    </div>
                                                </form>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="m-l-10">
                                        <button type="button" className="btn btn-dark">
                                            Submit
                                        </button>
                                    </div>
                                    <div className="m-l-10">
                                        <button type="button" className="btn btn-secondary">
                                            Reset
                                        </button>
                                    </div> */}
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRedirectToAddVendor}
                  >
                    Add User
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
                          <th className="w-250 sorting">
                            <span>Full Name</span>
                          </th>
                          <th>Email Id</th>
                          <th className="text-center">Total Orders</th>
                          {/* <th>Vehicle (Fuel Type)	</th> */}
                          {/* <th className="text-center">Membership Status</th> */}
                          <th className="table-field-status"> Status</th>
                          <th className="table-field-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(5)].map((elementInArray, index) => (
                          <React.Fragment>
                            <tr key={index}>
                              <td>
                                <div className="media">
                                  <img
                                    className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                    src={User}
                                  />
                                  <div className="media-body">
                                    <h6 className="mt-1 mb-0">Abdul Kareem</h6>
                                    <span className="text-muted">
                                      +249 98765 43210
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>abdulkareem@domain.com</td>
                              {/* <td className="text-center">
                                                                <Link to="/orders/all-orders">
                                                                    <OverlayTrigger
                                                                        placement="top"
                                                                        overlay={
                                                                            <Tooltip id={`tooltip01`}>
                                                                            Fuel Order - 20
                                                                            </Tooltip>
                                                                        }
                                                                    >
                                                                        <span className="badge badge-light">20</span>
                                                                    </OverlayTrigger>
                                                                </Link>
                                                            </td> */}
                              <td className="text-center">1</td>
                              {/* <td><span class="badge badge-light">Diesel</span></td> */}
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
                                    <Dropdown.Item href="/user/view">
                                      <i className="fa fa-info-circle fa-fw text-accent-custom"></i>{" "}
                                      View
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      href="/user/form"
                                      onClick={handleShowChangeStatus}
                                    >
                                      <i className="fa fa-edit fa-fw text-accent-custom"></i>{" "}
                                      Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      href="#"
                                      onClick={handleShowDelete}
                                    >
                                      <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>{" "}
                                      Delete
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                            </tr>
                            <tr key={index}>
                              <td>
                                <div className="media">
                                  <img
                                    className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                    src={User}
                                  />
                                  <div className="media-body">
                                    <h6 className="mt-1 mb-0">Abdul Kareem</h6>
                                    <span className="text-muted">
                                      +249 98765 43210
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>abdulkareem@domain.com</td>

                              <td className="text-center">1</td>
                              <td className="table-field-status">
                                <span className="badge badge-pill badge-danger">
                                  Inactive
                                </span>{" "}
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
                                    <Dropdown.Item href="/user/view">
                                      <i className="fa fa-info-circle fa-fw text-accent-custom"></i>{" "}
                                      View
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      href="/user/form"
                                      onClick={handleShowChangeStatus}
                                    >
                                      <i className="fa fa-times fa-fw text-accent-custom"></i>{" "}
                                      Edit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                      href="#"
                                      onClick={handleShowDelete}
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

export default UserList;
