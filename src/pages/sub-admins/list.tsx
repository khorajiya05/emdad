import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from "../../components/header/header";
import Pagination from "../../components/pagination/pagination";
import Sidebar from "../../components/sidebar/sidebar";
import Select from "react-select";
const SubAdminsList: React.FC = () => {

    const SelectStatus = [
        { value: "Manager", label: "Manager" },
    ];

    const [tabValue, setTabValue] = useState<number>(1);
    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showChangeStatusModal, setShowChangeStatusModal] =
        useState<boolean>(false);

    const handleRedirectToAddVendor = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShowChangeStatusModal(false);
    };

    const [selectedValue2, setSelectedValue2] = useState("All");

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
                                    <h1>Sub Admins</h1>
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
                                    <button type="button" className="btn btn-primary" onClick={handleRedirectToAddVendor}>
                                        Add New Sub Admin
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
                                                    <th className="sorting"><span>Sub Admin Name</span></th>
                                                    <th className="table-field-status">Status</th>
                                                    <th className="table-field-actions">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[...Array(10)].map((elementInArray, index) => (
                                                    <React.Fragment>
                                                        <tr key={index}>
                                                            <td>Abdul Kareem</td>
                                                            <td className="table-field-status">
                                                                <span className="badge badge-pill badge-success">Active</span>
                                                            </td>
                                                            <td className="table-field-actions">
                                                                <Dropdown className="btn-group">
                                                                    <Dropdown.Toggle id="dropdown-basic" className="btn btn-sm btn-icon-only">
                                                                        <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="#" onClick={handleRedirectToAddVendor}>
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
            <Modal centered scrollable show={show} onHide={() => handleClose()}>
                <Modal.Header>
                    <h4 className="modal-title">Add New Sub Admin</h4>
                    <button className="close" onClick={() => handleClose()}>
                        <span aria-hidden="true" className="zmdi zmdi-close"></span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label className="control-label">Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Email <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Contact Number <span className="text-danger">*</span></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">+249</div>
                            </div>
                            <input type="text" className="form-control" placeholder="" value="" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Role Name <span className="text-danger">*</span></label>
                        <div className="mt-1">
                            <Select
                                className="custom-select-dropdown min-w-200"
                                value={
                                    selectedValue2
                                        ? (SelectStatus || []).find(
                                            (prod) => prod.value === selectedValue2
                                        ) || null
                                        : null
                                }
                                onChange={(val) =>
                                    setSelectedValue2((val && val.value) || "")
                                }
                                placeholder="-- Select --"
                                options={SelectStatus || []}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Status <span className="text-danger">*</span></label>
                        <div className="mt-1">
                            <label className="control control-outline d-inline-block control-primary control--radio mb-0 mr-3"> Active
                                <input type="radio" checked value="radio1" name="radio-1" id="status1" />
                                <div className="control__indicator"></div>
                            </label>
                            <label className="control control-outline d-inline-block control-primary control--radio mb-0"> Inactive
                                <input type="radio" value="radio11" name="radio-1" id="status2" />
                                <div className="control__indicator"></div>
                            </label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => handleClose()}>
                        Close
                    </button>
                    <button className="btn btn-primary" onClick={() => handleClose()}>
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default SubAdminsList;
