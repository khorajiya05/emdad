import React, { useState } from "react";
import makeAnimated from "react-select/animated";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
const AppSettingsList: React.FC = () => {

  const [tabValue, setTabValue] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

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
                  <h1>App Settings</h1>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <div className="card-header clearfix ">
                  <ul className="nav nav-tabs primary-tabs">
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(tabValue)}
                        className={
                          tabValue === 1 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Orders
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(2)}
                        className={
                          tabValue === 2 ? "nav-link active show" : "nav-link"
                        }
                      >
                        General
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    {tabValue === 1 ? (
                      <div className="tab-pane fadeIn active" id="tab-1">
                        <form className="form-horizontal">
                          <div className="card-body">
                            <div className="mt-3">
                              <div className="form-group row">
                                <label className="control-label text-md-right text-nowrap col-md-3">Cancellation Charge (User) <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">SDG</span>
                                    </div>
                                    <input type="text" className="form-control" value="5.00" />
                                  </div>
                                </div>
                                {/* <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb5" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div> */}
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Cancellation Charge (Driver) <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">SDG</span>
                                    </div>
                                    <input type="text" className="form-control" value="5.00" />
                                  </div>
                                </div>
                                {/* <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb6" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div> */}
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Min Order Qty (Fuel)<span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <input type="text" className="form-control" value="5.00" />
                                    <div className="input-group-append">
                                      <span className="input-group-text">kg</span>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb6" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div> */}
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Max Order Qty (Fuel)<span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <input type="text" className="form-control" value="5.00" />
                                    <div className="input-group-append">
                                      <span className="input-group-text">kg</span>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb6" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div> */}
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Min Order Qty (Gas)<span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <input type="text" className="form-control" value="5.00" />
                                    <div className="input-group-append">
                                      <span className="input-group-text">kg</span>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb6" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div> */}
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Max Order Qty (Gas)<span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <input type="text" className="form-control" value="5.00" />
                                    <div className="input-group-append">
                                      <span className="input-group-text">kg</span>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb6" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div> */}
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3"></label>
                                <div className="col-md-5">
                                  <label className="text-info"><strong>Note:</strong> If you put blank value in the system, we will consider default value=0.</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-light text-right">
                            <button type="button" className="btn btn-secondary clear-form mr-2">Cancel</button>
                            <button type="button" className="btn btn-primary">Update</button>
                          </div>
                        </form>
                      </div>
                    ) : null}
                    {tabValue === 2 ? (
                      <div className="tab-pane fadeIn active" id="tab-2">
                        <form className="form-horizontal">
                          <div className="card-body">
                            <div className="mt-3">
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3"> Fuel VAT <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <input type="text" className="form-control" value="5.00" />
                                    <div className="input-group-append">
                                      <span className="input-group-text">%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb2" type="checkbox"
                                  />
                                  <label className="tgl-btn m-0"></label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3"> Gas VAT <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <input type="text" className="form-control" value="5.00" />
                                    <div className="input-group-append">
                                      <span className="input-group-text">%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb2" type="checkbox"
                                  />
                                  <label className="tgl-btn m-0"></label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3"> Delivery VAT <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <input type="text" className="form-control" value="5.00" />
                                    <div className="input-group-append">
                                      <span className="input-group-text">%</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb2" type="checkbox"
                                  />
                                  <label className="tgl-btn m-0"></label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Service Charge <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">SDG</span>
                                    </div>
                                    <input type="text" className="form-control" value="5.00" />
                                  </div>
                                </div>
                                <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb2" type="checkbox"
                                  />
                                  <label className="tgl-btn m-0"></label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Service Fee <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">SDG</span>
                                    </div>
                                    <input type="text" className="form-control" value="5.00" />
                                  </div>
                                </div>
                                <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb4" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Delivery Price <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">SDG</span>
                                    </div>
                                    <input type="text" className="form-control" value="1.00" />
                                  </div>
                                </div>
                                <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb1" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div>
                              </div>
                              {/* <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Admin Commission <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <div className="input-group">
                                    <div className="input-group-prepend">
                                      <span className="input-group-text">SDG</span>
                                    </div>
                                    <input type="text" className="form-control" value="1.00" />
                                  </div>
                                </div>
                                <div className="col-md-3 align-self-center">
                                  <input className="tgl tgl-light tgl-primary" id="cb1" type="checkbox" />
                                  <label className="tgl-btn m-0"></label>
                                </div>
                              </div> */}
                              <div className="form-group row">
                                <label className="control-label text-md-right col-md-3">Per Page List Limit Page <span className="text-danger">*</span></label>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" value="10" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-light text-right">
                            <button type="button" className="btn btn-secondary clear-form mr-2">Cancel</button>
                            <button type="button" className="btn btn-primary">Update</button>
                          </div>
                        </form>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppSettingsList;
