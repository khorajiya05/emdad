import React from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal } from "react-bootstrap";
import NoImage from "../../assets/img/image.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm: React.FC = () => {

  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
  };

  const handleRedirectToOrder = () => {
    navigate("/user/list");
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
                  <h1>Add User</h1>
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
                              <img src={NoImage} alt="np pic" />
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
                              style={{ height: "150px", width: "150px" }}
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
                                  Full name
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

                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Password
                                </label>
                                <div className="input-group">
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="password-field"
                                    name="password"
                                    data-toggle="password"
                                  />
                                  <div className="input-group-append">
                                    <button
                                      className="btn btn-secondary px-2 button-with-textbox"
                                      type="button"
                                    >
                                      <i className="fa fa-eye mb-1 toggle-password"></i>
                                    </button>
                                  </div>
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
                      onClick={handleRedirectToOrder}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRedirectToOrder}
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
            title=" "
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

export default UserForm;
