import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DatePicker,
  MultiSelectCheckbox,
  SingleDatePickerComp,
} from "../../components";
import makeAnimated from "react-select/animated";
import { components } from "react-select";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const multiSelectOptions = [
  { value: "Diesel", label: "Diesel" },
  { value: "Petrol", label: "Petrol" },
  // { value: 'John Smith', label: 'John Smith' },
  // { value: 'Peter Williams', label: 'Peter Williams' },
  // { value: 'John Smith', label: 'John Smith' },
  // { value: 'Peter Williams', label: 'Peter Williams' },
  // { value: 'John Smith', label: 'John Smith' },
  // { value: 'Peter Williams', label: 'Peter Williams' },
];
const multiZipOptions = [
  { value: "Diesel", label: "Diesel" },
  { value: "Petrol", label: "Petrol" },
];

const SelectAssignVehicle = [
  // { value: "All", label: "All" },
  { value: "MK11 7HX", label: "MK11 7HX" },
  { value: "MK11 7HX", label: "MK11 7HX" },
];
const SelectFuelType = [
  // { value: "All", label: "All" },
  { value: "Petrol", label: "Petrol" },
  { value: "Diesel", label: "Diesel" },
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

const Form: React.FC = () => {
  // constructor() {
  //     super();
  //     state = {
  //         tabValue: 1,
  //         show: false,
  //     };
  // }

  const [tabValue, setTabValue] = useState<number | object>(1);
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();
  const [selectedValue2, setSelectedValue2] = useState("All");
  const [selectedValue3, setSelectedValue3] = useState("All");

  const handleClose = () => {
    // setState({ show: false });
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleRedirectToOrder = () => {
    navigate("/vehicle/list");
  };
  //    const handleChange = (selected) => {
  //         setState({
  //             optionSelected: selected
  //         });
  //     };

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
                  <h1>Add Vehicle</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToOrder()}
                  >
                    <i className="fa fa-angle-left">&nbsp;</i> Back
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <form>
                  <div className="card-body">
                    <div className="clearfix">
                      <div className="row">
                        <div className="col-xl-8">
                          <div className="form-row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Number Plate
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value=""
                                />
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">Make</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value=""
                                />
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">Model</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">Engine</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Vehicle Fuel Type
                                </label>
                                <Select
                                  className="custom-select-dropdown"
                                  value={
                                    selectedValue3
                                      ? (SelectFuelType || []).find(
                                          (prod) =>
                                            prod.value === selectedValue3
                                        ) || null
                                      : null
                                  }
                                  onChange={(val) =>
                                    setSelectedValue3((val && val.value) || "")
                                  }
                                  placeholder="-- Select --"
                                  options={SelectFuelType || []}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Assign Vehicle
                                </label>
                                {/* use this first select */}
                                <Select
                                  className="custom-select-dropdown"
                                  value={
                                    selectedValue2
                                      ? (SelectAssignVehicle || []).find(
                                          (prod) =>
                                            prod.value === selectedValue2
                                        ) || null
                                      : null
                                  }
                                  onChange={(val) =>
                                    setSelectedValue2((val && val.value) || "")
                                  }
                                  placeholder="-- Select --"
                                  options={SelectAssignVehicle || []}
                                />

                                {/* <Select
                                                                                        values={(state.selectedValues2|| []).map((values) => (multiZipOptions2 || []).find(prod => prod.value === values)).filter(prod => prod && prod.value && prod.label).map(prod => ({ label: prod.label, value: prod.value }))}
                                                                                        closeMenuOnSelect={false}
                                                                                        options={multiZipOptions2 || []}
                                                                                        onChange={(value) => setState({ selectedValues2: value.map(val => val.value) })}
                                                                                        isMulti
                                                                                        /> */}
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">Year</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Fuel Capacity
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Current Fuel in Tank
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    value=""
                                  />
                                  <span className="input-group-append">
                                    <span className="input-group-text">
                                      Ltrs
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Fuel Limit To Notify
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    value=""
                                  />
                                  <span className="input-group-append">
                                    <span className="input-group-text">
                                      Ltrs
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-light text-right">
                    <button
                      type="button"
                      className="btn btn-secondary clear-form mr-2"
                      onClick={() => handleRedirectToOrder()}
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
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
    </React.Fragment>
  );
};

export default Form;
