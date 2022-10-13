import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { components } from "react-select";
import makeAnimated from "react-select/animated";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import MultiSelectCheckbox from "../../components/multi-group-select/MultiGroupSelect";
import CKEditor from "../../components/CKeditor/CKEditor";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { BarsLoader } from "../../components/loader/Loader";
import { divide } from "lodash";

const Option = (props: any) => {
    return (
        <div>
            <components.Option {...props}>
                <div className="d-flex align-items-center">
                    <label htmlFor="" className="m-0 ml-2">{props?.label}</label>
                </div>
            </components.Option>
        </div>
    )
}

const animatedComponents = makeAnimated();


const Notificationform: React.FC = () => {

    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
    const navigate = useNavigate();

    const customers: any[] = [];
    const customersLoading = false;

    const drivers: any[] = [];
    const driversLoading = false;


    const [tabValue, setTabValue] = useState<number>(1);
    const [show, setShow] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [pageData, setPageData] = useState("");
    const [descriptionError, setDescriptionError] = useState(false);

    const handleRedirectToBack = () => {
        navigate(-1);
    };

    const initialValues: { notifyTo: string; customerId: []; } = { notifyTo: "", customerId: [] };

    const notificationSchema = yup.object().shape({
        notifyTo: yup.string().required("Notify to is required."),
        customerId: yup.array().when(["selectedDrivers", "selectedCustomers"], {
            is: () => formik?.values?.notifyTo === "selectedDrivers" || formik?.values?.notifyTo === "selectedCustomers",
            then: (schema) => schema.of(yup.object().shape({ value: yup.string(), label: yup.string() })).min(1, "Please select atleast one customer"),
            otherwise: (schema) => schema.nullable()
        })
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: notificationSchema,
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values))
            resetForm();
        }
    })

    const { errors, touched } = formik;

    return (
        <React.Fragment>
            <Header />
            <div id="app">
                <Sidebar />
                <div className="content-wrapper">
                    {customersLoading || driversLoading ? (
                        <BarsLoader />
                    ) : (
                        <div className="content">
                            <header className="page-header">
                                <div className="d-flex align-items-center">
                                    <div className="mr-auto">
                                        <h1>Send New Notification</h1>
                                    </div>
                                    <div className="m-l-10">
                                        <button className="btn btn-secondary" onClick={handleRedirectToBack}>
                                            <i className="fa fa-angle-left">&nbsp;</i> Back
                                        </button>
                                    </div>
                                </div>
                            </header>
                            <section className="page-content container-fluid">
                                <div className="card">
                                    <form className="form-horizontal" onSubmit={formik?.handleSubmit}>
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
                                                                <select className="custom-select form-control" value={formik?.values?.notifyTo} onChange={(e) => {
                                                                    formik.setValues({
                                                                        ...formik?.values,
                                                                        notifyTo: e?.target?.value,
                                                                        customerId: [],
                                                                    });
                                                                }}>
                                                                    <option value="">-- Select --</option>
                                                                    <option value="allCustomers">All Customers</option>
                                                                    <option value="allDrivers">All Drivers</option>
                                                                    <option value="selectedCustomers">Selected Customers</option>
                                                                    <option value="selectedDrivers">Selected Drivers</option>
                                                                </select>
                                                                {errors?.notifyTo && touched?.notifyTo && <div className="text-danger">{errors?.notifyTo}</div>}
                                                            </div>
                                                        </div>
                                                        {
                                                            (formik?.values?.notifyTo === "selectedCustomers" || formik?.values?.notifyTo === "selectedDrivers") && (
                                                                <div className="col-md-6 ">
                                                                    <div className="form-group">
                                                                        <label htmlFor="" className="control-label">Select {formik?.values?.notifyTo === "selectedDrivers" ? "Driver's" : "Customer's"} Name
                                                                            <span className="text-danger">*</span>
                                                                        </label>
                                                                        <div data-toggle="popover" data-trigger="focus">
                                                                            <MultiSelectCheckbox
                                                                                className="custom-select-dropdown"
                                                                                options={formik?.values?.notifyTo === "selectedCustomers" ? customers?.map((customer) => ({ value: customer?.id, label: customer?.name })) : drivers?.map((customer) => ({ value: customer?.id, label: customer?.name }))}
                                                                                isMulti
                                                                                closeMenuOnSelect={false}
                                                                                hideSelectedOptions={false}
                                                                                components={{
                                                                                    Option,
                                                                                    animatedComponents,
                                                                                }}
                                                                                onChange={(selectd: any) => formik?.setValues({ ...formik?.values, customerId: selectd })}
                                                                                value={formik?.values?.customerId}
                                                                            />
                                                                            {errors?.customerId && touched?.customerId && (<div className="text-danger">{(errors as { customerId: string }).customerId}</div>)}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="control-label text-md-right">
                                                                    Notification Message
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <div>
                                                                    <CKEditor
                                                                        setPageData={setPageData}
                                                                        data={pageData || ""}
                                                                        setDescriptionError={setDescriptionError}
                                                                    />
                                                                    {descriptionError && (<div className="text-danger"> Description is required </div>)}
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
                                                onClick={handleRedirectToBack}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Notificationform;
