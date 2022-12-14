import React, { Component } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import Bahrs from "../../assets/img/bahrs.png";
import Suburban from "../../assets/img/suburban.png";
import User from "../../assets/img/user.jpg";
import { Accordion } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AssignTimeslot: React.FC = () => {
  // constructor() {
  //     super();
  //     state = {
  //         tabValue: 1,
  //         show: false,
  //     };
  // }
  const [tabValue, setTabValue] = useState<number>(1);
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
    navigate("/driver/list");
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
                  <h1>Assign Timeslots : Abdul Kareem</h1>
                </div>
                {/* <div className="m-l-10">
                                        <button className="btn btn-secondary" onClick={() => handleRedirectToOrder()}>
                                            <i className="fa fa-angle-left">&nbsp;</i> Back
                                        </button>
                                    </div> */}
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <div className="card-header clearfix ">
                  <ul className="nav nav-tabs primary-tabs">
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(1)}
                        className={
                          tabValue === 1 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Monday
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(2)}
                        className={
                          tabValue === 2 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Tuesday
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(3)}
                        className={
                          tabValue === 3 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Wednesday
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(4)}
                        className={
                          tabValue === 4 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Thursday
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(5)}
                        className={
                          tabValue === 5 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Friday
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(6)}
                        className={
                          tabValue === 6 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Saturday
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(7)}
                        className={
                          tabValue === 7 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Sunday
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    {tabValue === 1 ? (
                      <div className="tab-pane fadeIn active" id="tab-1">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xl-8">
                              <div className="time-slot mb-4">
                                <h4 className="font-weight-500 mb-3">M25</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="time-slot">
                                <h4 className="font-weight-500 mb-3">M30</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
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
                            Update
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 2 ? (
                      <div className="tab-pane fadeIn active" id="tab-2">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xl-8">
                              <div className="time-slot mb-4">
                                <h4 className="font-weight-500 mb-3">M25</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="time-slot">
                                <h4 className="font-weight-500 mb-3">M30</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
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
                            Update
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 3 ? (
                      <div className="tab-pane fadeIn active" id="tab-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xl-8">
                              <div className="time-slot mb-4">
                                <h4 className="font-weight-500 mb-3">M25</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="time-slot">
                                <h4 className="font-weight-500 mb-3">M30</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
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
                            Update
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 4 ? (
                      <div className="tab-pane fadeIn active" id="tab-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xl-8">
                              <div className="time-slot mb-4">
                                <h4 className="font-weight-500 mb-3">M25</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="time-slot">
                                <h4 className="font-weight-500 mb-3">M30</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
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
                            Update
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 5 ? (
                      <div className="tab-pane fadeIn active" id="tab-5">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xl-8">
                              <div className="time-slot mb-4">
                                <h4 className="font-weight-500 mb-3">M25</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="time-slot">
                                <h4 className="font-weight-500 mb-3">M30</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
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
                            Update
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 6 ? (
                      <div className="tab-pane fadeIn active" id="tab-6">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xl-8">
                              <div className="time-slot mb-4">
                                <h4 className="font-weight-500 mb-3">M25</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="time-slot">
                                <h4 className="font-weight-500 mb-3">M30</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
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
                            Update
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 7 ? (
                      <div className="tab-pane fadeIn active" id="tab-7">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xl-8">
                              <div className="time-slot mb-4">
                                <h4 className="font-weight-500 mb-3">M25</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="time-slot">
                                <h4 className="font-weight-500 mb-3">M30</h4>
                                <div className="row">
                                  <div className="col-md-12">
                                    <label className="control control-outline control-primary control--checkbox">
                                      Select All
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      06:00 - 07:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      07:00 - 08:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      08:00 - 09:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      09:00 - 10:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      10:00 - 11:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      11:00 - 12:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      12:00 - 01:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
                                  </div>
                                  <div className="col-md-3">
                                    <label className="control control-outline control-primary control--checkbox">
                                      01:00 - 02:00
                                      <input type="checkbox" />
                                      <div className="control__indicator"></div>
                                    </label>
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
                            Update
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
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

export default AssignTimeslot;
