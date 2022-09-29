import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Logo from "../../assets/img/logo.png";
import AppStore from "../../assets/img/app-store.png";
import PlayStore from "../../assets/img/play-store.png";
import { useNavigate } from "react-router-dom";

const EmailTemplatesView: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirectToEmailTempalte = () => {
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
                  <h1>View Email Template</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToEmailTempalte()}
                  >
                    <i className="fa fa-angle-left">&nbsp;</i> Back
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body">
                  <body
                    style={{
                      margin: "0px",
                      padding: "0px",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <table
                      width="100%"
                      style={{ border: "0" }}
                      cellSpacing="0"
                      cellPadding="0"
                      bgcolor="#f9f9f9"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <div>
                              <table
                                width="620"
                                style={{ margin: "30px auto" }}
                                cellSpacing="0"
                                cellPadding="0"
                                bgcolor="#fff"
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ padding: "25px 30px" }}>
                                      <table
                                        width="100%"
                                        cellSpacing="0"
                                        cellPadding="0"
                                        style={{
                                          background: "#fff",
                                          border: "0",
                                          fontFamily:
                                            "Verdana, Arial,Helvetica,sans-serif",
                                          lineHeight: "1",
                                        }}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              valign="middle"
                                              align="center"
                                              style={{ padding: "0px" }}
                                            >
                                              <img
                                                src={Logo}
                                                alt="logo"
                                                style={{ height: "110px" }}
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ paddingTop: "25px" }}>
                                      <table
                                        width="100%"
                                        cellSpacing="0"
                                        cellPadding="0"
                                        style={{
                                          fontSize: "14px",
                                          color: "#263b5f",
                                          border: "0",
                                          fontFamily:
                                            "Verdana, Arial,Helvetica,sans-serif",
                                          lineHeight: "1.5",
                                        }}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style={{
                                                padding: "0px 30px 10px 30px",
                                              }}
                                              colSpan={3}
                                            >
                                              <span
                                                style={{
                                                  fontSize: "18px",
                                                  display: "block",
                                                }}
                                              >
                                                Hi Abdul Kareem,
                                              </span>
                                              <p>Welcome to Emdad. </p>
                                              <p
                                                style={{ marginBottom: "0px" }}
                                              >
                                                Now generate an order and view
                                                activities easily using Emdad
                                                Application. Administrator has
                                                invited you to use the feature
                                                of Emdad.{" "}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                padding: "10px 30px 20px 30px",
                                              }}
                                              colSpan={3}
                                            >
                                              <p
                                                style={{
                                                  borderTop:
                                                    "1px solid #ecf4fd",
                                                  margin: "0px",
                                                }}
                                              ></p>
                                              <p
                                                style={{
                                                  marginBottom: "0px",
                                                  paddingTop: "15px",
                                                }}
                                              >
                                                Sign in with below credentials
                                                to access the application :{" "}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                padding: "0px 30px",
                                                textAlign: "center",
                                              }}
                                              width="50%"
                                            >
                                              <label
                                                style={{
                                                  marginBottom: "5px",
                                                  display: "block",
                                                  color: "#839bb3",
                                                }}
                                              >
                                                Username
                                              </label>
                                              <span
                                                style={{
                                                  fontSize: "20px",
                                                  display: "block",
                                                  color: "#4d5a68",
                                                }}
                                              >
                                                Abdul Kareem
                                              </span>
                                            </td>
                                            <td
                                              style={{
                                                borderLeft: "2px solid #ecf4fd",
                                              }}
                                            ></td>
                                            <td
                                              style={{
                                                padding: "0px 30px",
                                                textAlign: "center",
                                              }}
                                              width="50%"
                                            >
                                              <label
                                                style={{
                                                  marginBottom: "5px",
                                                  display: "block",
                                                  color: "#839bb3",
                                                }}
                                              >
                                                Password
                                              </label>
                                              <span
                                                style={{
                                                  fontSize: "20px",
                                                  display: "block",
                                                  color: "#4d5a68",
                                                }}
                                              >
                                                123456
                                              </span>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{ padding: "20px 30px" }}
                                              colSpan={3}
                                            >
                                              <p
                                                style={{
                                                  borderBottom:
                                                    "1px solid #ecf4fd",
                                                  margin: "0px",
                                                }}
                                              ></p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table
                                        width="100%"
                                        cellSpacing="0"
                                        cellPadding="0"
                                        style={{
                                          fontSize: "14px",
                                          border: "0",
                                          color: "#263b5f",
                                          fontFamily:
                                            "Verdana, Arial,Helvetica,sans-serif",
                                          lineHeight: "1.5",
                                        }}
                                      >
                                        <tbody>
                                          <tr>
                                            <td style={{ padding: "0px 30px" }}>
                                              <p style={{ marginTop: "0px" }}>
                                                {" "}
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's.
                                              </p>
                                              <a
                                                href="javascript:;"
                                                target="_blank"
                                              >
                                                {" "}
                                                <img
                                                  src={AppStore}
                                                  alt="App Store"
                                                />
                                              </a>
                                              <a
                                                href="javascript:;"
                                                target="_blank"
                                              >
                                                {" "}
                                                <img
                                                  src={PlayStore}
                                                  alt="Play Store"
                                                />
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{ padding: "20px 30px" }}
                                            >
                                              If you have any questions or
                                              concerns, we're here to help.
                                              Contact us at <br />
                                              <a
                                                href="mailto:admin@theopenpan.com"
                                                style={{ color: "#656363" }}
                                              >
                                                abdulkareem@domain.com
                                              </a>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td style={{ padding: "0px 30px" }}>
                                              Thank you, <br /> Emdad
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              style={{
                                                fontSize: "12px",
                                                fontStyle: "italic",
                                                color: "#6c757d",
                                                padding: "20px 30px",
                                                borderRadius: "0px 0px 4px 4px",
                                              }}
                                            >
                                              <strong>Note:</strong> The content
                                              of this email is intended only for
                                              use by the individual or entity to
                                              whom it is addressed.
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table
                                        width="100%"
                                        cellSpacing="0"
                                        cellPadding="0"
                                        style={{
                                          fontSize: "14px",
                                          border: "0",
                                          color: "#263b5f",
                                          fontFamily:
                                            "Verdana, Arial,Helvetica,sans-serif",
                                          lineHeight: "1.5",
                                        }}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style={{
                                                padding: "0px 30px",
                                                verticalAlign: "top",
                                                background: "#f9f9f9",
                                                color: "#898f95",
                                                textAlign: "center",
                                              }}
                                            >
                                              <p
                                                style={{
                                                  fontSize: "14px",
                                                  paddingTop: "15px",
                                                  marginBottom: "8px",
                                                  marginTop: "0px",
                                                  borderTop:
                                                    "1px solid #ecf4fd",
                                                }}
                                              >
                                                &copy; Copyright 2021-22 by
                                                Emdad. All Rights Reserved.
                                              </p>
                                              <small>
                                                Please do not reply to this
                                                message; it was sent from an
                                                unmonitored email address.
                                              </small>{" "}
                                              <br />
                                              <small>
                                                This message is a service email
                                                related to your use of Emdad.
                                              </small>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </body>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailTemplatesView;
