import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { updateAppSettingsDataActionThunk } from '../../store/appSettings/appSettings.actions.async';
import { paginationPerPage } from '../../store/pagination/pagination.action';

import TRootState from '../../store/root.types';
import { BarsLoader } from '../loader/Loader';

function AppSettingGeneral() {

    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const { perPageItems } = useSelector((state: TRootState) => state?.pagination)
    const { appSettingGeneral, loading } = useSelector((state: TRootState) => state?.appSetting)

    const [perPage, setPerPage] = useState<string | number>(perPageItems)
    const [value1, setValue1] = useState<string | number>(appSettingGeneral[0]?.value);
    const [value2, setValue2] = useState<string | number>(appSettingGeneral[1]?.value);
    const [value3, setValue3] = useState<string | number>(appSettingGeneral[2]?.value);
    const [value4, setValue4] = useState<string | number>(appSettingGeneral[3]?.value);
    const [value5, setValue5] = useState<string | number>(appSettingGeneral[4]?.value);
    const [value6, setValue6] = useState<string | number>(appSettingGeneral[5]?.value);
    const [value7, setValue7] = useState<string | number>(appSettingGeneral[6]?.value);

    const [active1, setActive1] = useState(appSettingGeneral[0]?.isActive);
    const [active2, setActive2] = useState(appSettingGeneral[1]?.isActive);
    const [active3, setActive3] = useState(appSettingGeneral[2]?.isActive);
    const [active4, setActive4] = useState(appSettingGeneral[3]?.isActive);
    const [active5, setActive5] = useState(appSettingGeneral[4]?.isActive);
    const [active6, setActive6] = useState(appSettingGeneral[5]?.isActive);
    const [active7, setActive7] = useState(appSettingGeneral[6]?.isActive);


    useEffect(() => {
        if (appSettingGeneral.length < 1) {
            // dispatch(getAppSettingsDataActionThunk());
        }
        setValue1(appSettingGeneral[0]?.value || 0);
        setValue2(appSettingGeneral[1]?.value || 0);
        setValue3(appSettingGeneral[2]?.value || 0);
        setValue4(appSettingGeneral[3]?.value || 0);
        setValue5(appSettingGeneral[4]?.value || 0);
        setValue6(appSettingGeneral[5]?.value || 0);
        setValue7(appSettingGeneral[6]?.value || 0);

        setActive1(appSettingGeneral[0]?.isActive || false);
        setActive2(appSettingGeneral[1]?.isActive || false);
        setActive3(appSettingGeneral[2]?.isActive || false);
        setActive4(appSettingGeneral[3]?.isActive || false);
        setActive5(appSettingGeneral[4]?.isActive || false);
        setActive6(appSettingGeneral[5]?.isActive || false);
        setActive7(appSettingGeneral[6]?.isActive || false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appSettingGeneral.length]);

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
            value7?.toString()?.length > 10 ||

            perPage < 1 ||
            perPage === "" ||
            perPage?.toString()?.length > 10

        ) {
            return;
        } else {
            dispatch(
                updateAppSettingsDataActionThunk({
                    appSettings: [
                        { id: appSettingGeneral[0]?.id, isActive: active1, value: +value1 },
                        { id: appSettingGeneral[1]?.id, isActive: active2, value: +value2 },
                        { id: appSettingGeneral[2]?.id, isActive: active3, value: +value3 },
                        { id: appSettingGeneral[3]?.id, isActive: active4, value: +value4 },
                        { id: appSettingGeneral[4]?.id, isActive: active5, value: +value5 },
                        { id: appSettingGeneral[5]?.id, isActive: active6, value: +value6 },
                        { id: appSettingGeneral[6]?.id, isActive: active7, value: +value7 },
                    ],
                })
            );
            dispatch(paginationPerPage(+perPage));
        }
    };

    return (
        <div className="card-body p-0">
            <div className="tab-content">
                {loading ? (<BarsLoader />) : appSettingGeneral?.length ? (
                    <div className="tab-pane fadeIn active" id="tab-2">
                        <form className="form-horizontal" onSubmit={submitHandler}>
                            <div className="card-body">
                                <div className="mt-3">
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3"> {appSettingGeneral[0]?.label}<span className="text-danger">*</span></label>
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
                                        <div className="col-md-3 align-self-center">
                                            <input
                                                className="tgl tgl-light tgl-primary"
                                                id={`cb1`}
                                                type="checkbox"
                                                checked={active1}
                                                onChange={(e) => {
                                                    setActive1(e.target.checked);
                                                }}
                                            />
                                            <label className="tgl-btn m-0" htmlFor={`cb1`}></label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3"> {appSettingGeneral[1]?.label} <span className="text-danger">*</span></label>
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
                                        <div className="col-md-3 align-self-center">
                                            <input
                                                className="tgl tgl-light tgl-primary"
                                                id={`cb2`}
                                                type="checkbox"
                                                checked={active2}
                                                onChange={(e) => {
                                                    setActive2(e.target.checked);
                                                }}
                                            />
                                            <label className="tgl-btn m-0" htmlFor={`cb2`}></label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3"> {appSettingGeneral[2]?.label} <span className="text-danger">*</span></label>
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
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">%</span>
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
                                        <div className="col-md-3 align-self-center">
                                            <input
                                                className="tgl tgl-light tgl-primary"
                                                id={`cb3`}
                                                type="checkbox"
                                                checked={active3}
                                                onChange={(e) => {
                                                    setActive3(e.target.checked);
                                                }}
                                            />
                                            <label className="tgl-btn m-0" htmlFor={`cb3`}></label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingGeneral[3]?.label} <span className="text-danger">*</span></label>
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
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">%</span>
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
                                        <div className="col-md-3 align-self-center">
                                            <input
                                                className="tgl tgl-light tgl-primary"
                                                id={`cb4`}
                                                type="checkbox"
                                                checked={active4}
                                                onChange={(e) => {
                                                    setActive4(e.target.checked);
                                                }}
                                            />
                                            <label className="tgl-btn m-0" htmlFor={`cb4`}></label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingGeneral[4]?.label}<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
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
                                        <div className="col-md-3 align-self-center">
                                            <input
                                                className="tgl tgl-light tgl-primary"
                                                id={`cb5`}
                                                type="checkbox"
                                                checked={active5}
                                                onChange={(e) => {
                                                    setActive5(e.target.checked);
                                                }}
                                            />
                                            <label className="tgl-btn m-0" htmlFor={`cb5`}></label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingGeneral[5]?.label} <span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">

                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value6}
                                                    onChange={(e) => {
                                                        setValue6(e.target.value);
                                                    }}
                                                    step={1}
                                                />
                                                <div className="input-group-prepend">
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
                                        <div className="col-md-3 align-self-center">
                                            <input
                                                className="tgl tgl-light tgl-primary"
                                                id={`cb6`}
                                                type="checkbox"
                                                checked={active6}
                                                onChange={(e) => {
                                                    setActive6(e.target.checked);
                                                }}
                                            />
                                            <label className="tgl-btn m-0" htmlFor={`cb6`}></label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">{appSettingGeneral[6]?.label} <span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={value7}
                                                    onChange={(e) => {
                                                        setValue7(e.target.value);
                                                    }}
                                                    step={1}
                                                />
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
                                        <div className="col-md-3 align-self-center">
                                            <input
                                                className="tgl tgl-light tgl-primary"
                                                id={`cb7`}
                                                type="checkbox"
                                                checked={active7}
                                                onChange={(e) => {
                                                    setActive7(e.target.checked);
                                                }}
                                            />
                                            <label className="tgl-btn m-0" htmlFor={`cb7`}></label>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label text-md-right col-md-3">Per Page List Limit Page<span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={perPage}
                                                    onChange={(e) => {
                                                        setPerPage(e.target.value);
                                                    }}
                                                    step={1}
                                                />
                                            </div>
                                            {(perPage === "" ? <span className="text-danger">This field is required</span> : null) ||
                                                (perPage < 1 ? (
                                                    <span className="text-danger">
                                                        Please enter positive value (Minimum 1) <br />
                                                    </span>
                                                ) : null) ||
                                                (perPage?.toString()?.length > 10 ? (
                                                    <span className="text-danger">Value is too long</span>
                                                ) : null)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-light text-right">
                                <button type="button" className="btn btn-secondary clear-form mr-2" onClick={() => navigate(-1)}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Update</button>
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
        </div>

    )
}

export default AppSettingGeneral