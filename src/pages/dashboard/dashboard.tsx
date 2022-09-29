import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { LiveClock } from "../../components/live-clock/LiveClock";

const Dashboard: React.FC = () => {
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
                  <h1>Dashboard</h1>
                </div>
                <h1 className="h5 font-size-18">
                  <LiveClock />{" "}
                </h1>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xl-3">
                  <div className="card card-body">
                    <h2 className="card-title m-b-5 font-weight-500 text-accent">
                      120
                    </h2>
                    <h6 className="text-muted m-t-10 font-weight-500">
                      Total No. of Users Registered
                    </h6>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-3">
                  <div className="card card-body">
                    <h2 className="card-title m-b-5 font-weight-500 text-warning">
                      10
                    </h2>
                    <h6 className="text-muted m-t-10 font-weight-500">
                      Total No. of Users Registered Today
                    </h6>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-3">
                  <div className="card card-body">
                    <h2 className="card-title m-b-5 font-weight-500 text-info">
                      80
                    </h2>
                    <h6 className="text-muted m-t-10 font-weight-500">
                      Total Orders Placed
                    </h6>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-3">
                  <div className="card card-body">
                    <h2 className="card-title m-b-5 font-weight-500 text-secondary">
                      5
                    </h2>
                    <h6 className="text-muted m-t-10 font-weight-500">
                      Total Orders Placed Today
                    </h6>
                  </div>
                </div>
                {/* <div className="col-md-12 col-lg-6 col-xl-3">
                  <div className="card card-body">
                    <h2 className="card-title m-b-5 font-weight-500 text-success">
                      10
                    </h2>
                    <h6 className="text-muted m-t-10 font-weight-500">
                      Total Revenue Earned Cards
                    </h6>
                  </div>
                </div> */}
                <div className="col-md-12 col-lg-6 col-xl-3">
                  <div className="card card-body">
                    <h2 className="card-title m-b-5 font-weight-500 text-success">
                      SDG 2000.00
                    </h2>
                    <h6 className="text-muted m-t-10 font-weight-500">
                      Total Net Earnings
                    </h6>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-3">
                  <div className="card card-body">
                    <h2 className="card-title m-b-5 font-weight-500 text-info">
                      SDG 300.00
                    </h2>
                    <h6 className="text-muted m-t-10 font-weight-500">
                      Today's Earnings
                    </h6>
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

export default Dashboard;
