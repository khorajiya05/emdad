import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Header from "../../components/header/header";
import Pagination from "../../components/pagination/pagination";
import Sidebar from "../../components/sidebar/sidebar";
import { getRolesActionThunk } from "../../store/roleAndPermission/rolesAndPermissions.action.async";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import RolesAndPermssions from "../../components/rolesAndPermissions/rolesAndPermissions";
const RolesPermissionsList: React.FC = () => {

    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();


    const [tabValue, setTabValue] = useState<number>(1);
    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const fetchRoles = () =>{
        dispatch(getRolesActionThunk())};

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
                                    <Pagination 
                                        ItemsComponent={RolesAndPermssions}
                                        dispatchAction={fetchRoles}
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
