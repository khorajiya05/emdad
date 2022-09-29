import React, { Component } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import NoImage from "../../assets/img/image.png";
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

const SelectStatus = [
  { value: "All", label: "All" },
  { value: "SSD 123 YU", label: "SSD 123 YU" },
  { value: "Live", label: "Live" },
];


const CategoryStatus = [
  { value: "Transport", label: "Transport" },
  { value: "Wheel Service", label: "Wheel Service" },
];


const multiSelectOptions = [
  { value: "DF 2383", label: "DF 2383" },
  { value: "BBF 9345", label: "BBF 9345" },
  // { value: 'John Smith', label: 'John Smith' },
  // { value: 'Peter Williams', label: 'Peter Williams' },
  // { value: 'John Smith', label: 'John Smith' },
  // { value: 'Peter Williams', label: 'Peter Williams' },
  // { value: 'John Smith', label: 'John Smith' },
  // { value: 'Peter Williams', label: 'Peter Williams' },
];
const multiZipOptions = [
  { value: "DF 2383", label: "DF 2383" },
  { value: "BBF 9345", label: "BBF 9345" },
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

const VendorsForm: React.FC = () => {
  // constructor() {
  //     super();
  //     state = {
  //         tabValue: 1,
  //         show: false,
  //     };
  // }
  const [tabValue, setTabValue] = useState<number | object>(1);
  const [show, setShow] = useState<boolean>(false);
  const [selectedValue2, setSelectedValue2] = useState("All");
  const navigate = useNavigate();

  const handleClose = () => {
    // setState({ show: false });
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleRedirectToVendors = () => {
    navigate("/vendors/list");
  };

  // handleChange = (selected) => {
  //     setState({
  //         optionSelected: selected
  //     });
  // };

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
                  <h1>Add Vendor</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToVendors()}
                  >
                    <i className="fa fa-angle-left">&nbsp;</i> Back
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <form className="form-horizontal">
                  <div className="card-body">
                    <div className="d-flex flex-wrap">
                      <div className="left-form-content">
                        <div
                          className="fileinput text-center fileinput-new"
                          data-provides="fileinput"
                        >
                          <div className="btn-file mt-3">
                            <div
                              className="thumbnail fileinput-new uploaded-user-image rounded-circle"
                              style={{ height: "150px", width: "150px" }}
                            >
                              <img src={NoImage} alt="Image" />
                            </div>
                            <div className="clearfix"></div>
                            <button className="fileinput-new btn btn-primary2 btn-sm btn-file mt-3">
                              {" "}
                              Browse Image{" "}
                            </button>
                            <input type="hidden" value="" name="..." />
                            <input type="hidden" value="" name="Users[image]" />
                            <input
                              type="file"
                              file-model="myFile"
                              name=""
                              accept=""
                            />
                            <div
                              className="fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle"
                              style={{ height: "150", width: "150" }}
                            ></div>
                          </div>
                          <div className="text-center">
                            <button
                              className="btn btn-link btn-sm fileinput-exists mt-3"
                              data-dismiss="fileinput"
                            >
                              {" "}
                              Remove{" "}
                            </button>
                          </div>
                          <div className="clearfix mt-3">
                            <p className="upload-img-label text-muted">
                              *Recommended Size:
                              <br />
                              Minimum 250 * 250
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row flex">
                        <div className="col-xl-8">
                          <div className="form-row" data-select2-id="12">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Vendor Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Location
                                </label>
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Mobile Number
                                </label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">
                                      +249
                                    </div>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value=""
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Category
                                </label>
                                <Select
                                  className="custom-select-dropdown min-w-200"
                                  value={
                                    selectedValue2
                                      ? (CategoryStatus || []).find(
                                        (prod) => prod.value === selectedValue2
                                      ) || null
                                      : null
                                  }
                                  onChange={(val) =>
                                    setSelectedValue2((val && val.value) || "")
                                  }
                                  placeholder="-- Select --"
                                  options={CategoryStatus || []}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">Status <span className="text-danger">*</span></label>

                                <div className="input-group">
                                  <label className="control control-outline d-inline-block control-primary control--radio mb-0 mr-3"> Active
                                    <input type="radio" value="radio1" checked name="radio-1" id="status1" />
                                    <div className="control__indicator"></div>
                                  </label>
                                  <label className="control control-outline d-inline-block control-primary control--radio mb-0"> Inactive
                                    <input type="radio" value="radio11" name="radio-1" id="status2" />
                                    <div className="control__indicator"></div>
                                  </label>
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
                      onClick={handleRedirectToVendors}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRedirectToVendors}
                    >
                      Save
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

export default VendorsForm;