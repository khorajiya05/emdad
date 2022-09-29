import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Header from "../../components/header/header";
import Pagination from "../../components/pagination/pagination";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal } from "react-bootstrap";
const GasList: React.FC = () => {

    const [tabValue, setTabValue] = useState<number>(1);
    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleRedirectToRolespermissions = () => {
        navigate("/gas/form");
    };
    
    const handleCloseDelete = () => {
        setShowDeleteModal(false);
    };

    const handleShowDelete = () => {
        setShowDeleteModal(true);
    };

    return (
        <React.Fragment>
            <div id="app">
                <div className="d-block d-lg-none">
                    <Sidebar />
                </div>
                <div className="content-wrapper">
                    <Header />
                    <div className="content">
                        <header className="page-header">
                            <div className="d-flex align-items-center">
                                <div className="mr-auto">
                                    <h1>Gas</h1>
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
                                        Add New Gas
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
                                                    <th className="sorting"><span>Date</span></th>
                                                    <th>Price</th>
                                                    <th className="table-field-actions">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[...Array(10)].map((elementInArray, index) => (
                                                    <React.Fragment>
                                                        <tr key={index}>
                                                            <td>5/4/2022</td>
                                                            <td> SDG 20.00</td>
                                                            <td className="table-field-actions">
                                                                <Dropdown className="btn-group">
                                                                    <Dropdown.Toggle id="dropdown-basic" className="btn btn-sm btn-icon-only">
                                                                        <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item href="/gas/form" onClick={handleRedirectToRolespermissions}>
                                                                            <i className="fa fa-edit fa-fw text-accent-custom"></i> Edit
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item href="#" onClick={() => handleShowDelete()}>
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
            <Modal centered show={showDeleteModal} onHide={() => handleCloseDelete()}>
                <Modal.Header className="justify-content-center border-0">
                    <h3 className="modal-title">Delete</h3>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <span>
                        <i className="far fa-times-circle fa-3x text-danger"></i>
                    </span>
                    <p className="font-size-18 m-0 mt-2">Are you sure want to delete?</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center border-0">
                    <button
                        className="btn btn-dark min-w-100"
                        onClick={() => handleCloseDelete()}
                    >
                        No
                    </button>
                    <button
                        className="btn btn-danger min-w-100"
                        onClick={() => handleCloseDelete()}
                    >
                        Yes
                    </button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default GasList;
