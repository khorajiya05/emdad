import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { DatePicker } from "../../components";
import { MultiSelectCheckbox, SingleDatePickerComp } from "../../components";
const GasForm: React.FC = () => {

    const [tabValue, setTabValue] = useState<number>(1);
    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleRedirectToGasForm = () => {
        navigate("/gas/list");
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
                                    <h1>Add New Gas</h1>
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
                                        <div className="mt-3">
                                            {/* <div className="form-group row">
                                                <label className="control-label text-md-right col-md-3"> Order Type <span className="text-danger">*</span></label>
                                                <div className="col-md-5">
                                                    <div className="mt-1">
                                                        <label className="control control-outline d-inline-block control-primary control--radio mb-0 mr-3"> Fuel
                                                            <input type="radio" value="radio1" name="radio-1" id="status1" />
                                                            <div className="control__indicator"></div>
                                                        </label>
                                                        <label className="control control-outline d-inline-block control-primary control--radio mb-0"> Gas
                                                            <input type="radio" value="radio11" checked name="radio-1" id="status2" />
                                                            <div className="control__indicator"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="form-group row">
                                                <label className="control-label text-md-right text-nowrap col-md-3">Date <span className="text-danger">*</span></label>
                                                <div className="col-md-5">
                                                    <div className="input-group">
                                                        <SingleDatePickerComp />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                <i className="icon dripicons-calendar"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label text-md-right text-nowrap col-md-3"> Price <span className="text-danger">*</span></label>
                                                <div className="col-md-5">
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text">SDG</span>
                                                        </div>
                                                        <input type="text" className="form-control" value="5.00" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label text-md-right col-md-3"> Status <span className="text-danger">*</span></label>
                                                <div className="col-md-5">
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
                                    <div className="card-footer bg-light text-right">
                                        <button type="button" className="btn btn-secondary clear-form mr-2" onClick={handleRedirectToGasForm}>Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={handleRedirectToGasForm}>Submit</button>
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

export default GasForm;
