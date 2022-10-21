import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Sidebar from "../../../components/sidebar/sidebar";
import Header from "../../../components/header/header"
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getDriverByIdActionThunk, getDriverTimeSlotsActionThunk } from "../../../store/drivers/drivers.actions.async";
import TRootState from "../../../store/root.types";
import OrderStatus from "../../../components/orderStatus/OrderStatus";
interface Props {
  children: Function
}

const ViewOrder: React.FC<Props> = ({ children }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const location = useLocation();

  const { driverId } = useParams();
  const { state } = location;
  const { driver, timeSlots } = useSelector((state: TRootState) => state?.drivers?.singleDriverData)

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleRedirectToDriver = () => {
    navigate("/drivers", { state: { page: state?.page } });
  };

  useEffect(() => {
    dispatch(getDriverByIdActionThunk(driverId || ""))
    dispatch(getDriverTimeSlotsActionThunk(driverId || ""))
  }, [dispatch, driverId])

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
                    {driver?.driver?.fullName}
                    <OrderStatus className="view-badge font-size-12" status={driver?.driver?.isActive ? "active" : "inactive"} />
                  </h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToDriver()}
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
                      <NavLink
                        to={`/drivers/view/${driverId}/basic-details`}
                        state={{ page: state?.page }}
                        className={(navData) => navData.isActive ? "nav-link show active" : "nav-link"}
                      >
                        Basic Details
                      </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                      <NavLink
                        to={`/drivers/view/${driverId}/upcoming-orders`}
                        state={{ page: state?.page }}
                        className={(navData) => navData.isActive ? "nav-link show active" : "nav-link"}
                      >
                        Upcoming Order
                      </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                      <NavLink
                        to={`/drivers/view/${driverId}/assign-timeslots`}
                        state={{ page: state?.page }}
                        className={(navData) => navData.isActive ? "nav-link show active" : "nav-link"}
                      >
                        Assign Timeslots
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">
                    {children(driver, timeSlots)}
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
            title="geolocaitons"
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
