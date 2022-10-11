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
import { components } from "react-select";
import { useState } from "react";

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
const DriverHandbookList: React.FC = () => {
  // constructor() {
  //     super();
  //     this.state = {
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
    // this.setState({ showDeleteModal: false });
    setShowDeleteModal(false);
  };

  const handleShowDelete = () => {
    setShowDeleteModal(true);
  };

  const handleShowChangeStatus = () => {
    // this.setState({ showChangeStatusModal: true });
    setShowChangeStatusModal(true);
  };

  const handleCloseChangeStatus = () => {
    // this.setState({ showChangeStatusModal: false });
    setShowChangeStatusModal(false);
  };

  const handleRedirectToAddVendor = () => {
    setShow(true);
  };
  const handleClose = () => {
    // this.setState({ show: false });
    setShow(false);
  };

  // handleChange = (selected) => {
  //     this.setState({
  //         optionSelected: selected
  //     });
  // };

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
                  <h1>Driver Handbook</h1>
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
                    Add Driver Handbook
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
                          <th>Question</th>
                          <th>Answer</th>
                          {/* <th className="table-field-status">Status</th> */}
                          <th className="table-field-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(5)].map((elementInArray, index) => (
                          <React.Fragment>
                            <tr key={index}>
                              <td>
                                Can I change my <br /> phone number?
                              </td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloribus nesciunt ut officiis
                                accusantium quisquam <br />
                                minima praesentium, beatae fugit illo nobis
                                fugiat adipisci quia distinctio repellat culpa
                                saepe, optio aperiam est!
                                <br /> Example: Facere, id excepturi iusto
                                aliquid beatae delectus nemo enim, ad saepe nam
                                et.
                              </td>
                              {/* <td className=" table-field-status">
                                                                    <span class="badge badge-pill badge-success">Active</span>
                                                                </td> */}
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
                              <td>
                                Can I change my <br /> phone number?
                              </td>
                              <td>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Doloribus nesciunt ut officiis
                                accusantium quisquam <br />
                                minima praesentium, beatae fugit illo nobis
                                fugiat adipisci quia distinctio repellat culpa
                                saepe, optio aperiam est!
                                <br /> Example: Facere, id excepturi iusto
                                aliquid beatae delectus nemo enim, ad saepe nam
                                et.
                              </td>
                              {/* <td className=" table-field-status">
                                                                    <span class="badge badge-pill badge-success">Active</span>
                                                                </td> */}
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
                  {/* <Pagination /> */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal centered scrollable show={show} onHide={() => handleClose()}>
        <Modal.Header>
          <h4 className="modal-title">Add Question</h4>
          <button className="close" onClick={() => handleClose()}>
            <span aria-hidden="true" className="zmdi zmdi-close"></span>
          </button>
        </Modal.Header>
        <div className="modal-body">
          <div className="form-group">
            <label className="control-label">Question</label>
            <input type="text" className="form-control" value="" />
          </div>
          <div className="form-group">
            <label className="control-label">Answer</label>
            <textarea className="form-control" rows={4}></textarea>
          </div>
        </div>
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

export default DriverHandbookList;
