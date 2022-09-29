import React, { Component } from "react";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import User from "../../assets/img/user.jpg";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirectToEditProfile = () => {
    navigate("/profile/edit");
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
                  <h1>Profile</h1>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRedirectToEditProfile}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body">
                  <div className="media">
                    <img
                      src={User}
                      className="align-self-start mr-5 ml-3 rounded-circle img-thumbnail o-cover"
                      alt="profile-image"
                      width="130"
                      height="130"
                    />
                    <div className="media-body">
                      <div className="row">
                        <div className="col-lg-12 col-xl-10">
                          <h2 className="mt-0 mb-3 text-info">Abdul Kareem</h2>
                          <ul className="list-unstyled text-left row mb-0">
                            <li className="mb-3 col-md-6">
                              <label className="text-muted mb-1">
                                Mobile Number
                              </label>
                              <br /> +249 98765 43210
                            </li>
                            <li className="mb-3 col-md-6">
                              <label className="text-muted mb-1">Email </label>
                              <br /> abdulkareem@domain.com
                            </li>
                            <li className="mb-3 col-md-6">
                              <label className="text-muted mb-1">Address</label>
                              <br />
                              211 SW 16th St, For Lauderdale, Al-inqaz St, Khartoum North, Sudan
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default Profile;
