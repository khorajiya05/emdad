import React, { Component } from "react";

// import { Sidebar } from '../../components/sidebar/sidebar';
import Dropdown from "react-bootstrap/Dropdown";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import { useState } from "react";
import { DatePicker, Header } from "../../../components";

const SelectZipcode = [
    { value: "All", label: "All" },
    { value: "33602", label: "33602" },
    { value: "33603", label: "33603" },
];

const SelectStatus = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Cancel    ", label: "Cancel" },
];

const SelectOrdertype = [
    { value: "All", label: "All" },
    { value: "Fuel", label: "Fuel" },
    { value: "Gas", label: "Gas" },
];

const OrdersHistory: React.FC = ({ children }: any) => {

    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showChangeStatusModal, setShowChangeStatusModal] = useState<boolean>(false);
    const [selectedValue2, setSelectedValue2] = useState("All");
    const [tabValue, setTabValue] = useState<number>(1);

    const handleCloseDelete = () => {
        setShowDeleteModal(false);
    };

    const handleShowDelete = () => {
        setShowDeleteModal(true);
    };

    const handleShowChangeStatus = () => {
        // this.setState({ showChangeStatusModal: true});
        setShowChangeStatusModal(true);
    };

    const handleCloseChangeStatus = () => {
        setShowChangeStatusModal(true);
    };

    //   handleRedirectToAddVendor = () => {
    //     this.props.history.push("/vendors/add");
    //   };

    return (
        <React.Fragment>
            <div id="app">
                <div className="d-block d-lg-none">{/* <Sidebar /> */}</div>
                <div className="content-wrapper">
                    <Header />
                    <div className="content">
                        <header className="page-header">
                            <div className="d-flex align-items-center">
                                <div className="mr-auto">
                                    <h1>Orders History</h1>
                                </div>
                                <div className="m-l-10">
                                    <div className="input-group w-250">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            title="Search"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                type="button"
                                                className="input-group-text pointer"
                                            >
                                                <span className="fa fa-search"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-l-10">
                                    <div className="input-group d-flex">
                                        <DatePicker />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="icon dripicons-calendar"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="m-l-10">
                                    <Select
                                        className="custom-select-dropdown w-170"
                                        value={this.state.selectedValue ? ((SelectStatus || []).find(prod => prod.value === this.state.selectedValue) || null) : null}
                                        onChange={(val) => this.setState({ selectedValue: (val.value || '') })} placeholder="-- Select Status --"
                                        options={SelectStatus || []}
                                    />
                                </div> */}
                                <div className="m-l-10">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            className="btn btn-secondary"
                                            id="dropdown-basic"
                                        >
                                            <i className="fa fa-filter fa-fw"></i> Filter
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <div className="p-3">
                                                <b>Choose filters</b>
                                            </div>
                                            <form id="filter-form" className="px-3">
                                                {/* <div className="form-group">
                                                    <label>Zipcode</label>
                                                    <Select
                                                        className="custom-select-dropdown"
                                                        value={this.state.selectedValue ? ((SelectZipcode || []).find(prod => prod.value === this.state.selectedValue) || null) : null}
                                                        onChange={(val) => this.setState({ selectedValue: (val.value || '') })} placeholder="-- Select --"
                                                        options={SelectZipcode || []}
                                                    />
                                                </div> */}
                                                {/* <div className="form-group">
                          <label>Order Type</label>
                          <Select
                            className="custom-select-dropdown"
                            value={
                              selectedValue2
                                ? (SelectOrdertype || []).find(
                                  (prod) => prod.value === selectedValue2
                                ) || null
                                : null
                            }
                            onChange={(val) =>
                              setSelectedValue2((val && val.value) || "")
                            }
                            placeholder="-- Select --"
                            options={SelectOrdertype || []}
                          />
                        </div> */}
                                                <div className="form-group">
                                                    <label>Status</label>
                                                    <Select
                                                        className="custom-select-dropdown"
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
                                            </form>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="m-l-10">
                                    <button type="button" className="btn btn-primary2">
                                        Submit
                                    </button>
                                </div>
                                <div className="m-l-10">
                                    <button type="button" className="btn btn-secondary">
                                        Reset
                                    </button>
                                </div>
                                {/* <div className="m-l-10">
                                    <button type="button" className="btn btn-primary" onClick={this.handleRedirectToAddVendor}>
                                        Add New Vendor
                                    </button>
                                </div> */}
                            </div>
                        </header>
                        <section className="page-content container-fluid">
                            <div className="card card-tabs clearfix">
                                <>
                                    <div className="card-header clearfix ">
                                        <ul className="nav nav-tabs primary-tabs align-items-center">
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    onClick={() => setTabValue(tabValue)}
                                                    className={
                                                        tabValue === 1 ? "nav-link active show" : "nav-link"
                                                    }
                                                >
                                                    Fuel
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a
                                                    onClick={() => setTabValue(2)}
                                                    className={
                                                        tabValue === 2 ? "nav-link active show" : "nav-link"
                                                    }
                                                >
                                                    Gas
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {{ children }}
                                </>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Modal
                centered
                show={showChangeStatusModal}
                onHide={() => handleCloseChangeStatus()}
            >
                <Modal.Header className="justify-content-center border-0">
                    <h3 className="modal-title">Change Status</h3>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <span>
                        <i className="far fa-check-circle fa-3x text-success"></i>
                    </span>
                    <p className="font-size-18 m-0 mt-2">
                        Are you sure want to change status?
                    </p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center border-0">
                    <button
                        className="btn btn-dark min-w-100"
                        onClick={() => handleCloseChangeStatus()}
                    >
                        No
                    </button>
                    <button
                        className="btn btn-danger min-w-100"
                        onClick={() => handleCloseChangeStatus()}
                    >
                        Yes
                    </button>
                </Modal.Footer>
            </Modal>
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

export default OrdersHistory;
