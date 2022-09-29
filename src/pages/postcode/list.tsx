import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Pagination from "../../components/pagination/pagination";
import Dropdown from "react-bootstrap/Dropdown";
import { DatePicker } from "../../components";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { MultiSelectCheckbox, SingleDatePickerComp } from "../../components";
import { useState } from "react";
import { components } from "react-select";
const multiSelectOptions = [
  { value: "John Smith", label: "John Smith" },
  { value: "Peter Williams", label: "Peter Williams" },
  { value: "John Smith", label: "John Smith" },
  { value: "Peter Williams", label: "Peter Williams" },
  { value: "John Smith", label: "John Smith" },
  { value: "Peter Williams", label: "Peter Williams" },
  { value: "John Smith", label: "John Smith" },
  { value: "Peter Williams", label: "Peter Williams" },
];
const SelectZipcode = [
  { value: "All", label: "All" },
  { value: "33602", label: "33602" },
  { value: "33603", label: "33603" },
];

const SelectStatus = [
  { value: "All", label: "All" },
  { value: "Diesel", label: "Diesel" },
  { value: "Petrol", label: "Petrol" },
];
const Option = (props: any) => {
  return (
    <div>
      <components.Option {...props}>
        <div className="d-flex align-items-center">
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label className="m-0 ml-2">{props.label}</label>
        </div>
      </components.Option>
    </div>
  );
};
const animatedComponents = makeAnimated();
const PostcodeList: React.FC = () => {
  // constructor() {
  //     super();
  //     state = {
  //         show: false,
  //         showDeleteModal: false,
  //         showChangeStatusModal: false,
  //     };
  // }

  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [showChangeStatusModal, setShowChangeStatusModal] =
    useState<boolean>(false);

  const handleCloseDelete = () => {
    // setState({ showDeleteModal: false });
    setShowDeleteModal(false);
  };

  const handleShowDelete = () => {
    setShowDeleteModal(true);
  };

  const handleShowChangeStatus = () => {
    // setState({ showChangeStatusModal: true });
    setShowChangeStatusModal(true);
  };

  const handleCloseChangeStatus = () => {
    setShowChangeStatusModal(false);
  };

  const handleRedirectToAddVendor = () => {
    // setState({ show: true });
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  //    const handleChange = (selected) => {
  //         setState({
  //             optionSelected: selected
  //         });
  //     };

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
                  <h1>Postcodes</h1>
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
                    onClick={handleRedirectToAddVendor}
                  >
                    Add Postcode
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
                          <th>Delivery Postcodes</th>
                          <th className="table-field-status">Status</th>
                          <th className="table-field-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(5)].map((elementInArray, index) => (
                          <React.Fragment>
                            <tr key={index}>
                              <td>M25</td>
                              <td className=" table-field-status">
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
                                    <Dropdown.Item
                                      href="#"
                                      onClick={handleRedirectToAddVendor}
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
                              <td>M30</td>
                              <td className=" table-field-status">
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
                                    <Dropdown.Item
                                      href="#"
                                      onClick={handleRedirectToAddVendor}
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
      <Modal centered scrollable show={show} onHide={() => handleClose()}>
        <Modal.Header>
          <h4 className="modal-title">Add Postcode</h4>
          <button className="close" onClick={() => handleClose()}>
            <span aria-hidden="true" className="zmdi zmdi-close"></span>
          </button>
        </Modal.Header>
        <Modal.Body>
          {/* <div className="form-group">
                            <label className="control-label">Date <span className="text-danger">*</span></label>
                            <div className="input-group inner-page-date d-flex">
                                <SingleDatePickerComp />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="icon dripicons-calendar"></i>
                                    </span>
                                </div>
                            </div>
                        </div> */}
          {/* <div className="form-group">
                            <label className="control-label">Vendor <span className="text-danger">*</span></label>
                            <div
                                data-toggle="popover"
                                data-trigger="focus"
                            >
                                <MultiSelectCheckbox
                                className="custom-select-dropdown"
                                options={multiSelectOptions}
                                isMulti
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                components={{
                                    Option,
                                    animatedComponents
                                }}
                                onChange={handleChange}
                                allowSelectAll={true}
                                value={state.optionSelected}
                                />
                            </div>
                        </div> */}
          <div className="form-group">
            <label className="control-label">Postcode </label>
            <input type="text" className="form-control" placeholder="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => handleClose()}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={() => handleClose()}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
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

export default PostcodeList;
