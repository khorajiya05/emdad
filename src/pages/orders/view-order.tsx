import React from "react";

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";

const ViewOrder: React.FC = () => {

  const [tabValue, setTabValue] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClose = () => {
    //setState({ show: false});
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleRedirectToOrder = () => {
    navigate("/orders/pending-orders");
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
                    #00001{" "}
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
              <div className="card  clearfix">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12 col-xl-7">
                      <ul className="list-unstyled text-left row mb-0">
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">Order Type</label>
                          <br />
                          Fuel
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">
                            Booking Date
                          </label>
                          <br /> 05/04/2022
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">Location</label>
                          <br />
                          211 SW 16th St, For Lauderdale, Al-inqaz St, Khartoum
                          North, Sudan
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">
                            Date & Timeslot
                          </label>
                          <br />
                          30/04/2022 11:00 AM - 12:00 AM
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">Qty </label>
                          <br />
                          200 Ltr
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">Price</label>
                          <br />
                          SDG 50.00
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">User Name </label>
                          <br />
                          Abdul Kareem
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">
                            User Mobile{" "}
                          </label>
                          <br />
                          +249 98765 43210{" "}
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">User Email</label>
                          <br /> abdulkareem@domain.com
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">Driver Name</label>
                          <br /> Abdul Kareem
                        </li>
                        <li className="mb-3 col-md-6">
                          <label className="text-muted mb-1">
                            Assign by Admin{" "}
                          </label>
                          <br />
                          Abdul Kareem
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-12 col-xl-5">
                      <div className="table-responsive">
                        <table className="table table-bordered table-hover m-0">
                          <tbody>
                            <tr>
                              <td>Fuel (200 Ltr) </td>
                              <td className="text-right">SDG 500.00</td>
                            </tr>
                            <tr>
                              <td>+ Fuel VAT 5%</td>
                              <td className="text-right">SDG 15.00</td>
                            </tr>
                            <tr>
                              <td>+ Delivery Charges</td>
                              <td className="text-right">SDG 05.00</td>
                            </tr>
                            <tr>
                              <td>+ Delivery VAT 5%</td>
                              <td className="text-right">SDG 05.00</td>
                            </tr>
                            <tr>
                              <td>- Apply Promocode</td>
                              <td className="text-right">SDG 10.00</td>
                            </tr>
                            <tr className="font-size-16">
                              <td className="font-weight-500">Grand Total</td>
                              <td className="font-weight-500 text-right">
                                SDG 512.00
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
