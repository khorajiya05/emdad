import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import Sidebar from "../../components/sidebar/sidebar";

interface Prop {
  children: ReactNode;
}

const Report: React.FC<Prop> = ({ children }) => {
  return (
    <>
      <div id="app">
        <div className="d-block d-lg-none">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>Reports</h1>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <div className="card-header clearfix ">
                  <ul className="nav nav-tabs primary-tabs">
                    <li className="nav-item" role="presentation">
                      <NavLink
                        to={"/reports/user"}
                        className="nav-link"
                        // activeClassName="nav-link show active"
                      >
                        User Reports
                      </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                      <NavLink
                        to={"/reports/driver"}
                        className="nav-link"
                      // activeClassName="nav-link show active"
                      >
                        Driver Reports

                      </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                      <NavLink
                        to={"/reports/vehicle"}
                        className="nav-link"
                      // activeClassName="nav-link show active"
                      >
                        Vehicle Reports
                      </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                      <NavLink
                        to={"/reports/order"}
                        className="nav-link"
                      // activeClassName="nav-link show active"
                      >
                        Order Reports
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="card-body p-0">
                  <div className="tab-content">{children}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
