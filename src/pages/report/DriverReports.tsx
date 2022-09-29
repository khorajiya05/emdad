import React, { useEffect, useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import Select from "react-select";
import { CSVLink } from "react-csv";
import * as excel from "exceljs";
import { saveAs } from "file-saver";

import { DatePicker } from "../../components";
import Pagination from "../../components/pagination/pagination";
import { TGetDriverReportsPayload } from '../../store/reports/reports.types';
import DriverReportsList from './DriverReportsList';
import Report from "./list";
import { useDispatch, useSelector } from 'react-redux';
import TRootState from '../../store/root.types';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getDriverReportsActionThunk } from '../../store/reports/reports.actions.async';






const SelectMembershipStatus = [
    { value: "All", label: "All" },
    { value: "Diesel", label: "Diesel" },
    { value: "Petrol", label: "Petrol" },
];

const SelectCustomerStatus = [
    { value: "All", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
];

const DriverReports = () => {
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const driver = useSelector((state: TRootState) => state?.reports.driverData.drivers);



    const [selectedValue, setSelectedValue] = useState("All");
    const [selectedValue2, setSelectedValue2] = useState("All");



    /**
     * download csv and excel
     */
    const headers = [
        { key: "make", label: "Make" },
        { key: "model", label: "Model" },
        { key: "numberPlate", label: "Number Plate" },
        { key: "vehicleFuelType", label: "Vehicle (Fuel Type)" },
        { key: "driverName", label: "Driver Name" },
        { key: "createdDate", label: "Created Date" },
        {key:"status", label:"Status"}
    ];



    /**
    * xlsx file generate functionality
    * @param data
    * @param fileName
    */

    function generateXLSX(
        data: TGetDriverReportsPayload,
        fileName: any,
        header: { key: string, header: string, style?: any }[]
    ) {
        const workbook: excel.Workbook = new excel.Workbook();
        const sheet: excel.Worksheet = workbook.addWorksheet(fileName);
        sheet.getRow(1).font = { bold: true };
        sheet.columns = header;
        for (let item of data) {
            sheet.addRow({
                make: item?.make,
                model: item?.model,
                numberPlate: item?.numberPlate,
                vehicleFuelType: item?.vehicleFuelType,
                driverName: item?.driverName,
                createdDate: item?.createdDate,
                status: item?.status
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


    useEffect(()=>{
        dispatch(getDriverReportsActionThunk())
    },[dispatch]);

    return (

        <Report >
            <div className="tab-pane fadeIn active" id="tab-2">
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
                        <Dropdown>
                            <Dropdown.Toggle
                                className="btn btn-secondary"
                                id="dropdown-basic"
                            >
                                <i className="fa fa-filter fa-fw"></i> Filter
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <div className="p-3">
                                    <b>Choose filters</b>
                                </div>
                                <form id="filter-form" className="px-3">
                                    <div className="form-group">
                                        <label>Vehicle (Fuel Type)</label>
                                        <Select
                                            className="custom-select-dropdown"
                                            value={
                                                selectedValue
                                                    ? (SelectMembershipStatus || []).find(
                                                        (prod) =>
                                                            prod.value === selectedValue
                                                    ) || null
                                                    : null
                                            }
                                            onChange={(val) =>
                                                setSelectedValue(
                                                    (val && val.value) || ""
                                                )
                                            }
                                            placeholder="-- Select --"
                                            options={SelectMembershipStatus || []}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Status</label>
                                        <Select
                                            className="custom-select-dropdown"
                                            value={
                                                selectedValue2
                                                    ? (SelectCustomerStatus || []).find(
                                                        (prod) =>
                                                            prod.value === selectedValue2
                                                    ) || null
                                                    : null
                                            }
                                            onChange={(val) =>
                                                setSelectedValue2(
                                                    (val && val.value) || ""
                                                )
                                            }
                                            placeholder="-- Select --"
                                            options={SelectCustomerStatus || []}
                                        />
                                    </div>
                                </form>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="m-l-10">
                        <button type="button" className="btn btn-primary2">
                            Submit
                        </button>
                    </div>
                    <div className="m-l-10">
                        <button type="button" className="btn btn-secondary">Reset</button>
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
                                        generateXLSX(driver, `Driver reports`, [
                                            {
                                                key: "make",
                                                header: "Make",
                                                style: { alignment: { horizontal: "left" } }
                                            },
                                            {
                                                key: "model",
                                                header: "Model",
                                                style: { alignment: { horizontal: "left" } }
                                            },
                                            {
                                                key: "numberPlate",
                                                header: "Number Plate",
                                                style: { alignment: { horizontal: "left" } }
                                            },
                                            {
                                                key: "vehicleFuelType",
                                                header: "Vehicle(Fuel Type)",
                                                style: { alignment: { horizontal: "left" } }
                                            },
                                            {
                                                key: "driverName",
                                                header: "Driver Name",
                                                style: { alignment: { horizontal: "left" } }
                                            },
                                            {
                                                key: "createdDate",
                                                header: "Created Date",
                                                style: { alignment: { horizontal: "left" } }
                                            },
                                            {
                                                key:"status",
                                                header:"Status",
                                                style: { alignment: { horizontal: "left" } }
                                            }
                                        ])
                                    }}
                                >
                                    <i className="fa fa-file-excel fa-fw mr-1"></i> Excel
                                </Dropdown.Item>
                                <CSVLink
                                    className="dropdown-item"
                                    data={driver?.map((report) => ({
                                        ...report,
                                        make: report?.make,
                                        model: report?.model,
                                        numberPlate: report?.numberPlate,
                                        vehicleFuelType: report?.vehicleFuelType,
                                        driverName: report?.driverName,
                                        createdDate: report?.createdDate,
                                        status:report?.status
                                    }))}
                                    headers={headers}
                                    filename={`Driver report`}
                                >
                                    <i className="fa fa-file-csv fa-fw mr-1"></i>
                                    CSV
                                </CSVLink>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <DriverReportsList />
                <Pagination />
            </div>

        </Report>
    )
}

export default DriverReports