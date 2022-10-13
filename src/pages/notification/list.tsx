import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";
import { getNotificationsActionThunk } from "../../store/notifications/notifications.actions.async";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import TRootState from "../../store/root.types";

interface Props {
  children?(page: number, setPage: Function, fetchNotifications: Function): React.ReactNode
}

const NoificationList: React.FC<Props> = ({ children }) => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const location = useLocation();

  const { state } = location;
  const itemsPerPage = useSelector((state: TRootState) => state?.pagination?.perPageItems)

  const [page, setPage] = useState<number>(Number(state?.page) || 1);
  const [searchNotifications, setSearchNotifications] = useState("");

  const navigate = useNavigate();

  const redirectToSendNewNotification = () => {
    navigate("/settings/notification/new");
  };

  const fetchNotifications = (search: string, pageNum?: number) => {
    dispatch(
      getNotificationsActionThunk(
        pageNum || page,
        itemsPerPage,
        location?.pathname === "/settings/notifications/received" ? false : true,
        search,
      )
    );
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
                  <h1>Notifications</h1>
                </div>
                <div className="m-l-10">
                  <div className="input-group w-250">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      title="Search"
                      value={searchNotifications}
                      onChange={(e) => setSearchNotifications(e.target?.value)}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="input-group-text pointer"
                        onClick={() => fetchNotifications(searchNotifications)}
                      >
                        <span className="fa fa-search"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSearchNotifications("");
                      fetchNotifications("");
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div className="m-l-10">
                  <button type="button" className="btn btn-primary" onClick={redirectToSendNewNotification}>
                    Send New Notification
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card card-tabs clearfix">
                <>
                  <div className="card-header clearfix ">
                    <ul className="nav nav-tabs primary-tabs align-items-center">
                      <li className="nav-item" role="presentation">
                        <NavLink to="/settings/notifications/received"
                          className={({ isActive }) => (isActive ? "nav-link active show" : "nav-link")}
                        >
                          Notification Recieved
                        </NavLink>
                      </li>
                      <li className="nav-item" role="presentation">
                        <NavLink to="/settings/notifications/sent"
                          className={({ isActive }) => (isActive ? "nav-link active show" : "nav-link")}
                        >
                          Notification Sent
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  {children && children(page, setPage, fetchNotifications)}
                </>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NoificationList;
