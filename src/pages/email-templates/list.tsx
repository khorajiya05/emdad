import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Pagination from "../../components/pagination/pagination";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmailList: React.FC = () => {
  // constructor() {
  //     super();
  //     this.state = {
  //         showEmailTemplate: false,
  //     };
  //   }
  const [showemailTemplate, setshowEmailTemplate] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleShow = () => {
    // this.setState({ showEmailTemplate: true});
    setshowEmailTemplate(true);
  };

  const handleClose = () => {
    setshowEmailTemplate(false);
  };
  const handleRedirectToEditEmailTemplate = () => {
    navigate("/email-templates/form");
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
                  <h1>Email Templates</h1>
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
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover m-0">
                      <thead>
                        <tr>
                          <th>Email Subject</th>
                          {/* <th>Email Content</th> */}
                            
                          <th className="table-field-actions">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[...Array(10)].map((elementInArray, index) => (
                          <React.Fragment>
                            <tr key={index}>
                              <td>Password has been changed successfully </td>
                              {/* <td>
                                Hii, Your password has been changed
                                successfully. Team Fuelswipe
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
                                    <Dropdown.Item href="/email-templates/view">
                                      <i className="fa fa-info-circle fa-fw text-accent-custom"></i>{" "}
                                      View
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/email-templates/form">
                                      <i className="fa fa-edit fa-fw text-accent-custom"></i>{" "}
                                      Edit
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
                  <Pagination />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailList;
