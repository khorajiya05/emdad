import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import Pagination from "../../components/pagination/pagination";
import { DatePicker } from "../../components";
import DriversList from "../../components/driver/driver-listing";
import { getAllDriversActionThunk } from "../../store/drivers/drivers.actions.async";
import TRootState from "../../store/root.types";

const SelectDriverrStatus = [
  { value: "All", label: "All" },
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];
const DriverList: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const location = useLocation();
  const navigate = useNavigate();

  const { state } = location;
  const itemsPerPage = useSelector((state: TRootState) => state?.pagination?.perPageItems);
  const count = useSelector((state: TRootState) => state.drivers?.AllDriversList?.count)

  const [page, setPage] = useState<number>(Number(state?.page) || 1);
  const [searchDriver, setSearchDriver] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<moment.Moment | string | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | string | null>(null);
  const [driverStatus, setDriverStatus] = useState<string>("");
  const [sort, setSort] = useState("ASC");
  const [sortBy, setSortBy] = useState<string>("")

  const handleRedirectToAddVendor = () => {
    navigate("/driver/form");
  };

  const fetchDrivers = (pages?: number) => {
    dispatch(getAllDriversActionThunk(
      searchDriver || null,
      pages || page,
      itemsPerPage,
      startDate,
      endDate,
      driverStatus === "Active" ? true : driverStatus === "Inactive" ? false : driverStatus === "All" ? null : null,
      sort,
      sortBy || "fullName"
    ));
  }
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
                  <h1>Manage Drivers </h1>
                </div>
                <div className="m-l-10">
                  <div className="input-group w-250">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      title="Search"
                      value={searchDriver || ""}
                      onChange={e => setSearchDriver(e.target?.value)}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="input-group-text pointer"
                        onClick={() => fetchDrivers()}
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
                          <label>Customer Status</label>
                          <Select
                            className="custom-select-dropdown"
                            value={driverStatus ? (SelectDriverrStatus || []).find((prod) => prod.value === driverStatus) || null : null}
                            onChange={(e) => setDriverStatus((e && e.value) || "")}
                            placeholder="-- Select --"
                            options={SelectDriverrStatus || []}
                          />
                        </div>
                      </form>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary2"
                    onClick={() => fetchDrivers()}
                  >
                    Submit
                  </button>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSearchDriver("");
                      setStartDate(null);
                      setEndDate(null);
                      setSort("ASC");
                      setDriverStatus("All")

                      dispatch(getAllDriversActionThunk(
                        null,
                        page,
                        itemsPerPage,
                        null,
                        null,
                        null,
                        "ASC",
                        "fullName",
                      ))
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRedirectToAddVendor}
                  >
                    Add Driver
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body p-0">
                  <Pagination
                    ItemsComponent={DriversList}
                    dispatchAction={fetchDrivers}
                    pageCount={count}
                    filter={sort}
                    setFilter={setSort}
                    setFilterBy={setSortBy}
                    page={page}
                    setPage={setPage}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default DriverList;
