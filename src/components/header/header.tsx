/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Logo from "../../assets/img/white-logo.png";
import User from "../../assets/img/user.jpg";
import { useState } from "react";

const Header: React.FC = () => {


  const [sidebarToggle, setSidebarToggle] = useState<boolean>(false);
  const [mobileToggle, setMobileToggle] = useState<boolean>(false);
  const location = useLocation();

  const handleSidebarToggleChange = () => {
    const temp = !sidebarToggle;
    setSidebarToggle(!sidebarToggle);
    if (temp) {
      document!.querySelector("body")!.classList.add("aside-left-open");
    } else {
      document!.querySelector("body")!.classList.remove("aside-left-open");
    }
  };

  const handleMobileToggleChange = () => {
    const temp = !mobileToggle;
    setMobileToggle(!mobileToggle);
    if (temp) {
      document!.querySelector("body")!.classList.add("mobile-topbar-toggle");
    } else {
      document!.querySelector("body")!.classList.remove("mobile-topbar-toggle");
    }
  };

  const isActive = (item: typeof navItems[0]) =>
    (item.routes || []).some((route) => item?.activeRoute ? location.pathname.startsWith(route) : location.pathname === route)

  const navItems = [
    {
      to: "/dashboard",
      title: "Dashboard",
      routes: ["/", "/dashboard"],
    },
    {
      title: "Orders",
      routes: [
        "/orders/pending-orders/fuel",
        "/orders/pending-orders/gas",
        "/orders/orders-history/fuel",
        "/orders/orders-history/gas",
      ],
      items: [
        {
          to: "/orders/pending-orders/fuel",
          title: "Pending Orders",
          routes: ["/orders/pending-orders/fuel", "/orders/pending-orders/gas"],
        },
        {
          to: "/orders/orders-history/fuel",
          title: "Orders History",
          routes: ["/orders/orders-history/fuel", "/orders/orders-history/gas"],
        },
      ],
    },
    {
      to: "/vendors/list",
      title: "Vendors",
      routes: ["/vendors/list"],
      activeRoute: true,
    },
    {
      to: "/driver/list",
      title: "Drivers",
      routes: ["/driver/list"],
      activeRoute: true,
    },
    {
      to: "/user/list",
      title: "Users",
      routes: ["/user/list"],
    },
    {
      to: "/vehicle/list",
      title: "Vehicles",
      routes: ["/vehicle/list", "/vehicle/view", "/vehicle/form"],
    },
    {
      to: "/gas/list",
      title: "Set Gas Pricing",
      routes: ["/gas/list"],
    },
    {
      to: "/fuel/list",
      title: "Set Fuel Pricing",
      routes: ["/fuel/list"],
    },
    {
      to: "/reports/user",
      title: "Reports",
      routes: [
        "/reports/user",
        "/reports/driver",
        "/reports/vehicle",
        "/reports/order",
      ],
    },
    // {
    //   to: "/earnings/list",
    //   title: "Earnings",
    //   routes: [
    //     "/earnings/list",
    //   ],
    // },
  ];

  return (
    <React.Fragment>
      <nav className="top-toolbar navbar navbar-mobile navbar-tablet">
        <ul className="navbar-nav nav-left">
          <li className="nav-item">
            <a href="#" onClick={() => handleSidebarToggleChange()}>
              <i className="icon dripicons-align-left"></i>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav nav-left site-logo">
          <li>
            <div className="logo-custom">
              <img src={Logo} alt="Logo" />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav nav-right">
          <li className="nav-item">
            <a onClick={() => handleMobileToggleChange()}>
              <i className="icon dripicons-dots-3 rotate-90"></i>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="top-toolbar navbar navbar-desktop flex-nowrap">
        <ul className="site-logo d-none d-lg-inline-block">
          <li>
            <Link to="/dashboard">
              <div className="logo-custom">
                <img src={Logo} alt="Logo" />
              </div>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav m-lg-auto">
          {navItems.map((item, index) => (
            <li className="nav-item nav-text order-dropdown" key={index}>
              {item.items ? (
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={item.title}
                  menuVariant="dark"
                  key={index}
                  className={isActive(item) ? "active-header" : ""}
                >
                  {item.items.map((innerItem, index) => (
                    <NavDropdown.Item
                      as={NavLink}
                      to={innerItem.to}
                      key={index}
                      className={
                        isActive(innerItem) ? "active-sidebar-link" : ""
                      }
                    >
                      <span>{innerItem.title}</span>
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <NavLink
                  to={item.to}
                  className={isActive(item) ? "active-header" : ""}
                >
                  <span>{item.title}</span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item tio-icon-menu">
            <NavLink
              to="/profile"
              className={
                location.pathname.startsWith("/profile")
                  ? "active-settings"
                  : ""
              }
            >
              <i className="icon dripicons-gear"></i>
            </NavLink>
          </li>

          <li className="nav-item dropdown tio-icon-menu dropdown-notifications dropdown-menu-lg">
            <Dropdown
              align="end"
              className="btn-group nav-link text-center m-t-10"
            >
              <Dropdown.Toggle id="dropdown-basic" className="p-0">
                <i className="icon dripicons-bell text-white"></i>
                <span className="noti-count">2</span>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-right p-0 m-0">
                <div className="card card-notification">
                  <div className="card-header d-flex align-items-center">
                    <h5 className="card-title m-0">Notifications</h5>
                    <ul className="actions top-right">
                      <li>
                        <Dropdown className="btn-group nav-link">
                          <Dropdown.Toggle
                            id="dropdown-basic"
                            className="btn btn-sm btn-icon-only"
                          >
                            <i className="icon dripicons-dots-3 zmdi-hc-fw rotate-90"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item href="/customers/view">
                              <i className="fa fa-check-circle fa-fw text-accent-custom"></i>{" "}
                              Mark as All Read
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="card-container-wrapper">
                      <div
                        className="card-container m-0 p-0"
                        data-scroll="dark"
                      >
                        <div className="timeline">
                          <div className="mb-3 p-0">
                            <Link to="" className="default-color">
                              Emdad Driver has Accepted Request. <br />
                              <small className="text-muted">
                                22/04/2022, 2:00 PM
                              </small>
                            </Link>
                          </div>
                          <div className="mb-3 p-0">
                            <Link to="" className="default-color">
                              Emdad Driver has Cancelled order <br />
                              <small className="text-muted">
                                22/04/2022, 2:00 PM
                              </small>
                            </Link>
                          </div>
                          <div className="mb-3 p-0">
                            <Link to="/" className="default-color">
                              Emdad Driver is On the way. <br />
                              <small className="text-muted">
                                22/04/2022, 2:00 PM
                              </small>
                            </Link>
                          </div>
                          <div className="mb-3 p-0">
                            <Link to="/" className="default-color">
                              Emdad Driver is Arrived. <br />
                              <small className="text-muted">
                                22/04/2022, 2:00 PM
                              </small>
                            </Link>
                          </div>
                          <div className="mb-3 p-0">
                            <Link to="" className="default-color">
                              Emdad Driver has Accepted Request. <br />
                              <small className="text-muted">
                                22/04/2022, 2:00 PM
                              </small>
                            </Link>
                          </div>
                          <div className="mb-3 p-0">
                            <Link to="" className="default-color">
                              Emdad Driver has Cancelled order <br />
                              <small className="text-muted">
                                22/04/2022, 2:00 PM
                              </small>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix text-center">
                      <Link to="/notification">VIEW ALL</Link>
                    </div>
                  </div>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item dropdown">
            <Dropdown align="end" className="btn-group nav-link">
              <Dropdown.Toggle id="dropdown-basic">
                <img
                  src={User}
                  className="w-35 h-35 o-cover rounded-circle"
                  alt="John Smith"
                  height="35px"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="pt-0 m-0 m-t-10"
                style={{
                  animationName: "slideUpIn!important",
                }}
              >
                <div className="dropdown-header">
                  <div className="media d-user">
                    <img
                      className="align-self-center mr-3 w-40 h-40 o-cover rounded-circle"
                      src={User}
                      alt="John Smith"
                    />
                    <div className="media-body">
                      <h5 className="mt-0 mb-0">Abdul Kareem</h5>
                      <span>abdulkareem@domain.com</span>
                    </div>
                  </div>
                </div>

                <Dropdown.Item
                  className="header-dropdown-item"
                  as={Link}
                  to="/profile"
                >
                  <i className="icon dripicons-user h-15 mr-2"></i> My Profile
                </Dropdown.Item>
                <Dropdown.Item
                  className="header-dropdown-item"
                  as={Link}
                  to="/profile/change-password"
                >
                  <i className="icon dripicons-gear h-15 mr-2"></i> Change
                  Password
                </Dropdown.Item>
                <Dropdown.Item
                  className="header-dropdown-item"
                  as={Link}
                  to="/login"
                >
                  <i className="icon dripicons-lock h-15 mr-2"></i> Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
