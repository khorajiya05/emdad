import moment from "moment";
import React, { useEffect } from "react";

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Header from "../../components/header/header";
import { BarsLoader } from "../../components/loader/Loader";
import OrderStatus from "../../components/orderStatus/OrderStatus";
import Sidebar from "../../components/sidebar/sidebar";
import { getOrderByIdActionThunk } from "../../store/orders/orders.actions.async";
import TRootState from "../../store/root.types";
import { fixPrice } from "../../utils/helpers/priceFixed";
import { convertTo12 } from "../../utils/helpers/timeConvert";

const ViewOrder: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>()
  const navigate = useNavigate();
  const { orderId } = useParams();

  const { loading, orderById } = useSelector((state: TRootState) => state?.orders)

  const handleRedirectToOrder = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getOrderByIdActionThunk(orderId))
  }, [dispatch, orderId])
  return (
    <React.Fragment>
      {loading ? (<BarsLoader />) : (
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
                      #{Number(orderById?.id).toLocaleString('en-US', { minimumIntegerDigits: 5, useGrouping: false })}
                      <OrderStatus status={orderById?.status} className="view-badge font-size-12" />
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
                            {orderById?.orderType === 1 ? "Fuel" : orderById?.orderType === 2 ? "Gas" : ""}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">
                              Booking Date
                            </label>
                            <br /> {orderById?.createdAt ? moment(orderById?.createdAt).format("DD MMM, YYYY") : "-"}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">Location</label>
                            <br />
                            {`${orderById?.address}, ${orderById?.city}, ${orderById?.state}, ${orderById?.country}`}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">
                              Date & Timeslot
                            </label>
                            <br />
                            {moment(orderById?.scheduleDate).format("MM/DD/YYYY")}{orderById?.startTime ? convertTo12(orderById?.startTime) : null} -{orderById?.endTime ? convertTo12(orderById?.endTime) : null}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">Qty </label>
                            <br />
                            {orderById?.qty ? orderById?.qty : "0"} Ltr
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">Price</label>
                            <br />
                            SDG {orderById?.price ? fixPrice(orderById?.price) : "0.0"}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">User Name </label>
                            <br />
                            {orderById?.user?.fullName}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">
                              User Mobile
                            </label>
                            <br />
                            {orderById?.user?.countryCode} {orderById?.user?.mobileNumber ? orderById?.user?.mobileNumber : "-"}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">User Email</label>
                            <br /> {orderById?.user?.email ? orderById?.user?.email : "-"}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">Driver Name</label>
                            <br /> {orderById?.user?.fullName ? orderById?.user?.fullName : "-"}
                          </li>
                          <li className="mb-3 col-md-6">
                            <label className="text-muted mb-1">
                              Assign by Admin
                            </label>
                            <br />
                            {orderById?.createdBy}
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-5">
                        <div className="table-responsive">
                          <table className="table table-bordered table-hover m-0">
                            <tbody>
                              <tr>
                                <td>Fuel ({orderById?.qty} Ltr) </td>
                                <td className="text-right">SDG {orderById?.price ? fixPrice(orderById?.price) : "0.0"}</td>
                              </tr>
                              <tr>
                                <td>+ Fuel VAT {orderById?.vatPercentage ? orderById?.vatPercentage : "0"}%</td>
                                <td className="text-right">SDG {orderById?.vatPrice ? fixPrice(orderById?.vatPrice) : "0.0"}</td>
                              </tr>
                              <tr>
                                <td>+ Delivery Charges</td>
                                <td className="text-right">SDG {orderById?.deliveryPrice ? fixPrice(orderById?.deliveryPrice) : "0.0"}</td>
                              </tr>
                              <tr>
                                <td>+ Delivery VAT {orderById?.deliveryVatPercentage ? orderById?.deliveryVatPercentage : "0"}%</td>
                                <td className="text-right">SDG {orderById?.deliveryVatPrice ? fixPrice(orderById?.deliveryVatPrice) : "0.0"}</td>
                              </tr>
                              <tr>
                                <td>- Apply Promocode</td>
                                <td className="text-right">SDG {orderById?.promocodeDiscountAmount ? fixPrice(orderById?.promocodeDiscountAmount) : "0.0"}</td>
                              </tr>
                              <tr className="font-size-16">
                                <td className="font-weight-500">Grand Total</td>
                                <td className="font-weight-500 text-right">
                                  SDG {orderById?.grandTotal ? fixPrice(orderById?.grandTotal) : "0.0"}
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
      )
      }


    </React.Fragment>
  );
};

export default ViewOrder;
