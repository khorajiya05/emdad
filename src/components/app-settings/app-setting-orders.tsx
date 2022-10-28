import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAppSettingsDataActionThunk, updateAppSettingsDataActionThunk } from '../../store/appSettings/appSettings.actions.async';
import TRootState from '../../store/root.types';
import { BarsLoader } from '../loader/Loader';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { useNavigate } from 'react-router-dom';

const AppSettingOrders = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const { appSettingOrders, loading } = useSelector((state: TRootState) => state?.appSetting)

    const [value1, setValue1] = useState<string | number>(appSettingOrders[0]?.value);
    const [value2, setValue2] = useState<string | number>(appSettingOrders[1]?.value);
    const [value3, setValue3] = useState<string | number>(appSettingOrders[2]?.value);
    const [value4, setValue4] = useState<string | number>(appSettingOrders[3]?.value);
    const [value5, setValue5] = useState<string | number>(appSettingOrders[4]?.value);
    const [value6, setValue6] = useState<string | number>(appSettingOrders[5]?.value);
    const [value7, setValue7] = useState<string | number>(appSettingOrders[6]?.value);

    const [active1, setActive1] = useState(appSettingOrders[0]?.isActive);
    const [active2, setActive2] = useState(appSettingOrders[1]?.isActive);
    const [active3, setActive3] = useState(appSettingOrders[2]?.isActive);
    const [active4, setActive4] = useState(appSettingOrders[3]?.isActive);
    const [active5, setActive5] = useState(appSettingOrders[4]?.isActive);
    const [active6, setActive6] = useState(appSettingOrders[5]?.isActive);
    const [active7, setActive7] = useState(appSettingOrders[6]?.isActive);

    useEffect(() => {

        setValue1(appSettingOrders[0]?.value || 0);
        setValue2(appSettingOrders[1]?.value || 0);
        setValue3(appSettingOrders[2]?.value || 0);
        setValue4(appSettingOrders[3]?.value || 0);
        setValue5(appSettingOrders[4]?.value || 0);
        setValue6(appSettingOrders[5]?.value || 0);
        setValue7(appSettingOrders[6]?.value || 0);

        setActive1(appSettingOrders[0]?.isActive || false);
        setActive2(appSettingOrders[1]?.isActive || false);
        setActive3(appSettingOrders[2]?.isActive || false);
        setActive4(appSettingOrders[3]?.isActive || false);
        setActive5(appSettingOrders[4]?.isActive || false);
        setActive6(appSettingOrders[5]?.isActive || false);
        setActive7(appSettingOrders[6]?.isActive || false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appSettingOrders.length]);

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (
            value1 < 0 ||
            value2 < 0 ||
            value3 < 0 ||
            value4 < 0 ||
            value5 < 0 ||
            value6 < 0 ||
            value7 < 0 ||

            value1 === "" ||
            value2 === "" ||
            value3 === "" ||
            value4 === "" ||
            value5 === "" ||
            value6 === "" ||
            value7 === "" ||

            value1?.toString()?.length > 10 ||
            value2?.toString()?.length > 10 ||
            value3?.toString()?.length > 10 ||
            value4?.toString()?.length > 10 ||
            value5?.toString()?.length > 10 ||
            value6?.toString()?.length > 10 ||
            value7?.toString()?.length > 10

        ) {
            return;
        } else {
            dispatch(
                updateAppSettingsDataActionThunk({
                    appSettings: [
                        { id: appSettingOrders[0]?.id, isActive: active1, value: +value1 },
                        { id: appSettingOrders[1]?.id, isActive: active2, value: +value2 },
                        { id: appSettingOrders[2]?.id, isActive: active3, value: +value3 },
                        { id: appSettingOrders[3]?.id, isActive: active4, value: +value4 },
                        { id: appSettingOrders[4]?.id, isActive: active5, value: +value5 },
                        { id: appSettingOrders[5]?.id, isActive: active6, value: +value6 },
                        { id: appSettingOrders[6]?.id, isActive: active7, value: +value7 }
                    ],
                })
            );
        }
    };


    return (
        <div className="card-body p-0">
            <div className="tab-content">
                {loading ? (<BarsLoader />) : appSettingOrders?.length ? (
                    <div className="tab-pane fadeIn active" id="tab-1">
                        <form className="form-horizontal" onSubmit={submitHandler}>
                            <div className="card-body">
                                <div className="mt-3">
                                    <div className="form-group row">
                                        <label className="control-label text-md-right text-nowrap col-md-3">{appSettingOrders[0]?.label} <span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">SDG</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value1}
                                                    onChange={(e) => {
                                                        setValue1(e.target.value);
                                                    }}
                                                    step={0.1}
                                                />
                                            </div>
                                            {(value1 === "" ? <span className="text-danger">This field is required</span> : null) ||
                                                (value1 < 0 ? (
                                                    <span className="text-danger">
                                                        Please enter positive value <br />
                                                    </span>
                                                ) : null) ||
                                                (value1?.toString()?.length > 10 ? (
                                                    <span className="text-danger">Value is too long</span>
                                                ) : null)}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingOrders[1]?.label}<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">SDG</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value2}
                                                    onChange={(e) => {
                                                        setValue2(e.target.value);
                                                    }}
                                                    step={0.1}
                                                />
                                            </div>
                                            {(value2 === "" ? <span className="text-danger">This field is required</span> : null) ||
                                                (value2 < 0 ? (
                                                    <span className="text-danger">
                                                        Please enter positive value <br />
                                                    </span>
                                                ) : null) ||
                                                (value2?.toString()?.length > 10 ? (
                                                    <span className="text-danger">Value is too long</span>
                                                ) : null)}
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingOrders[2]?.label}<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value3}
                                                    onChange={(e) => {
                                                        setValue3(e.target.value);
                                                    }}
                                                    step={0.1}
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">kg</span>
                                                </div>
                                            </div>
                                            {(value3 === "" ? <span className="text-danger">This field is required</span> : null) ||
                                                (value3 < 0 ? (
                                                    <span className="text-danger">
                                                        Please enter positive value <br />
                                                    </span>
                                                ) : null) ||
                                                (value3?.toString()?.length > 10 ? (
                                                    <span className="text-danger">Value is too long</span>
                                                ) : null)}
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingOrders[3]?.label}<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value4}
                                                    onChange={(e) => {
                                                        setValue4(e.target.value);
                                                    }}
                                                    step={0.1}
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">kg</span>
                                                </div>
                                            </div>
                                            {(value4 === "" ? <span className="text-danger">This field is required</span> : null) ||
                                                (value4 < 0 ? (
                                                    <span className="text-danger">
                                                        Please enter positive value <br />
                                                    </span>
                                                ) : null) ||
                                                (value4?.toString()?.length > 10 ? (
                                                    <span className="text-danger">Value is too long</span>
                                                ) : null)}
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingOrders[4]?.label}<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <div className="input-group-append">
                                                    <span className="input-group-text">SDG</span>
                                                </div>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value5}
                                                    onChange={(e) => {
                                                        setValue5(e.target.value);
                                                    }}
                                                    step={0.1}
                                                />

                                            </div>
                                            {(value5 === "" ? <span className="text-danger">This field is required</span> : null) ||
                                                (value5 < 0 ? (
                                                    <span className="text-danger">
                                                        Please enter positive value <br />
                                                    </span>
                                                ) : null) ||
                                                (value5?.toString()?.length > 10 ? (
                                                    <span className="text-danger">Value is too long</span>
                                                ) : null)}
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingOrders[5]?.label}<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value6}
                                                    onChange={(e) => {
                                                        setValue6(e.target.value);
                                                    }}
                                                    step={0.1}
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">%</span>
                                                </div>
                                            </div>
                                            {(value6 === "" ? <span className="text-danger">This field is required</span> : null) ||
                                                (value6 < 0 ? (
                                                    <span className="text-danger">
                                                        Please enter positive value <br />
                                                    </span>
                                                ) : null) ||
                                                (value6?.toString()?.length > 10 ? (
                                                    <span className="text-danger">Value is too long</span>
                                                ) : null)}
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingOrders[6]?.label}<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value7}
                                                    onChange={(e) => {
                                                        setValue7(e.target.value);
                                                    }}
                                                    step={0.1}
                                                />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">kg</span>
                                                </div>
                                            </div>
                                            {(value7 === "" ? <span className="text-danger">This field is required</span> : null) ||
                                                (value7 < 0 ? (
                                                    <span className="text-danger">
                                                        Please enter positive value <br />
                                                    </span>
                                                ) : null) ||
                                                (value7?.toString()?.length > 10 ? (
                                                    <span className="text-danger">Value is too long</span>
                                                ) : null)}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3"></label>
                                        <div className="col-md-5">
                                            <label className="text-info"><strong>Note:</strong> If you put blank value in the system, we will consider default value=0.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-light text-right">
                                <button type="button" className="btn btn-secondary clear-form mr-2" onClick={() => navigate(-1)}>Cancel</button>
                                <button type="button" className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="card-body" style={{ textAlign: "center" }}>
                        No Data Found
                    </div>
                )
                }
            </div>
        </div >
    )
}

export default AppSettingOrders