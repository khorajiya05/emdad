import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import NoImage from "../../assets/img/image.png";
import { useNavigate } from "react-router-dom";

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirectToProfile = () => {
    navigate("/profile");
  };

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
                  <h1>Edit Profile</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToProfile()}
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
                          <div className="form-group">
                            <label>Full name</label>
                            <input
                              type="text"
                              className="form-control"
                              value="Abdul Kareem"
                            />
                          </div>
                          <div className="form-row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">
                                  Mobile Number
                                </label>
                                <div className="input-group">
                                  <div className="input-group-prepend">
                                    <div className="input-group-text">+249</div>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder=""
                                    value="98765 43210"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label">Email</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  value="abdulkareem@domain.com"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="control-label">Address</label>
                            <textarea
                              className="form-control"
                              value="211 SW 16th St, For Lauderdale, Al-inqaz St, Khartoum North, Sudan"
                              placeholder=""
                            >
                              {" "}
                            </textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-light text-right">
                    <button
                      type="button"
                      className="btn btn-secondary clear-form mr-2"
                      onClick={handleRedirectToProfile}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRedirectToProfile}
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
    </React.Fragment>
  );
};

export default EditProfile;
