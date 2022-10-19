import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";

import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getCmsPagesActionThunk } from "../../store/cms/cms.action.async";
import CmsList from "../../components/cms/CmsList";


const CMSPages: React.FC = () => {

  const location = useLocation();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const navigate = useNavigate();

  const { pathname } = location;

  const [tabValue, setTabValue] = useState(pathname || "/settings/cms/customers");

  useEffect(() => {
    dispatch(getCmsPagesActionThunk(tabValue === "/settings/cms/customers" ? "user" : "driver"));
  }, [dispatch, tabValue]);

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
                  <h1>CMS Pages</h1>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <div className="card-header clearfix ">
                  <Tabs
                    activeKey={tabValue}
                    onSelect={(pathname) => {
                      setTabValue(pathname || "");
                      pathname && navigate(pathname)
                    }}
                    transition={false}
                    id="noanim-tab-example"
                    className="primary-tabs"

                  >
                    <Tab eventKey="/settings/cms/customers" title="Customers">
                      <CmsList />
                    </Tab>
                    <Tab eventKey="/settings/cms/drivers" title="Drivers">
                      <CmsList />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CMSPages;
