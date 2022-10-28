import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getAppSettingsDataActionThunk } from "../../store/appSettings/appSettings.actions.async";
import AppSettingOrders from "../../components/app-settings/app-setting-orders";
import AppSettingGeneral from "../../components/app-settings/app-setting-general";

const AppSettingsList: React.FC = () => {

  const location = useLocation();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const navigate = useNavigate();

  const { pathname } = location;

  const [tabValue, setTabValue] = useState(pathname || "/settings/app-settings/orders");

  useEffect(() => {
    dispatch(getAppSettingsDataActionThunk());
  }, [dispatch]);

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
                  <h1>App Settings</h1>
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
                    <Tab eventKey="/settings/app-settings/orders" title="Orders">
                      <AppSettingOrders />
                    </Tab>
                    <Tab eventKey="/settings/app-settings/general" title="General">
                      <AppSettingGeneral />
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

export default AppSettingsList;
