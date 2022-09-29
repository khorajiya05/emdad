import React, { useEffect } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { CSVLink } from "react-csv";
import * as excel from "exceljs";
import { saveAs } from "file-saver";
import { useDispatch, useSelector } from 'react-redux';



import { DatePicker } from "../../components";
import Pagination from "../../components/pagination/pagination";
import Report from './list';
import { TUserDetails } from '../../store/reports/reports.types';
import { ThunkDispatch } from 'redux-thunk';
import { getUserReportsActionThunk } from '../../store/reports/reports.actions.async';
import TRootState from '../../store/root.types';
import { AnyAction } from 'redux';
import UserReportsList from './UserReportsList';
import moment from 'moment';






const UserReports = () => {
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const user = useSelector((state: TRootState) => state?.reports?.userData?.users);


    /**
    * download csv and excel
    */
    const headers = [
        { key: "fullName", label: "Full Name" },
        { key: "phone", label: "Phone" },
        { key: "email", label: "Email Id" },
        { key: "totalOrders", label: "Total Orders" },
        { key: "createdDate", label: "Created Date" },
        { key: "status", label: "Status" }
    ];


    /**
   * xlsx file generate functionality
   * @param data
   * @param fileName
   */


    function generateXLSX(
        data: TUserDetails,
        fileName: any,
        header: { key: string, header: string, style?: any }[]
    ) {
        const workbook: excel.Workbook = new excel.Workbook();
        const sheet: excel.Worksheet = workbook.addWorksheet(fileName);
        sheet.getRow(1).font = { bold: true };
        sheet.columns = header;
        for (let item of data) {
            sheet.addRow({
                fullName: item?.name,
                phone: item?.phone,
                email: item?.email,
                totalOrders: item?.totalOrders,
                createdDate: moment(item?.date?.toString()).format("DD/MM/YYYY"),
                status: item?.status ? "Active" : "Not active",
            });
        }
        sheet.columns.forEach((column: any) => {
            const length: any = column.values?.map(
                (v: any) => v.toString().length + 20
            );
            const maxLength = Math.max(
                ...length.filter((v: number) => typeof v === "number")
            );
            column.width = maxLength;
        });
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], {
                type:
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            saveAs(blob, `${fileName}.xlsx`);
        });
    }

    useEffect(() => {
        dispatch(getUserReportsActionThunk())
    }, [dispatch])

    return (

        <Report >
            <div className="tab-pane fadeIn active" id="tab-1">
                <div className="px-3 pt-3 pb-2 d-flex justify-content-end">
                    <div className="m-l-10">
                        <div className="input-group w-250">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                title="Search"
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    className="input-group-text pointer"
                                >
                                    <span className="fa fa-search"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="m-l-10">
                        <div className="input-group d-flex">
                            <DatePicker />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="icon dripicons-calendar"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="m-l-10">
                        <button type="button" className="btn btn-primary2">
                            Submit
                        </button>
                    </div>
                    <div className="m-l-10">
                        <button type="button" className="btn btn-secondary">
                            Reset
                        </button>
                    </div>
                    <div className="m-l-10">
                        <Dropdown>
                            <Dropdown.Toggle
                                className="px-3 no-arrow"
                                variant="dark"
                                id="dropdown-basic"
                            >
                                <i className="fa fa-download text-white"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="w-150">
                                <Dropdown.Item
                                    href=""
                                    onClick={() => {
                                        generateXLSX(user, `User Reports`, [
                                            {
                                                key: "fullName",
                                                style: { alignment: { horizontal: "left" } },
                                                header: "Full Name"
                                            },
                                            {
                                                key: "phone",
                                                style: { alignment: { horizontal: "left" } },
                                                header: "Phone"
                                            },
                                            {
                                                key: "email",
                                                style: { alignment: { horizontal: "left" } },
                                                header: "Email Id"
                                            },
                                            {
                                                key: "totalOrders",
                                                style: { alignment: { horizontal: "left" } },
                                                header: "Total Orders"
                                            },
                                            {
                                                key: "createdDate",
                                                style: { alignment: { horizontal: "left" } },
                                                header: "Created Date"
                                            },
                                            {
                                                key: "status",
                                                style: { alignment: { horizontal: "left" } },
                                                header: "Status"
                                            }
                                        ]
                                        )
                                    }}
                                >
                                    <i className="fa fa-file-excel fa-fw mr-1"></i> Excel
                                </Dropdown.Item>
                                <CSVLink
                                    className="dropdown-item"
                                    data={user?.map((report) => ({
                                        ...report,
                                        fullName: report?.name,
                                        phone: report?.phone,
                                        email: report?.email,
                                        createdDate: report?.date,
                                        status: report?.status ? "Active" : "Not active",
                                        totalOrders: report?.totalOrders,
                                    }
                                    ))}
                                    headers={headers}
                                    filename={`User Reports`}
                                >
                                    <i className="fa fa-file-csv fa-fw mr-1"></i>
                                    CSV
                                </CSVLink>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <UserReportsList />
                <Pagination />
            </div>

        </Report>

    )
}

export default UserReports