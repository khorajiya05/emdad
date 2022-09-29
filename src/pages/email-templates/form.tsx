import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import CKEditor from "../../components/CKeditor/CKEditor";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";
const EmailTemplatesForm: React.FC = () => {
  const [pageData, setPageData] = useState("");
  const navigate = useNavigate();
  const handleRedirectToEmailTemplate = () => {
    navigate("/email-templates/list");
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
                  <h1>Edit Email Template</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToEmailTemplate()}
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
                    <div className="mt-3">
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Email Subject <span className="text-danger">*</span>
                        </label>
                        <div className="col-md-5">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Email Content <span className="text-danger">*</span>
                        </label>
                        <div className="col-md-7">
                          <CKEditor setPageData={setPageData} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-light text-right">
                    <button
                      type="button"
                      className="btn btn-secondary clear-form mr-2"
                      onClick={handleRedirectToEmailTemplate}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRedirectToEmailTemplate}
                    >
                      Submit
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

export default EmailTemplatesForm;
