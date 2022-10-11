import React, { Component } from "react";

import Header from "../../components/header/header";
// import { Sidebar } from '../../components/sidebar/sidebar';
import Pagination from "../../components/pagination/pagination";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectZipcode = [
  { value: "All", label: "All" },
  { value: "33602", label: "33602" },
  { value: "33603", label: "33603" },
];

const SelectStatus = [
  { value: "All", label: "All" },
  { value: "Active", label: "Active" },
  { value: "Inactice", label: "Inactice" },
];

const PromocodeList: React.FC = () => {
  // constructor() {
  //     super();
  //    state = {
  //         show: false,
  //         showDeleteModal: false,
  //         showChangeStatusModal: false,
  //     };
  // }
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showChangeStatusModal, setShowChangeStatusModal] =
    useState<boolean>(false);
  const [selectedValue2, setSelectedValue2] = useState("All");
  const navigate = useNavigate();
  const handleCloseDelete = () => {
    //setState({ showDeleteModal: false });
    setShowDeleteModal(false);
  };

  const handleShowDelete = () => {
    setShowDeleteModal(true);
  };

  const handleShowChangeStatus = () => {
    //setState({ showChangeStatusModal: true });
    setShowChangeStatusModal(true);
  };

  const handleCloseChangeStatus = () => {
    //setState({ showChangeStatusModal: false });
    setShowChangeStatusModal(false);
  };

  const handleRedirectToAddVendor = () => {
    navigate("/promocode/form");
  };

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
                  <h1>Manage Promo Code</h1>
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
                                    <Select
                                        className="custom-select-dropdown w-170"
                                        value={selectedValue ? ((SelectStatus || []).find(prod => prod.value ===state.selectedValue) || null) : null}
                                        onChange={(val) =>setState({ selectedValue: (val.value || '') })} placeholder="-- Select Status --"
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
                                                        value={selectedValue ? ((SelectZipcode || []).find(prod => prod.value ===state.selectedValue) || null) : null}
                                                        onChange={(val) =>setState({ selectedValue: (val.value || '') })} placeholder="-- Select --"
                                                        options={SelectZipcode || []}
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
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRedirectToAddVendor}
                  >
                    Add Promocode
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
                            <span>Promo Code</span>
                          </th>
                          <th>Promo Value (%)</th>
                          <th>Expiry Date</th>
                          {/* <th>Timeslot</th> */}
                          {/* <th>Monthly Settlement</th>
                                                    <th>Payment Settlement</th>
                                                    <th className="text-center">Product Status</th> */}
                          <th>Description</th>
                          <th>First Order Only?</th>
                          <th className="table-field-status">Status</th>
                          <th className="table-field-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(5)].map(() => (
                          <React.Fragment>
                            <tr>
                              {/* <div className="media">
                                                                <img className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover" src={User} />
                                                                <div className="media-body">
                                                                    <h6 className="mt-1 mb-0">John Smith</h6>
                                                                    <span className="text-muted">+1 987 654 3210</span>
                                                                </div>
                                                            </div> */}
                              <td>FUEL 123</td>
                              <td>20</td>
                              <td>-</td>
                              <td>Darren's Genesis Meeting</td>
                              <td>Yes</td>
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
                                    {/* <Dropdown.Item href="/vehicle/view">
                                                                                <i className="fa fa-info-circle fa-fw text-accent-custom"></i> View
                                                                            </Dropdown.Item> */}
                                    <Dropdown.Item href="/promocode/form">
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
                            <tr>
                              {/* <td>
                                                             <div className="media">
                                                                 <img className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover" src={User} /> 
                                                                <div className="media-body">
                                                                    <h6 className="mt-1 mb-0">John Smith</h6>
                                                                    <span className="text-muted">+1 987 654 3210</span>
                                                                </div>
                                                            </div> 
                                                        </td> */}
                              <td>FUEL 123</td>
                              <td>20</td>
                              <td>-</td>
                              <td>Darren's Genesis Meeting</td>
                              <td>Yes</td>
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
                                    {/* <Dropdown.Item href="/vehicle/view">
                                                                                <i className="fa fa-info-circle fa-fw text-accent-custom"></i> View
                                                                            </Dropdown.Item> */}
                                    <Dropdown.Item href="/promocode/form">
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
    </React.Fragment>
  );
};

export default PromocodeList;
