import React, { useState } from "react";
import makeAnimated from "react-select/animated";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
const SidebarEarningList: React.FC = () => {

  const [tabValue, setTabValue] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

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
                  <h1>Earnings</h1>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card clearfix">
                <div className="card-body p-0">
                  <form className="form-horizontal">
                    <div className="card-body">
                      <div className="mt-3">
                        <div className="form-group row">
                          <label className="control-label text-md-right col-md-3">Net Earnings<span className="text-danger">*</span></label>
                          <div className="col-md-5">
                            <div className="input-group">
                              <input type="text" className="form-control"  />
                              <div className="input-group-append">
                                <span className="input-group-text">kg</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="control-label text-md-right col-md-3">Today Earnings<span className="text-danger">*</span></label>
                          <div className="col-md-5">
                            <div className="input-group">
                              <input type="text" className="form-control"  />
                              <div className="input-group-append">
                                <span className="input-group-text">kg</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-light text-right">
                      <button type="button" className="btn btn-secondary clear-form mr-2">Cancel</button>
                      <button type="button" className="btn btn-primary">Update</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarEarningList;
