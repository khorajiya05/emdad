import React, { Component } from "react";
import { Accordion, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <React.Fragment>
      <aside className="sidebar sidebar-left">
        <div className="sidebar-content">
          <nav className="main-menu">
            <ul className="nav metismenu">
              <li className="active">
                <Link to="/profile">
                  <i className="icons dripicons-user"></i>
                  <span>My Profile</span>
                </Link>
              </li>
              {/* <li>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Masters</Accordion.Header>
                                            <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </li> */}
              {/* <li><Link to="/products/list"><i className="icons dripicons-view-thumb"></i><span>Products</span></Link></li>
                                <li><Link to="/accessories/list"><i className="icons dripicons-menu"></i><span>Accessories</span></Link></li>
                                <li><Link to="/cylinder-size/list"><i className="icons dripicons-weight"></i><span>Cylinder Size</span></Link></li>
                                <li><Link to="/tax-configuration/list"><i className="icons dripicons-card"></i><span>Sales Tax</span></Link></li>
                                <li><Link to="/location-where-to-deliver/list"><i className="icons dripicons-map"></i><span>Location of Where to <span className="m-l-35"> Deliver </span></span></Link></li>
                                <li><Link to="/promocode/list"><i className="icons dripicons-ticket"></i><span>Promocode</span></Link></li> */}
              {/* <li><Link to="/products/list"><i className="icons dripicons-view-thumb"></i><span>Products</span></Link></li> */}
              {/* <li><Link to="/stock-request/list"><i className="icons dripicons-meter"></i><span>Stock Request</span></Link></li> */}
              {/* <li><Link to="/zipcode/list"><i className="icons dripicons-location"></i><span>Zipcode</span></Link></li> */}
              {/* <li><Link to="/schedule/list"><i className="icons dripicons-clock"></i><span>Schedule</span></Link></li> */}
              {/* <li><Link to="/freelance-driver-payment/list"><i className="icons dripicons-card"></i><span>Freelance Driver's <span className="m-l-35"> Payments </span></span></Link></li> */}
              {/* <li>
                <Link to="/fuel/list">
                  <i className="icons dripicons-experiment"></i>
                  <span>Fuel</span>
                </Link>
              </li> */}
              {/* <li>
                <Link to="/earnings/list">
                  <i className="icons dripicons-map"></i>
                  <span>Earnings</span>
                </Link>
              </li> */}
              {/* <li>
                <Link to="/gas/list">
                  <i className="icons dripicons-view-apps"></i>
                  <span>Gas</span>
                </Link>
              </li> */}
              <li>
                <Link to="/geofences/list">
                  <i className="icons dripicons-location"></i>
                  <span>Geofences</span>
                </Link>
              </li>
              <li>
                <Link to="/vendors-category/list">
                  <i className="icons dripicons-view-apps"></i>
                  <span>Vendors Category</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/postcode">
                  <i className="icons dripicons-map"></i>
                  <span>Postcodes</span>
                </Link>
              </li> */}
              {/* <li>
                <Link to="/location">
                  <i className="icon dripicons-location"></i>
                  <span>Location</span>
                </Link>
              </li> */}
              {/* <li><Link to="/holiday/list"><i className="icons dripicons-calendar"></i><span>Government Holidays</span></Link></li> */}
              {/* <li>
                <Link to="/fueltype">
                  <i className="icons dripicons-view-list"></i>
                  <span>Vehicle (Fuel Type)</span>
                </Link>
              </li> */}
              <li>
                <Link to="/referalcode">
                  <i className="icons dripicons-tag"></i>
                  <span>Referral Code</span>
                </Link>
              </li>
              <li>
                <Link to="/timeslot">
                  <i className="icons dripicons-clock"></i>
                  <span>Time Slots</span>
                </Link>
              </li>
              <li>
                <Link to="/roles-permissions/list">
                  <i className="icons dripicons-menu"></i>
                  <span>Roles & Permissions</span>
                </Link>
              </li>
              <li>
                <Link to="/sub-admins/list">
                  <i className="icons dripicons-user-group"></i>
                  <span>Sub Admins</span>
                </Link>
              </li>
              <li>
                <Link to="/notification/list">
                  <i className="icons dripicons-bell"></i>
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link to="/app-settings">
                  <i className="icons dripicons-gear"></i>
                  <span>App Settings</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/earning">
                  <i className="icons dripicons-gear"></i>
                  <span>Earning</span>
                </Link>
              </li> */}
              <li>
                <Link to="/email-templates/list">
                  <i className="icons dripicons-mail"></i>
                  <span>Email Templates</span>
                </Link>
              </li>
              <li>
                <Link to="/cms/list">
                  <i className="icons dripicons-document"></i>
                  <span>CMS Pages</span>
                </Link>
              </li>
              <li>
                <Link to="/driverhandbook">
                  <i className="icons dripicons-calendar"></i>
                  <span>Driver Handbook</span>
                </Link>
              </li>
              <li>
                <Link to="/faq/list">
                  <i className="icons dripicons-user-id"></i>
                  <span>FAQs</span>
                </Link>
              </li>
              {/* <li><Link to="/transactions"><i className="icons dripicons-document"></i><span>Transactions</span></Link></li> */}
              {/* <li><Link to="/membership-plans/list"><i className="icons dripicons-menu"></i><span>Membership Plans</span></Link></li>
                                <li><Link to="/roles-permissions"><i className="icons dripicons-menu"></i><span>Roles & Permissions</span></Link></li>
                                <li><Link to="/sub-admins"><i className="icons dripicons-user-group"></i><span>Sub Admins</span></Link></li>
                                 */}
              {/* <li>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title="Drivers"
                                        menuVariant="dark"
                                        >
                                        <NavDropdown.Item href="/drivers/list">Vendor's Drivers</NavDropdown.Item>
                                        <NavDropdown.Item href="/drivers/freelance-drivers">Freelance Drivers</NavDropdown.Item>
                                        <NavDropdown.Item href="/freelance-driver-payment/list">Freelance Drivers Payments</NavDropdown.Item>
                                    </NavDropdown>
                                </li> */}
              {/* <li className="nav-dropdown">
                                    <a className="has-arrow" href="#" aria-expanded="false"><i className="icons dripicons-question"></i><span>FAQs</span></a>
                                    <ul className="collapse nav-sub" aria-expanded="true">
                                        <li><a href="pages/settings/faq/faq.php"><span>Customers</span></a></li>
                                        <li><a href="pages/settings/faq/faq.php"><span>Drivers</span></a></li>
                                    </ul>
                                </li> */}
            </ul>
          </nav>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
