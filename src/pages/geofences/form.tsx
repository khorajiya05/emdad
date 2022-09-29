import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { DatePicker } from "../../components";
import CKEditor from "../../components/CKeditor/CKEditor";
const GeofencesForm: React.FC = () => {

    const [tabValue, setTabValue] = useState<number>(1);
    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleRedirectToGasForm = () => {
        navigate("/geofences/list");
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
                                    <h1>Add Geofence</h1>
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
                                            <div className="form-group row">
                                                <label className="control-label text-md-right text-nowrap col-md-3">Geofence Name<span className="text-danger">*</span></label>
                                                <div className="col-md-5">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label text-md-right col-md-3"> Map <span className="text-danger">*</span></label>
                                                <div className="col-md-7">
                                                    <div className="input-group">
                                                        
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8219652911444!2d72.49649711496726!3d22.993573384967775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84576f8f3c2d%3A0x43df72e8efb0b1ac!2sPeerbits!5e0!3m2!1sen!2sin!4v1635418479463!5m2!1sen!2sin"
                                                            width="100%"
                                                            height="400"
                                                            style={{ border: "0" }}
                                                            allowFullScreen={true}
                                                            loading="lazy"
                                                        ></iframe>
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

export default GeofencesForm;
