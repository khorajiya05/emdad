import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";

import Header from "../../../components/header/header";
import Sidebar from "../../../components/sidebar/sidebar";
import { DatePicker } from "../../../components";
import { getOrdersActionThunk } from "../../../store/orders/orders.actions.async";
import TRootState from "../../../store/root.types";

interface Prop {
    children: Function;
}

const SelectStatus = [
    { value: "All", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "live", label: "Live" },
];

const PendingOrders: React.FC<Prop> = ({ children }) => {

    const location = useLocation();
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const { state } = location;
    const perPage = useSelector((state: TRootState) => state?.pagination?.perPageItems)
    const orderType = location.pathname === "/orders/pending-orders/fuel" ? 1 : 2;

    const [page, setPage] = useState<number>(Number(state?.page) || 1)
    const [orderStatus, setOrderStatus] = useState("All");
    const [searchOrder, setSearchOrder] = useState<string>("");
    const [startDate, setStartDate] = useState<moment.Moment | null | undefined>();
    const [endDate, setEndDate] = useState<moment.Moment | null | undefined>();
    const [sort, setSort] = useState("DESC");
    const [sortBy, setSortBy] = useState<string | null>(null);

    const fetchOrdersByFilter = () => {

        dispatch(getOrdersActionThunk(
            searchOrder === "" ? null : searchOrder,
            page,
            perPage,
            startDate,
            endDate,
            sort,
            sortBy,
            orderStatus === "All" ? ["pending", "live"] : [orderStatus],
            orderType
        ))
    }

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

                                            dispatch(getOrdersActionThunk(
                                                null,
                                                page,
                                                perPage,
                                                null,
                                                null,
                                                sort,
                                                sortBy,
                                                ["pending", "live"],
                                                orderType
                                            ))
                                        }}
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
                                    {children(sort, setSort, setSortBy, page, setPage, fetchOrdersByFilter)}
                                </>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PendingOrders;
