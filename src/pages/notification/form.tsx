import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { DatePicker } from "../../components";
import CKEditor from "../../components/CKeditor/CKEditor";
const Notificationform: React.FC = () => {

    const [tabValue, setTabValue] = useState<number>(1);
    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleRedirectToGasForm = () => {
        navigate("/notification/list");
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
                                    <h1>Send New Notification</h1>
                                </div>
                                <div className="m-l-10">
                                    <button className="btn btn-secondary" onClick={handleRedirectToGasForm}>
                                        <i className="fa fa-angle-left">&nbsp;</i> Back
                                    </button>
                                </div>
                            </div>
                        </header>
                        <section className="page-content container-fluid">
                            <div className="card">
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="row flex">
                                            <div className="col-xl-8">
                                                <div className="form-row" data-select2-id="12">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <label className="control-label text-md-right">
                                                                Notify to {" "}
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <select className="custom-select form-control">
                                                                <option value="">-- Select --</option>
                                                                <option>All Customers</option>
                                                                <option>All Drivers</option>
                                                                <option>Selected Customers</option>
                                                                <option>Selected Drivers</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="control-label text-md-right">
                                                                Notification Message
                                                                <span className="text-danger">*</span>
                                                            </label>
                                                            <div>
                                                                <CKEditor />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-light text-right">
                                        <button
                                            type="button"
                                            className="btn btn-secondary clear-form mr-2"
                                            onClick={handleRedirectToGasForm}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={handleRedirectToGasForm}
                                        >
                                            Submit
                                        </button>
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

export default Notificationform;
