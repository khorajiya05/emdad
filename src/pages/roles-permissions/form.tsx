import _ from 'lodash';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { getRoleByIdActionThunk } from "../../store/roleAndPermission/rolesAndPermissions.action.async";
import TRootState from "../../store/root.types";

interface Roles {
    [key: string]: boolean | number | Record<string, any> | undefined;
    add: boolean;
    all: boolean;
    delete: boolean;
    edit: boolean;
    id?: number;
    index: boolean;
    module: {
        id: number;
        name: string;
        parentId: number;
        child?: any[];
    };
    view: boolean;
}

const RolesPermissionsForm: React.FC = () => {

    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
    const navigate = useNavigate();

    const singleRolesData = useSelector((state: TRootState) => state.rolesAndPermissions?.singleRoleData);
    const moduleData: { id: number, name: string, parentId: any, child?: any[] | undefined }[] = [
        {
            id: 1,
            name: "Dashboard",
            parentId: null
        },
        {
            id: 2,
            name: "Orders",
            parentId: null
        },
        {
            id: 3,
            name: "Pending Orders",
            parentId: 2
        },
        {
            id: 4,
            name: "Orders History",
            parentId: 2
        },

        {
            id: 5,
            name: "Vendors",
            parentId: null
        },
        {
            id: 6,
            name: "Drivers",
            parentId: null
        },
        {
            id: 7,
            name: "Users",
            parentId: null
        },
        {
            id: 8,
            name: "Vehicles",
            parentId: null
        },
        {
            id: 9,
            name: "Gas",
            parentId: null
        },
        {
            id: 10,
            name: "Fuel",
            parentId: null
        },
        {
            id: 11,
            name: "Reports",
            parentId: null
        },
        {
            id: 12,
            name: "My Profile",
            parentId: null
        },
        {
            id: 13,
            name: "Geofences",
            parentId: null
        },
        {
            id: 14,
            name: "Vendors Category",
            parentId: null
        },
        {
            id: 15,
            name: "Vehicle (Fuel Type)",
            parentId: null
        },
        {
            id: 16,
            name: "Referral Code",
            parentId: null
        },
        {
            id: 17,
            name: "Time Slots",
            parentId: null
        },
        {
            id: 18,
            name: "Roles & Permissions",
            parentId: null
        },
        {
            id: 19,
            name: "Sub Admins",
            parentId: null
        },
        {
            id: 20,
            name: "Notifications",
            parentId: null
        },
        {
            id: 21,
            name: "App Settings",
            parentId: null
        },
        {
            id: 22,
            name: "Email Templates",
            parentId: null
        },
        {
            id: 23,
            name: "CMS Pages",
            parentId: null
        },
        {
            id: 24,
            name: "Driver Handbook",
            parentId: null
        },
        {
            id: 25,
            name: "FAQs",
            parentId: null
        }

    ]

    const { id } = useParams<{ id: string }>();
    const [modifiedData, setModifiedData] = useState<Roles[]>([]);

    const handleRedirectToRolespermissions = () => {
        navigate("/roles-permissions/list");
    };

    const checkall = (val: Roles | undefined, key: string, innerKey?: string) => {
        if (key === "permission") {
            if (innerKey === "all") {
                const temp = [];
                for (let role of modifiedData) {
                    if (role?.module?.child) {
                        for (let innerRole of role?.module?.child) {
                            if (
                                innerRole?.delete &&
                                innerRole?.edit &&
                                innerRole?.add &&
                                innerRole?.index &&
                                innerRole?.view
                            ) {
                                temp.push(innerRole);
                            }
                        }
                    }
                    if (
                        role?.delete &&
                        role?.edit &&
                        role?.add &&
                        role?.index &&
                        role?.view &&
                        role?.module?.name !== "permission"
                    ) {
                        temp.push(role);
                    }
                }
                val &&
                    (val.all =
                        temp.length ===
                        moduleData?.length -
                        modifiedData?.filter((module) => module?.module?.child).length);
                return val && val.all;
            } else {
                const temp = [];
                for (let role of modifiedData) {
                    if (role?.module?.child) {
                        for (let innerRole of role?.module?.child) {
                            if (innerRole[`${innerKey}`]) {
                                temp.push(innerRole);
                            }
                        }
                    }
                    if (role[`${innerKey}`] && role?.module?.name !== "permission") {
                        temp.push(false);
                    }
                }
                val &&
                    (val[`${innerKey}`] =
                        temp.length ===
                        moduleData?.length -
                        modifiedData?.filter((module) => module?.module?.child).length);
                return val && (val[`${innerKey}`] as boolean);
            }
        }

        const allCheck =
            val && val.add && val.edit && val.delete && val.index && val.view;

        val && (val.all = allCheck || false);
        return val && val.all;
    };

    const updatedStatus = (
        role: {
            [key: string]: boolean | number | Record<string, any> | undefined;
            all: boolean;
            index: boolean;
            add: boolean;
            edit: boolean;
            view: boolean;
            delete: boolean;
            id?: number;
            module: {
                id: number;
                name: string;
                parentId: number;
                child?: any[];
            };
        } | null,
        permission: string,
        checkedValue: boolean,
        childKey?: number
    ) => {
        // setPermissionError(false);
        const cloneData = _.cloneDeep(modifiedData);
        if (role?.module?.name === "permission") {
            if (permission === "all") {
                for (let permission of cloneData) {
                    if (permission?.module?.child) {
                        for (let innerRole of permission?.module?.child) {
                            innerRole.add = checkedValue;
                            innerRole.all = checkedValue;
                            innerRole.delete = checkedValue;
                            innerRole.edit = checkedValue;
                            innerRole.index = checkedValue;
                            innerRole.view = checkedValue;
                        }
                    } else {
                        permission.add = checkedValue;
                        permission.all = checkedValue;
                        permission.delete = checkedValue;
                        permission.edit = checkedValue;
                        permission.index = checkedValue;
                        permission.view = checkedValue;
                    }
                }
            } else {
                for (let role of cloneData) {
                    if (role?.module.child) {
                        for (let innerRole of role?.module.child) {
                            innerRole[`${permission}`] = checkedValue;
                        }
                    } else {
                        role[`${permission}`] = checkedValue;
                    }
                }
            }
        } else if (childKey) {
            if (role && role?.module?.child) {
                if (permission === "all") {
                    for (let child of role.module?.child) {
                        if (child?.module?.id === childKey) {
                            child.all = checkedValue;
                            child.edit = checkedValue;
                            child.view = checkedValue;
                            child.index = checkedValue;
                            child.delete = checkedValue;
                            child.add = checkedValue;
                        }
                    }
                } else {
                    role.module?.child?.map((child) =>
                        child?.module?.id === childKey
                            ? (child[`${permission}`] = checkedValue)
                            : child
                    );
                }
                const roleIndex = cloneData?.findIndex(
                    (data) => data?.module?.id === role?.module?.id
                );
                cloneData[roleIndex] = role;
            }
        } else {
            const roleId = modifiedData?.findIndex(
                (permission) => permission?.module?.id === role?.module?.id
            );
            if (roleId > -1) {
                if (permission === "all") {
                    cloneData[roleId].add = checkedValue;
                    cloneData[roleId].delete = checkedValue;
                    cloneData[roleId].edit = checkedValue;
                    cloneData[roleId].index = checkedValue;
                    cloneData[roleId].view = checkedValue;
                    cloneData[roleId].all = checkedValue;
                } else {
                    cloneData[roleId][`${permission}`] = checkedValue;
                }
            }
        }
        setModifiedData(cloneData);
    };

    useEffect(() => {
        if (id !== "new") {
            dispatch(getRoleByIdActionThunk(id || "1"));
        }
    }, [dispatch, id])

    useEffect(() => {

        if (singleRolesData?.permissions && id !== "new") {
            for (let permission of modifiedData) {
                if (permission?.module?.child) {
                    for (let innerPermission of permission?.module?.child) {
                        const roleIndex = singleRolesData?.permissions?.findIndex(
                            (singlePrmission) =>
                                singlePrmission?.module?.id === innerPermission?.module?.id
                        );
                        if (roleIndex > -1) {
                            innerPermission.edit =
                                singleRolesData?.permissions[roleIndex].edit;
                            innerPermission.add = singleRolesData?.permissions[roleIndex].add;
                            innerPermission.view =
                                singleRolesData?.permissions[roleIndex].view;
                            innerPermission.index =
                                singleRolesData?.permissions[roleIndex].index;
                            innerPermission.delete =
                                singleRolesData?.permissions[roleIndex].delete;
                        }
                    }
                } else {
                    const roleIndex = singleRolesData?.permissions?.findIndex(
                        (singlePrmission) =>
                            singlePrmission?.module?.id === permission?.module?.id
                    );
                    if (roleIndex > -1) {
                        permission.edit = singleRolesData?.permissions[roleIndex].edit;
                        permission.add = singleRolesData?.permissions[roleIndex].add;
                        permission.view = singleRolesData?.permissions[roleIndex].view;
                        permission.index = singleRolesData?.permissions[roleIndex].index;
                        permission.delete = singleRolesData?.permissions[roleIndex].delete;
                    }
                }
            }
            setModifiedData(modifiedData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [singleRolesData, moduleData]);


    useEffect(() => {
        if (modifiedData?.length <= 1) {
            const cloneModuleData = _.cloneDeep(moduleData);
            for (let i of cloneModuleData) {
                if (i.parentId) {
                    const index = moduleData.findIndex((j) => j.id === i.parentId);
                    if (index > -1) {
                        const temp = cloneModuleData[index]["child"] || [];
                        temp.push({
                            module: i,
                            all: false,
                            index: false,
                            add: false,
                            edit: false,
                            view: false,
                            delete: false,
                        });
                        cloneModuleData[index]["child"] = temp;
                    }
                }
            }
            const updatedPermission = cloneModuleData
                .filter((moduleData) => !moduleData?.parentId)
                ?.map((permission) => ({
                    all: false,
                    index: false,
                    add: false,
                    edit: false,
                    view: false,
                    delete: false,
                    module: permission,
                }));
            updatedPermission.splice(0, 0, {
                all: false,
                index: false,
                add: false,
                edit: false,
                view: false,
                delete: false,
                module: {
                    name: "permission",
                    id: -1,
                    parentId: -1 || -1,
                },
            });
            setModifiedData(updatedPermission);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moduleData])



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
                                    <h1>Add New Role</h1>
                                </div>
                                <div className="m-l-10">
                                    <button className="btn btn-secondary" onClick={handleRedirectToRolespermissions}>
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
                                                <label className="control-label text-md-right col-md-3">Role Name <span className="text-danger">*</span></label>
                                                <div className="col-md-5">
                                                    <input type="text" className="form-control" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="control-label text-md-right col-md-3">Status <span className="text-danger">*</span></label>
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
                                    <div className="card-body p-0">
                                        <div className="table-responsive table-thead-fix">
                                            <table className="table m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Permission</th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0">
                                                                All
                                                                <input type="checkbox"
                                                                    checked={modifiedData?.length > 1
                                                                        ? checkall(
                                                                        modifiedData?.find(
                                                                            (data) =>
                                                                                data?.module?.name === "permission"
                                                                        ),
                                                                        "permission",
                                                                        "all"
                                                                    ) : false}
                                                                    onChange={(e) => {
                                                                        updatedStatus(
                                                                            modifiedData?.find(
                                                                                (data) =>
                                                                                    data?.module?.name === "permission"
                                                                            ) || null,
                                                                            "all",
                                                                            e.target.checked
                                                                        );
                                                                    }}
                                                                />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0">
                                                                Index

                                                                <input type="checkbox"
                                                                    checked={modifiedData?.length > 1
                                                                        ? checkall(
                                                                        modifiedData?.find(
                                                                            (data) =>
                                                                                data?.module?.name === "permission"
                                                                        ),
                                                                        "permission",
                                                                        "index"
                                                                    ) : false}
                                                                    onChange={(e) => {
                                                                        updatedStatus(
                                                                            modifiedData?.find(
                                                                                (data) =>
                                                                                    data?.module?.name === "permission"
                                                                            ) || null,
                                                                            "index",
                                                                            e.target.checked
                                                                        );
                                                                    }}
                                                                />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0">
                                                                Add
                                                                <input type="checkbox"
                                                                    checked={
                                                                        modifiedData?.length > 1
                                                                            ? checkall(
                                                                                modifiedData?.find(
                                                                                    (data) =>
                                                                                        data?.module?.name ===
                                                                                        "permission"
                                                                                ),
                                                                                "permission",
                                                                                "add"
                                                                            )
                                                                            : false
                                                                    }
                                                                    onChange={(e) => {
                                                                        updatedStatus(
                                                                            modifiedData?.find(
                                                                                (data) =>
                                                                                    data?.module?.name === "permission"
                                                                            ) || null,
                                                                            "add",
                                                                            e.target.checked
                                                                        );
                                                                    }}

                                                                />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0">
                                                                Edit
                                                                <input type="checkbox"
                                                                    checked={checkall(
                                                                        modifiedData?.find(
                                                                            (data) =>
                                                                                data?.module?.name === "permission"
                                                                        ),
                                                                        "permission",
                                                                        "edit"
                                                                    )}
                                                                    onChange={(e) => {
                                                                        updatedStatus(
                                                                            modifiedData?.find(
                                                                                (data) =>
                                                                                    data?.module?.name === "permission"
                                                                            ) || null,
                                                                            "edit",
                                                                            e.target.checked
                                                                        );
                                                                    }}
                                                                />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0">
                                                                View
                                                                <input type="checkbox"
                                                                    checked={
                                                                        modifiedData?.length > 1
                                                                            ? checkall(
                                                                                modifiedData?.find(
                                                                                    (data) =>
                                                                                        data?.module?.name ===
                                                                                        "permission"
                                                                                ),
                                                                                "permission",
                                                                                "view"
                                                                            )
                                                                            : false
                                                                    }

                                                                    onChange={(e) => {
                                                                        updatedStatus(
                                                                            modifiedData?.find(
                                                                                (data) =>
                                                                                    data?.module?.name === "permission"
                                                                            ) || null,
                                                                            "view",
                                                                            e.target.checked
                                                                        );
                                                                    }}
                                                                />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                        <th>
                                                            <label className="control control-outline control-primary control--checkbox m-0">
                                                                Delete
                                                                <input type="checkbox"
                                                                    checked={checkall(
                                                                        modifiedData?.find(
                                                                            (data) =>
                                                                                data?.module?.name === "permission"
                                                                        ),
                                                                        "permission",
                                                                        "delete"
                                                                    )}
                                                                    onChange={(e) => {
                                                                        updatedStatus(
                                                                            modifiedData?.find(
                                                                                (data) =>
                                                                                    data?.module?.name === "permission"
                                                                            ) || null,
                                                                            "delete",
                                                                            e.target.checked
                                                                        );
                                                                    }}
                                                                />
                                                                <div className="control__indicator"></div>
                                                            </label>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {modifiedData?.map((data) => {
                                                        return !data?.module?.child &&
                                                            data?.module?.name !== "permission" ? (
                                                            <tr key={data?.id}>
                                                                <td>{data?.module?.name} </td>
                                                                <td>
                                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                        <input type="checkbox"
                                                                            checked={checkall(
                                                                                data,
                                                                                data?.module?.name
                                                                            )}
                                                                            onChange={(e) => {
                                                                                updatedStatus(
                                                                                    data,
                                                                                    "all",
                                                                                    e.target.checked
                                                                                );
                                                                            }}
                                                                        />
                                                                        <div className="control__indicator"></div>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                        <input type="checkbox"
                                                                            checked={data.index || false}
                                                                            onChange={(e) => {
                                                                                updatedStatus(
                                                                                    data,
                                                                                    "index",
                                                                                    e.target.checked
                                                                                );
                                                                            }}
                                                                        />
                                                                        <div className="control__indicator"></div>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                        <input type="checkbox"
                                                                            checked={data?.add}
                                                                            onChange={(e) => {
                                                                                updatedStatus(
                                                                                    data,
                                                                                    "add",
                                                                                    e.target.checked
                                                                                );
                                                                            }}
                                                                        />
                                                                        <div className="control__indicator"></div>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                        <input type="checkbox"
                                                                            checked={data?.edit}
                                                                            onChange={(e) => {
                                                                                updatedStatus(
                                                                                    data,
                                                                                    "edit",
                                                                                    e.target.checked
                                                                                );
                                                                            }}
                                                                        />
                                                                        <div className="control__indicator"></div>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                        <input type="checkbox"
                                                                            checked={data?.view}
                                                                            onChange={(e) => {
                                                                                updatedStatus(
                                                                                    data,
                                                                                    "view",
                                                                                    e.target.checked
                                                                                );
                                                                            }}
                                                                        />
                                                                        <div className="control__indicator"></div>
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                        <input type="checkbox"
                                                                            checked={data?.delete}
                                                                            onChange={(e) => {
                                                                                updatedStatus(
                                                                                    data,
                                                                                    "delete",
                                                                                    e.target.checked
                                                                                );
                                                                            }}
                                                                        />
                                                                        <div className="control__indicator"></div>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                        ) : (
                                                            data?.module?.name !== "permission" && (
                                                                <React.Fragment>
                                                                    <tr key={data?.id}>
                                                                        <td>{data?.module?.name} </td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                        <td></td>
                                                                    </tr>
                                                                    {data?.module?.child?.map((innerData) => (
                                                                        <tr key={innerData?.id}>
                                                                            <td style={{ textIndent: "40px" }}>
                                                                                {innerData?.module?.name + " "}
                                                                            </td>
                                                                            <td>
                                                                                <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                                    <input type="checkbox"
                                                                                        checked={checkall(
                                                                                            innerData,
                                                                                            "all",
                                                                                            innerData?.module?.name
                                                                                        )}
                                                                                        onChange={(e) => {
                                                                                            updatedStatus(
                                                                                                data,
                                                                                                "all",
                                                                                                e.target.checked,
                                                                                                innerData?.module?.id
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                    <div className="control__indicator"></div>
                                                                                </label>
                                                                            </td>
                                                                            <td>
                                                                                <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        checked={innerData?.index}
                                                                                        onChange={(e) => {
                                                                                            updatedStatus(
                                                                                                data,
                                                                                                "index",
                                                                                                e.target.checked,
                                                                                                innerData?.module?.id
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                    <div className="control__indicator"></div>
                                                                                </label>
                                                                            </td>
                                                                            <td>
                                                                                <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                                    <input type="checkbox"
                                                                                        checked={innerData?.add}
                                                                                        onChange={(e) => {
                                                                                            updatedStatus(
                                                                                                data,
                                                                                                "add",
                                                                                                e.target.checked,
                                                                                                innerData?.module?.id
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                    <div className="control__indicator"></div>
                                                                                </label>
                                                                            </td>
                                                                            <td>
                                                                                <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                                    <input type="checkbox"
                                                                                        checked={innerData?.edit}
                                                                                        onChange={(e) => {
                                                                                            updatedStatus(
                                                                                                data,
                                                                                                "edit",
                                                                                                e.target.checked,
                                                                                                innerData?.module?.id
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                    <div className="control__indicator"></div>
                                                                                </label>
                                                                            </td>
                                                                            <td>
                                                                                <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                                    <input type="checkbox"
                                                                                        checked={innerData?.view}
                                                                                        onChange={(e) => {
                                                                                            updatedStatus(
                                                                                                data,
                                                                                                "view",
                                                                                                e.target.checked,
                                                                                                innerData?.module?.id
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                    <div className="control__indicator"></div>
                                                                                </label>
                                                                            </td>
                                                                            <td>
                                                                                <label className="control control-outline control-primary control--checkbox m-0"> &nbsp;
                                                                                    <input type="checkbox"
                                                                                        checked={innerData?.delete}
                                                                                        onChange={(e) => {
                                                                                            updatedStatus(
                                                                                                data,
                                                                                                "delete",
                                                                                                e.target.checked,
                                                                                                innerData?.module?.id
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                    <div className="control__indicator"></div>
                                                                                </label>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </React.Fragment>
                                                            )
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-light text-right">
                                        <button type="button" className="btn btn-secondary clear-form mr-2" onClick={handleRedirectToRolespermissions}>Cancel</button>
                                        <button type="button" className="btn btn-primary" onClick={handleRedirectToRolespermissions}>Submit</button>
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

export default RolesPermissionsForm;