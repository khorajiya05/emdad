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
import { NavDropdown } from "react-bootstrap";
// import Accordion from 'react-bootstrap/Accordion';
import { Accordion } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const FaqList: React.FC = () => {
  // constructor() {
  //     super();
  //     this.state = {
  //         show: false,
  //         showDeleteModal: false,
  //         showChangeStatusModal: false,
  //     };
  // }

  const [showDeleteModal, setshowDeleteModal] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showChangeStatusModal, setShowChangeStatusModal] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleCloseDelete = () => {
    // this.setState({ showDeleteModal: false });
    setshowDeleteModal(false);
  };

  const handleShowDelete = () => {
    setshowDeleteModal(true);
  };

  const handleShowChangeStatus = () => {
    // this.setState({ showChangeStatusModal: true });
    setShowChangeStatusModal(true);
  };

  const handleCloseChangeStatus = () => {
    setShowChangeStatusModal(false);
  };

  const handleRedirectToAddVendor = () => {
    // this.setState({ show: true });
    navigate("/faq/form");
  };
  const handleClose = () => {
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
                  <h1>FAQs</h1>
                </div>
                {/* <div className="m-l-10">
                                        <div className="input-group w-250">
                                            <input type="text" className="form-control" placeholder="Search" title="Search" />
                                            <div className="input-group-append">
                                                <button type="button" className="input-group-text pointer"><span className="fa fa-search"></span></button>
                                            </div>
                                        </div>
                                    </div> */}

                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRedirectToAddVendor}
                  >
                    Add New
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              {/* <div className="card"> */}
              {/* <div className="card-body p-0"> */}

              <div className="accordion" id="accordion-faq">
                <div className="card">
                  <div className="card-header" id="headingFaqOne">
                    <button
                      className="btn btn-link "
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFaqOne"
                      aria-expanded="true"
                      aria-controls="collapseFaqOne"
                    >
                      Q1: Is the source code for the generator available?
                    </button>
                    <ul className="actions top-right">
                      <li className="m-0">
                        <a href="edit-faq.php">
                          <i className="zmdi zmdi-edit zmdi-hc-fw text-secondary"></i>
                        </a>
                      </li>
                      <li className="m-0">
                        <a href="javascript:;">
                          <i className="zmdi zmdi-delete zmdi-hc-fw text-secondary"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="collapseFaqOne"
                    className="collapse show"
                    aria-labelledby="headingFaqOne"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      Not currently, no. Maybe we'll make it available as open
                      source some day.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFaqTwo">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFaqTwo"
                      aria-expanded="false"
                      aria-controls="collapseFaqTwo"
                    >
                      Q2: Can I download the generator software and run it on my
                      own computer?
                    </button>
                    <ul className="actions top-right">
                      <li className="m-0">
                        <a href="edit-faq.php">
                          <i className="zmdi zmdi-edit zmdi-hc-fw text-secondary"></i>
                        </a>
                      </li>
                      <li className="m-0">
                        <a href="javascript:;">
                          <i className="zmdi zmdi-delete zmdi-hc-fw text-secondary"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="collapseFaqTwo"
                    className="collapse"
                    aria-labelledby="headingFaqTwo"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      No. It's not just the software you'd need, but also three
                      radios (or one, at any rate), which must be carefully
                      adjusted to pick up atmospheric noise at the right volume.
                      It's not completely trivial to set up.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFaqThree">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFaqThree"
                      aria-expanded="false"
                      aria-controls="collapseFaqThree"
                    >
                      Q3: Could someone affect the numbers by broadcasting a
                      radio signal?
                    </button>
                    <ul className="actions top-right">
                      <li className="m-0">
                        <a href="edit-faq.php">
                          <i className="zmdi zmdi-edit zmdi-hc-fw text-secondary"></i>
                        </a>
                      </li>
                      <li className="m-0">
                        <a href="javascript:;">
                          <i className="zmdi zmdi-delete zmdi-hc-fw text-secondary"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="collapseFaqThree"
                    className="collapse"
                    aria-labelledby="headingFaqThree"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      Uses radio receivers to pick up atmospheric noise, which
                      is then used to generate random numbers. The radios are
                      tuned between stations. A possible attack on the generator
                      is therefore to broadcast on the frequencies that the
                      RANDOM.ORG radios use in order to affect the generator.
                      However, radio frequency attacks of this type would be
                      difficult for a variety of reasons.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFaqFour">
                    <button
                      className="btn btn-link collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFaqFour"
                      aria-expanded="false"
                      aria-controls="collapseFaqFour"
                    >
                      Q4: How can you be sure the numbers are really random?
                    </button>
                    <ul className="actions top-right">
                      <li className="m-0">
                        <a href="edit-faq.php">
                          <i className="zmdi zmdi-edit zmdi-hc-fw text-secondary"></i>
                        </a>
                      </li>
                      <li className="m-0">
                        <a href="javascript:;">
                          <i className="zmdi zmdi-delete zmdi-hc-fw text-secondary"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="collapseFaqFour"
                    className="collapse"
                    aria-labelledby="headingFaqFour"
                    data-parent="#accordion-faq"
                  >
                    <div className="card-body">
                      Oddly enough, it is theoretically impossible to prove that
                      a random number generator is really random. Rather, you
                      analyse an increasing amount of numbers produced by a
                      given generator, and depending on the results, your
                      confidence in the generator increases (or decreases, as
                      the case may be).
                    </div>
                  </div>
                </div>
              </div>

              {/* <Accordion>
                                                <Accordion.Item eventKey="0">
                                                    <div className='card-header'>
                                                        <Accordion.Header>  Q1: Is the source code for the generator available? </Accordion.Header>
                                                    </div>
                                                    <ul className="actions top-right">
                                                        <li className="m-0"><a href="/faq/faq-form"><i className="zmdi zmdi-edit zmdi-hc-fw text-secondary"></i></a></li>
                                                        <li className="m-0"><a href="javascript:;"><i className="zmdi zmdi-delete zmdi-hc-fw text-secondary"></i></a></li>
                                                    </ul>
                                                    <Accordion.Body>
                                                        <div className="card-body">
                                                            Not currently, no. Maybe we'll make it available as open source some day.
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                        </Accordion> */}
              {/* <Pagination /> */}
              {/* </div> */}
              {/* </div> */}
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
                                onChange={this.handleChange}
                                allowSelectAll={true}
                                value={this.state.optionSelected}
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

export default FaqList;
