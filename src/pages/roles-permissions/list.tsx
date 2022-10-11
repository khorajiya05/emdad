import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Pagination from "../../components/pagination/pagination";
import Sidebar from "../../components/sidebar/sidebar";
import { getRolesActionThunk } from "../../store/roleAndPermission/rolesAndPermissions.action.async";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import RolesAndPermssions from "../../components/rolesAndPermissions/rolesAndPermissions";
import TRootState from "../../store/root.types";

const RolesPermissionsList: React.FC = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const state = location?.state as { page: string; state: string };

    const [page, setPage] = useState(Number(state?.page) || 1);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("ASC");

    const count = useSelector((state: TRootState) => state.rolesAndPermission?.rolesData?.count);

    const fetchRoles = (page: number, search?: string) => {
        dispatch(getRolesActionThunk(page, 10, search))
    };

    const reset = () => {
        setSearch(() => "");
        dispatch(getRolesActionThunk(page, 10, ""));
    }

    const handleRedirectToRolespermissions = () => {
        navigate("/settings/roles-permissions/new");
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search"
                                            title="Search"
                                            value={search}
                                            onChange={(e) => {
                                                setSearch(e.target.value);
                                            }}
                                        />
                                        <div className="input-group-append">
                                            <button
                                                type="button"
                                                className="input-group-text pointer"
                                                onClick={(e) => {
                                                    dispatch(
                                                        getRolesActionThunk(page, 10, search)
                                                    );
                                                }}
                                            >
                                                <span className="fa fa-search"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-l-10">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={reset}
                                    >
                                        Reset
                                    </button>
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
                                    <Pagination
                                        ItemsComponent={RolesAndPermssions}
                                        pageCount={count}
                                        dispatchAction={fetchRoles}
                                        page={page}
                                        setPage={setPage}
                                        filter={sort}
                                        setFilter={setSort}
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

export default RolesPermissionsList;
