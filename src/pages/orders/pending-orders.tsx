import React from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import { DatePicker } from "../../components";
import Pagination from "../../components/pagination/pagination";
import User from "../../assets/img/user.jpg";
const SelectZipcode = [
  { value: "All", label: "All" },
  { value: "33602", label: "33602" },
  { value: "33603", label: "33603" },
];

const SelectStatus = [
  { value: "All", label: "All" },
  { value: "Pending", label: "Pending" },
  { value: "Live", label: "Live" },
];

const SelectOrdertype = [
  { value: "All", label: "All" },
  { value: "Fuek", label: "Fuel" },
  { value: "Gas", label: "Gas" },
];

const PendingOrders: React.FC = () => {
  // constructor() {
  //     super();
  //     state = {
  //         show: false,
  //         showDeleteModal: false,
  //         showChangeStatusModal: false,
  //     };
  //   }
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showUnAssignOrderModal, setShowUnAssignOrderModal] =
    useState<boolean>(false);
  const [showAssignOrderModal, setShowAssignOrderModal] =
    useState<boolean>(false);
  const [showChangeStatusModal, setShowChangeStatusModal] =
    useState<boolean>(false);
  const [selectedValue2, setSelectedValue2] = useState("All");

  const [tabValue, setTabValue] = useState<number>(1);

  const handleCloseDelete = () => {
    // setState({ showDeleteModal: false});
    setShowDeleteModal(false);
  };

  const handleShowDelete = () => {
    setShowDeleteModal(true);
  };

  const handleAssignOrder = () => {
    setShowAssignOrderModal(false);
  };

  const handleShowAssignOrder = () => {
    setShowAssignOrderModal(true);
  };

  const handleUnAssignOrder = () => {
    setShowUnAssignOrderModal(false);
  };

  const handleShowUnAssignOrder = () => {
    setShowUnAssignOrderModal(true);
  };

  const handleShowChangeStatus = () => {
    // setState({ showChangeStatusModal: true});
    setShowChangeStatusModal(true);
  };

  const handleCloseChangeStatus = () => {
    setShowChangeStatusModal(false);
  };

  //   handleRedirectToAddVendor = () => {
  //     props.history.push("/vendors/add");
  //   };

  return (
    <React.Fragment>
      <div id="app">
        <div className="d-block d-lg-none">{/* <Sidebar /> */}</div>
        <div className="content-wrapper">
          <Header />
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>Pending Orders</h1>
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
                {/* <div className="m-l-10">
                                    <Select
                                        className="custom-select-dropdown w-170"
                                        value={state.selectedValue ? ((SelectStatus || []).find(prod => prod.value === state.selectedValue) || null) : null}
                                        onChange={(val) => setState({ selectedValue: (val.value || '') })} placeholder="-- Select Status --"
                                        options={SelectStatus || []}
                                    />
                                </div> */}
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
                                                    <label>Zipcode</label>
                                                    <Select
                                                        className="custom-select-dropdown"
                                                        value={state.selectedValue ? ((SelectZipcode || []).find(prod => prod.value === state.selectedValue) || null) : null}
                                                        onChange={(val) => setState({ selectedValue: (val.value || '') })} placeholder="-- Select --"
                                                        options={SelectZipcode || []}
                                                    />
                                                </div> */}
                        {/* <div className="form-group">
                          <label>Order Type</label>
                          <Select
                            className="custom-select-dropdown"
                            value={
                              selectedValue2
                                ? (SelectOrdertype || []).find(
                                  (prod) => prod.value === selectedValue2
                                ) || null
                                : null
                            }
                            onChange={(val) =>
                              setSelectedValue2((val && val.value) || "")
                            }
                            placeholder="-- Select --"
                            options={SelectOrdertype || []}
                          />
                        </div> */}
                        <div className="form-group">
                          <label>Status</label>
                          <Select
                            className="custom-select-dropdown"
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
                {/* <div className="m-l-10">
                                    <button type="button" className="btn btn-primary" onClick={handleRedirectToAddVendor}>
                                        Add New Vendor
                                    </button>
                                </div> */}
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <div className="card-header clearfix ">
                  <ul className="nav nav-tabs primary-tabs align-items-center">
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(tabValue)}
                        className={
                          tabValue === 1 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Fuel
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(2)}
                        className={
                          tabValue === 2 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Gas
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    {tabValue === 1 ? (
                      <div className="tab-pane fadeIn active" id="tab-1">
                        <div className="table-responsive">
                          <table className="table table-hover nowrap m-0">
                            <thead>
                              <tr>
                                <th className="sorting">
                                  <span>Order Id</span>
                                </th>
                                <th>Date & Timeslot</th>
                                <th>Location</th>
                                {/* <th>User Name</th> */}
                                <th>Qty (Ltr)</th>
                                <th>Price (SDG)</th>
                                <th>Assigned by Admin</th>
                                <th>Driver Name</th>
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
                                    <td>#00001 </td>
                                    <td>30/04/2022 11:00 AM - 12:00 AM</td>
                                    {/* <td>$2500</td>
                                                        <td>$4500</td>
                                                        <td className="text-center">
                                                            <span className="badge badge-pill badge-success">Active</span>
                                                        </td> */}

                                    <td>
                                      <p className="mb-0">
                                        211 SW 16th St, For Lauderdale, Khartoum
                                        North, Sudan
                                      </p>
                                    </td>
                                    <td>1000</td>
                                    <td>50.00</td>
                                    <td>Abdul Kareem</td>
                                    <td>Abdul Kareem</td>
                                    {/* <td className="text-center">
                                                            <span className="badge badge-pill badge-warning">Pending</span>
                                                        </td> */}
                                    <td className="text-center">
                                      <span className="badge badge-pill badge-warning">
                                        Pending
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
                                          <Dropdown.Item href="/orders/view">
                                            <i className="fa fa-info-circle fa-fw text-accent-custom"></i>
                                            View
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            href="#"
                                            onClick={() =>
                                              handleShowAssignOrder()
                                            }
                                          >
                                            <i className="fa fa-check fa-fw text-accent-custom"></i>
                                            Assign Order
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            href="#"
                                            onClick={() => handleShowDelete()}
                                          >
                                            <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
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
                                    <td>#00001 </td>
                                    <td>30/04/2022 11:00 AM - 12:00 AM</td>

                                    {/* <td>$2500</td>
                                                        <td>$4500</td>
                                                        <td className="text-center">
                                                            <span className="badge badge-pill badge-success">Active</span>
                                                        </td> */}

                                    <td>
                                      <p className="mb-0">
                                        211 SW 16th St, For Lauderdale, Khartoum
                                        North, Sudan
                                      </p>
                                    </td>
                                    <td>1000</td>
                                    <td>50.00</td>

                                    <td>Abdul Kareem</td>
                                    <td>Abdul Kareem</td>
                                    {/* <td className="text-center">
                                                            <span className="badge badge-pill badge-warning">Pending</span>
                                                        </td> */}
                                    <td className="text-center">
                                      <span className="badge badge-pill badge-success">
                                        Live
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
                                          <Dropdown.Item href="/orders/view">
                                            <i className="fa fa-info-circle fa-fw text-accent-custom"></i>
                                            View
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            href="#"
                                            onClick={() =>
                                              handleShowUnAssignOrder()
                                            }
                                          >
                                            <i className="fa dripicons-cross fa-fw text-accent-custom"></i>
                                            Unassign Order
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            href="#"
                                            onClick={() => handleShowDelete()}
                                          >
                                            <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
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
                      </div>
                    ) : null}

                    {tabValue === 2 ? (
                      <div className="tab-pane fadeIn active" id="tab-1">
                        <div className="table-responsive">
                          <table className="table table-hover nowrap m-0">
                            <thead>
                              <tr>
                                <th className="sorting">
                                  <span>Order Id</span>
                                </th>
                                <th>Date & Timeslot</th>
                                <th>Location</th>
                                {/* <th>User Name</th> */}
                                <th>Qty (Ltr)</th>
                                <th>Price (SDG)</th>
                                <th>Assigned by Admin</th>
                                <th>Driver Name</th>
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
                                    <td>#00001 </td>
                                    <td>30/04/2022 11:00 AM - 12:00 AM</td>
                                    {/* <td>$2500</td>
                                                        <td>$4500</td>
                                                        <td className="text-center">
                                                            <span className="badge badge-pill badge-success">Active</span>
                                                        </td> */}

                                    <td>
                                      <p className="mb-0">
                                        211 SW 16th St, For Lauderdale, Khartoum
                                        North, Sudan
                                      </p>
                                    </td>

                                    <td>1000</td>
                                    <td>50.00</td>

                                    <td>Abdul Kareem</td>
                                    <td>Abdul Kareem</td>
                                    {/* <td className="text-center">
                                                            <span className="badge badge-pill badge-warning">Pending</span>
                                                        </td> */}
                                    <td className="text-center">
                                      <span className="badge badge-pill badge-warning">
                                        Pending
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
                                          <Dropdown.Item href="/orders/view">
                                            <i className="fa fa-info-circle fa-fw text-accent-custom"></i>
                                            View
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            href="#"
                                            onClick={() =>
                                              handleShowAssignOrder()
                                            }
                                          >
                                            <i className="fa fa-check fa-fw text-accent-custom"></i>
                                            Assign Order
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            href="#"
                                            onClick={() => handleShowDelete()}
                                          >
                                            <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
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
                                    <td>#00001 </td>
                                    <td>30/04/2022 11:00 AM - 12:00 AM</td>

                                    {/* <td>$2500</td>
                                                        <td>$4500</td>
                                                        <td className="text-center">
                                                            <span className="badge badge-pill badge-success">Active</span>
                                                        </td> */}

                                    <td>
                                      <p className="mb-0">
                                        211 SW 16th St, For Lauderdale, Khartoum
                                        North, Sudan
                                      </p>
                                    </td>
                                    <td>1000</td>
                                    <td>50.00</td>

                                    <td>Abdul Kareem</td>
                                    <td>Abdul Kareem</td>
                                    {/* <td className="text-center">
                                                            <span className="badge badge-pill badge-warning">Pending</span>
                                                        </td> */}
                                    <td className="text-center">
                                      <span className="badge badge-pill badge-success">
                                        Live
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
                                          <Dropdown.Item href="/orders/view">
                                            <i className="fa fa-info-circle fa-fw text-accent-custom"></i>
                                            View
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            href="#"
                                            onClick={() =>
                                              handleShowUnAssignOrder()
                                            }
                                          >
                                            <i className="fa dripicons-cross fa-fw text-accent-custom"></i>
                                            Unassign Order
                                          </Dropdown.Item>
                                          <Dropdown.Item
                                            href="#"
                                            onClick={() => handleShowDelete()}
                                          >
                                            <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
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
                      </div>
                    ) : null}
                  </div>
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal
        centered
        show={showChangeStatusModal}
        onHide={() => handleCloseChangeStatus()}
      >
        <Modal.Header className="justify-content-center border-0">
          <h3 className="modal-title">Change Status</h3>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>
            <i className="far fa-check-circle fa-3x text-success"></i>
          </span>
          <p className="font-size-18 m-0 mt-2">
            Are you sure want to change status?
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <button
            className="btn btn-dark min-w-100"
            onClick={() => handleCloseChangeStatus()}
          >
            No
          </button>
          <button
            className="btn btn-danger min-w-100"
            onClick={() => handleCloseChangeStatus()}
          >
            Yes
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
      <Modal
        centered
        show={showUnAssignOrderModal}
        onHide={() => handleUnAssignOrder()}
      >
        <Modal.Header className="justify-content-center border-0">
          <h3 className="modal-title">Unassign Order</h3>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>
            <i className="far fa-times-circle fa-3x text-danger"></i>
          </span>
          <p className="font-size-18 m-0 mt-2">
            Are you sure want to Unassign Order?
          </p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <button
            className="btn btn-dark min-w-100"
            onClick={() => handleUnAssignOrder()}
          >
            No
          </button>
          <button
            className="btn btn-danger min-w-100"
            onClick={() => handleUnAssignOrder()}
          >
            Yes
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        centered
        scrollable
        show={showAssignOrderModal}
        onHide={() => handleAssignOrder()}
      >
        <Modal.Header>
          <h3 className="modal-title">Assign Order - Drivers</h3>
        </Modal.Header>
        <Modal.Body className="p-0 assign-order-radio">
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-1"
            />
            <div className="control__indicator"></div>
          </label>
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-2"
            />
            <div className="control__indicator"></div>
          </label>
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-3"
            />
            <div className="control__indicator"></div>
          </label>
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-4"
            />
            <div className="control__indicator"></div>
          </label>
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-5"
            />
            <div className="control__indicator"></div>
          </label>
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-6"
            />
            <div className="control__indicator"></div>
          </label>
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-6"
            />
            <div className="control__indicator"></div>
          </label>
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-6"
            />
            <div className="control__indicator"></div>
          </label>
          <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
            <div className="media flex-fill">
              <img
                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                src={User}
              />
              <div className="media-body d-flex align-items-end">
                <div className="mr-auto">
                  <h6 className="mt-1 mb-0"> John Smith</h6>
                  <span>+249 98765 43210</span>
                </div>
                <span>MK11 7HX</span>
              </div>
            </div>
            <input
              type="radio"
              name="assign-order-radio"
              id="assign-order-radio-6"
            />
            <div className="control__indicator"></div>
          </label>
        </Modal.Body>
        <Modal.Footer className="justify-content-end">
          <button
            className="btn btn-secondary min-w-100"
            onClick={() => handleAssignOrder()}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary min-w-100"
            onClick={() => handleAssignOrder()}
          >
            Assign
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default PendingOrders;
