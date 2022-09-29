import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Header from "../../components/header/header";
import Pagination from "../../components/pagination/pagination";
import Sidebar from "../../components/sidebar/sidebar";
const RolesPermissionsList: React.FC = () => {

  const [tabValue, setTabValue] = useState<number>(1);
  const [show, setShow] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleRedirectToRolespermissions = () => {
    navigate("/roles-permissions/form");
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
                            <h1>Roles & Permissions</h1>
                        </div>
                        <div className="m-l-10">
                            <div className="input-group w-250">
                                <input type="text" className="form-control" placeholder="Search" title="Search" />
                                <div className="input-group-append">
                                    <button type="button" className="input-group-text pointer"><span className="fa fa-search"></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="m-l-10">
                            <button type="button" className="btn btn-primary" onClick={handleRedirectToRolespermissions}>
                                Add New Role
                            </button>
                        </div>
                    </div>
                </header>
                <section className="page-content container-fluid">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover m-0">
                                    <thead>
                                        <tr>
                                            <th className="sorting"><span>Role Name</span></th>
                                            <th className="table-field-status">Status</th>
                                            <th className="table-field-actions">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[...Array(10)].map((elementInArray, index) => (
                                        <React.Fragment>
                                            <tr key={index}>
                                                <td>Manager</td>
                                                <td className="table-field-status">
                                                    <span className="badge badge-pill badge-success">Active</span>
                                                </td>	
                                                <td className="table-field-actions">
                                                    <Dropdown className="btn-group">  
                                                        <Dropdown.Toggle id="dropdown-basic" className="btn btn-sm btn-icon-only">
                                                            <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="/roles-permissions/form">
                                                                <i className="fa fa-edit fa-fw text-accent-custom"></i> Edit
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#">
                                                                <i className="fa fa-trash-alt fa-fw text-accent-custom"></i> Delete
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                        )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </section>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RolesPermissionsList;
