import React from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal } from "react-bootstrap";
import User from "../../assets/img/user.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ViewOrder: React.FC = () => {

  const [show, setShow] = useState<boolean>(false);
  const [tabValue, setTabValue] = useState<number | object>(1);
  const navigate = useNavigate();

  const handleClose = () => {
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
                  <h1>
                    Abdul Kareem
                    <span className="badge badge-warning badge-pill view-badge font-size-12">
                      Pending
                    </span>
                  </h1>
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
                <div className="card-header clearfix ">
                  <ul className="nav nav-tabs primary-tabs">
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(1)}
                        className={
                          tabValue === 1 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Basic Details
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(2)}
                        className={
                          tabValue === 2 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Upcoming Order
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        onClick={() => setTabValue(3)}
                        className={
                          tabValue === 3 ? "nav-link active show" : "nav-link"
                        }
                      >
                        Assign Timeslots
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    {tabValue === 1 ? (
                      <div className="tab-pane fadeIn active" id="tab-1">
                        <div className="card-body">
                          <div className="media">
                            <img
                              src={User}
                              className="align-self-start mr-5 ml-3 rounded-circle img-thumbnail o-cover"
                              alt="profile-image"
                              width="130"
                              height="130"
                            />
                            <div className="media-body">
                              <div className="row">
                                <div className="col-lg-12 col-xl-8">
                                  <h2 className="mt-0 mb-3 text-info">
                                    Abdul Kareem
                                  </h2>
                                  <ul className="list-unstyled text-left row mb-0">
                                  
                                    <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-1">
                                        Assign Timeslot
                                      </label>
                                      <br /> 12:00 PM to 3:00 PM
                                      <br /> 10:00 PM to 8:00 PM
                                    </li>
                                    <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-1">
                                        Email Id
                                      </label>
                                      <br /> abdulkareem@domain.com
                                    </li>
                                    <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-1">
                                        Vehicle details
                                      </label>
                                      <br /> Current Fuel : -26417.3
                                      <br />
                                      Fuel Capacity : 995
                                    </li>
                                    <li className="mb-3 col-md-6">
                                      <label className="text-muted mb-2">
                                        Assigned Geofence
                                      </label>
                                      <br />
                                      <span className="badge font-size-12 ml-0 mr-1 view-badge badge-light">
                                        Blue Nile
                                      </span>
                                      <span className="badge font-size-12 ml-0 mr-1 view-badge badge-light">
                                        Blue Nile
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 2 ? (
                      <div className="tab-pane fadeIn active" id="tab-2">
                        <div className="table-responsive">
                          <table className="table table-hover nowrap m-0">
                            <thead>
                              <tr>
                                <th>Order Id</th>
                                <th>Timeslot </th>
                                <th>Vehicle </th>

                                <th className="table-field-status">
                                  {" "}
                                  Status
                                 
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#00001 </td>
                                <td>10:00 am to 10:30 am</td>
                                <td>1</td>
                           

                                <td className="table-field-status">
                                  <span className="badge badge-pill badge-success">
                                    Accept
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>#00001 </td>
                                <td>10:00 am to 10:30 am</td>
                                <td>1</td>
                               
                                <td className="table-field-status">
                                  <span className="badge badge-pill badge-success">
                                    Accept
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                           
                          </table>
                        </div>
                      </div>
                    ) : null}
                    {tabValue === 3 ? (
                      <div className="tab-pane fadeIn active" id="tab-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-lg-12 col-xl-8">
                              <ul className="list-unstyled text-left row mb-0">
                                <li className="mb-3 col-md-6">
                                  <label className="text-muted mb-1">M25</label>
                                  <br /> 06:00 - 07:00 | 07:00 - 08:00 | 08:00 -
                                  09:00
                                </li>
                                <li className="mb-3 col-md-6">
                                  <label className="text-muted mb-1">M26</label>
                                  <br /> 06:00 - 07:00 | 07:00 - 08:00
                                </li>
                              </ul>
                            </div>
                          </div>
                         
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

export default ViewOrder;
