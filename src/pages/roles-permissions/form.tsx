import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
const RolesPermissionsForm: React.FC = () => {

    const [tabValue, setTabValue] = useState<number>(1);
    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleRedirectToRolespermissions = () => {
        navigate("/roles-permissions/list");
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
                                    <h1>Add New Role</h1>
                                </div>
                                <div className="m-l-10">
                                    <button className="btn btn-secondary" onClick={handleRedirectToRolespermissions}>
                                        <i className="fa fa-angle-left">&nbsp;</i> Back
                                    </button>
                                </div>
                            </div>
                        </header>
                        <section className="page-content container-fluid">
                            <div className="card">
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="mt-3">
                                            <div className="form-group row">
                                                <label className="control-label text-md-right col-md-3">Role Name <span className="text-danger">*</span></label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label text-md-right col-md-3">Status <span className="text-danger">*</span></label>
                                                <div className="col-md-5">
                                                    {/* <Select
                                                className="custom-select-dropdown"
                                                value={this.state.selectedValue01 ? ((SelectStatus || []).find(prod => prod.value === this.state.selectedValue01) || null) : null}
                                                onChange={(val) => this.setState({ selectedValue01: (val.value || '') })} placeholder="-- Select --"
                                                options={SelectStatus || []}
                                            /> */}
                                                    <div className="mt-1">
                                                        <label className="control control-outline d-inline-block control-primary control--radio mb-0 mr-3"> Active
                                                            <input type="radio" value="radio1" checked name="radio-1" id="status1" />
                                                            <div className="control__indicator"></div>
                                                        </label>
                                                        <label className="control control-outline d-inline-block control-primary control--radio mb-0"> Inactive
                                                            <input type="radio" value="radio11" name="radio-1" id="status2" />
                                                            <div className="control__indicator"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-0">
                                        <div className="table-responsive table-thead-fix">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Permission</th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> All
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> Index
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> Add
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> Edit
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> View
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> Delete
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Dashboard </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Orders </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textIndent: '40px' }}>Pending Orders </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" checked />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ textIndent: '40px' }}>Orders History</td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    {/* <tr>
                                                <td style={{textIndent: '40px'}}>All Orders</td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr> */}
                                                    <tr>
                                                        <td>Vendors </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Drivers </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Users  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vehicles </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gas </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Fuel </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    {/* <tr>
                                                <td>Drivers </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Vendor's Drivers  </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Freelance Drivers  </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Freelance Drivers Payments </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr> */}
                                                    {/* <tr>
                                                <td>Product Settings </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Products </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Accessories </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Cylinder Size </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Sales Tax </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Location of Where to Deliver </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{textIndent: '40px'}}>Promocode </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                        <input type="checkbox" />
                                                        <div className="control__indicator"></div>
                                                    </label>
                                                </td>
                                            </tr> */}
                                                    <tr>
                                                        <td>Reports  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td>Earnings  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr> */}
                                                    <tr>
                                                        <td>My Profile  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Geofences  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vendors Category  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Vehicle (Fuel Type)</td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Referral Code</td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td>Time Slots</td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Roles & Permissions</td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>Sub Admins  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Notifications  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>App Settings  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email Templates</td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>CMS Pages  </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Driver Handbook</td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>FAQs</td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-light text-right">
                                        <button type="button" className="btn btn-secondary clear-form mr-2" onClick={handleRedirectToRolespermissions}>Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={handleRedirectToRolespermissions}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RolesPermissionsForm;
