import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    {
      to: "/profile",
      icon: "icon dripicons-user",
      title: "My Profile"
    },
    {
      to: "/geofences/list",
      icon: "icons dripicons-location",
      title: "Geofences"
    },
    {
      to: "/vendors-category/list",
      icon: "icons dripicons-view-apps",
      title: "Vendors Category"
    },
    {
      to: "/referalcode",
      icon: "icons dripicons-tag",
      title: "Referral Code"
    },
    {
      to: "/timeslot",
      icon: "icons dripicons-clock",
      title: "Time Slots"
    },
    {
      to: "/roles-permissions/list",
      icon: "icons dripicons-menu",
      title: "Roles & Permissions"
    },
    {
      to: "/sub-admins/list",
      icon: "icons dripicons-user-group",
      title: "Sub Admins"
    },
    {
      to: "/notification/list",
      icon: "icons dripicons-bell",
      title: "Notifications"
    },
    {
      to: "/app-settings",
      icon: "icons dripicons-gear",
      title: "App Settings"
    },
    {
      to: "/email-templates/list",
      icon: "icons dripicons-mail",
      title: "Email Templates"
    },
    {
      to: "/cms/list",
      icon: "icons dripicons-document",
      title: "CMS Pages"
    },
    {
      to: "/driverhandbook",
      icon: "icons dripicons-calendar",
      title: "Driver Handbook"
    },
    {
      to: "/faq/list",
      icon: "icons dripicons-user-id",
      title: "FAQs"
    }
  ]
  return (
    <React.Fragment>
      <aside className="sidebar sidebar-left">
        <div className="sidebar-content">
          <Nav className="main-menu" activeKey={location?.pathname}>
            <ul className="nav metismenu">
              {
                navItems?.map((item) => (
                  <Nav.Link as="li" eventKey={item?.to} key={item?.to} >
                    <Link to={item?.to}>
                      <i className={item?.icon}></i>
                      <span>{item?.title}</span>
                    </Link>
                  </Nav.Link>
                ))
              }
            </ul>
          </Nav>
        </div>
      </aside>
    </React.Fragment >
  );
};
export default Sidebar;
