import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  DatePicker,
  MultiSelectCheckbox,
  SingleDatePickerComp,
} from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PromocodeForm: React.FC = () => {
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

  const handleClose = () => {
    // setState({ show: false });
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleRedirectToOrder = () => {
    navigate("/promocode/list");
  };

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
                  <h1>Add Promo Code</h1>
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
                <form className="form-horizontal">
                  <div className="card-body">
                    <div className="mt-3">
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Promocode
                        </label>
                        <div className="col-md-5">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>

                      {/* <div className="form-group row">
											<label className="control-label text-md-right col-md-3">Expiry Date</label>
											<div className="col-md-5">
												
                                                <Datepicker />
											</div>
										</div> */}
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Date{" "}
                        </label>
                        <div className="col-md-5">
                          <div className="input-group inner-page-date d-flex">
                            <SingleDatePickerComp />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="icon dripicons-calendar"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Promo Value
                        </label>
                        <div className="col-md-5">
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <div className="input-group-append">
                              <span className="input-group-text">
                                <i className="fa fa-percent"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Apply this promotion to first order only?
                        </label>
                        <div className="col-md-5">
                          <div className="mt-2">
                            <input
                              className="tgl tgl-light tgl-primary"
                              id="cb1"
                              type="checkbox"
                            />
                            <label className="tgl-btn" htmlFor="cb1"></label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Description
                        </label>
                        <div className="col-md-5">
                          <textarea
                            className="form-control"
                            placeholder=""
                          ></textarea>
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
                    <button type="submit" className="btn btn-primary">
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

export default PromocodeForm;
