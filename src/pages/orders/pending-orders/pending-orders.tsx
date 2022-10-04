import React from "react";

import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import { DatePicker } from "../../../components";
import User from "../../../assets/img/user.jpg";
import { NavLink, useLocation } from "react-router-dom";

interface Prop {
    children: Function;
}
const SelectZipcode = [
    { value: "All", label: "All" },
    { value: "33602", label: "33602" },
    { value: "33603", label: "33603" },
];

const SelectStatus = [
    { value: "All", label: "All" },
    { value: "Pending", label: "Pending" },
    { value: "Live", label: "Live" },
];

const SelectOrdertype = [
    { value: "All", label: "All" },
    { value: "Fuek", label: "Fuel" },
    { value: "Gas", label: "Gas" },
];

const PendingOrders: React.FC<Prop> = ({ children }) => {

    const location = useLocation();

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showUnAssignOrderModal, setShowUnAssignOrderModal] = useState<boolean>(false);
    const [showAssignOrderModal, setShowAssignOrderModal] = useState<boolean>(false);
    const [showChangeStatusModal, setShowChangeStatusModal] = useState<boolean>(false);

    const [orderStatus, setOrderStatus] = useState("All");
    const [searchOrder, setSearchOrder] = useState<string>("");
    const [startDate, setStartDate] = useState<moment.Moment | null | undefined>();
    const [endDate, setEndDate] = useState<moment.Moment | null | undefined>();
    const ordersOf = location.pathname === "/orders/pending-orders/fuel" ? "fuel" : "gas"


    const fetchOrdersByFilter = () => {
        alert(JSON.stringify({ startDate, endDate, orderStatus, searchOrder, ordersOf }));
    }

    const handleCloseDelete = () => {
        // setState({ showDeleteModal: false});
        setShowDeleteModal(false);
    };

    const handleShowDelete = () => {
        setShowDeleteModal(true);
    };

    const handleAssignOrder = () => {
        setShowAssignOrderModal(false);
    };

    const handleShowAssignOrder = () => {
        setShowAssignOrderModal(true);
    };

    const handleUnAssignOrder = () => {
        setShowUnAssignOrderModal(false);
    };

    const handleShowUnAssignOrder = () => {
        setShowUnAssignOrderModal(true);
    };

    const handleShowChangeStatus = () => {
        // setState({ showChangeStatusModal: true});
        setShowChangeStatusModal(true);
    };

    const handleCloseChangeStatus = () => {
        setShowChangeStatusModal(false);
    };

    //   handleRedirectToAddVendor = () => {
    //     props.history.push("/vendors/add");
    //   };

    return (
        <React.Fragment>
            <div id="app">
                <div className="d-block d-lg-none"><Sidebar /></div>
                <div className="content-wrapper">
                    <Header />
                    <div className="content">
                        <header className="page-header">
                            <div className="d-flex align-items-center">
                                <div className="mr-auto">
                                    <h1>Pending Orders</h1>
                                </div>
                                <div className="m-l-10">
                                    <div className="input-group w-250">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            title="Search"
                                            value={searchOrder}
                                            onChange={(e) => setSearchOrder(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    fetchOrdersByFilter();
                                                }
                                            }}
                                        />
                                        <div className="input-group-append">
                                            <button
                                                type="button"
                                                className="input-group-text pointer"
                                                onClick={() => fetchOrdersByFilter()}
                                            >
                                                <span className="fa fa-search"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-l-10">
                                    <div className="input-group d-flex">
                                        <DatePicker
                                            startDate={startDate}
                                            endDate={endDate}
                                            setStartDate={setStartDate}
                                            setEndDate={setEndDate}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text">
                                                <i className="icon dripicons-calendar"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
                                                <div className="form-group">
                                                    <label>Status</label>
                                                    <Select
                                                        className="custom-select-dropdown"
                                                        value={
                                                            orderStatus
                                                                ? (SelectStatus || []).find(
                                                                    (prod) => prod.value === orderStatus
                                                                ) || null
                                                                : null
                                                        }
                                                        onChange={(val) =>
                                                            setOrderStatus((val && val.value) || "")
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
                                    <button type="button" className="btn btn-primary2" onClick={() => fetchOrdersByFilter()}>
                                        Submit
                                    </button>
                                </div>
                                <div className="m-l-10">
                                    <button type="button" className="btn btn-secondary"
                                        onClick={() => {
                                            setSearchOrder("");
                                            setStartDate(null || undefined);
                                            setEndDate(null || undefined);
                                            setOrderStatus("All");

                                            setTimeout(() => {
                                                fetchOrdersByFilter();
                                            }, 300);

                                        }
                                        }
                                    >
                                        Reset
                                    </button>
                                </div>

                            </div>
                        </header>
                        <section className="page-content container-fluid">
                            <div className="card card-tabs clearfix">
                                <>
                                    <div className="card-header clearfix ">
                                        <ul className="nav nav-tabs primary-tabs align-items-center">
                                            <li className="nav-item" role="presentation">
                                                <NavLink
                                                    to="/orders/pending-orders/fuel"
                                                    className={(navData) => navData.isActive ? "nav-link show active" : "nav-link"}
                                                >
                                                    Fuel
                                                </NavLink>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <NavLink
                                                    to="/orders/pending-orders/gas"
                                                    className={(navData) => navData.isActive ? "nav-link show active" : "nav-link"}
                                                >
                                                    Gas
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    {children(fetchOrdersByFilter)}
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
            <Modal
                centered
                show={showUnAssignOrderModal}
                onHide={() => handleUnAssignOrder()}
            >
                <Modal.Header className="justify-content-center border-0">
                    <h3 className="modal-title">Unassign Order</h3>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <span>
                        <i className="far fa-times-circle fa-3x text-danger"></i>
                    </span>
                    <p className="font-size-18 m-0 mt-2">
                        Are you sure want to Unassign Order?
                    </p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center border-0">
                    <button
                        className="btn btn-dark min-w-100"
                        onClick={() => handleUnAssignOrder()}
                    >
                        No
                    </button>
                    <button
                        className="btn btn-danger min-w-100"
                        onClick={() => handleUnAssignOrder()}
                    >
                        Yes
                    </button>
                </Modal.Footer>
            </Modal>
            <Modal
                centered
                scrollable
                show={showAssignOrderModal}
                onHide={() => handleAssignOrder()}
            >
                <Modal.Header>
                    <h3 className="modal-title">Assign Order - Drivers</h3>
                </Modal.Header>
                <Modal.Body className="p-0 assign-order-radio">
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-1"
                        />
                        <div className="control__indicator"></div>
                    </label>
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-2"
                        />
                        <div className="control__indicator"></div>
                    </label>
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-3"
                        />
                        <div className="control__indicator"></div>
                    </label>
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-4"
                        />
                        <div className="control__indicator"></div>
                    </label>
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-5"
                        />
                        <div className="control__indicator"></div>
                    </label>
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-6"
                        />
                        <div className="control__indicator"></div>
                    </label>
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-6"
                        />
                        <div className="control__indicator"></div>
                    </label>
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-6"
                        />
                        <div className="control__indicator"></div>
                    </label>
                    <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                        <div className="media flex-fill">
                            <img
                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                src={User}
                            />
                            <div className="media-body d-flex align-items-end">
                                <div className="mr-auto">
                                    <h6 className="mt-1 mb-0"> John Smith</h6>
                                    <span>+249 98765 43210</span>
                                </div>
                                <span>MK11 7HX</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="assign-order-radio"
                            id="assign-order-radio-6"
                        />
                        <div className="control__indicator"></div>
                    </label>
                </Modal.Body>
                <Modal.Footer className="justify-content-end">
                    <button
                        className="btn btn-secondary min-w-100"
                        onClick={() => handleAssignOrder()}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn btn-primary min-w-100"
                        onClick={() => handleAssignOrder()}
                    >
                        Assign
                    </button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default PendingOrders;
