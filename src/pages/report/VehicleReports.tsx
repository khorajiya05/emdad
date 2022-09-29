import React, { useEffect } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { CSVLink } from "react-csv";
import * as excel from "exceljs";
import { saveAs } from "file-saver";


import { DatePicker } from "../../components";
import Select from "react-select";
import Pagination from "../../components/pagination/pagination";
import Report from './list';
import VehicleReportsList from './VehicleReportsList';
import { TGetVehicleReportsPayload } from '../../store/reports/reports.types';
import { useDispatch, useSelector } from 'react-redux';
import TRootState from '../../store/root.types';
import { getVehicleReportsActionThunk } from '../../store/reports/reports.actions.async';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';


const SelectDriver = [
    { value: "All", label: "All" },
    { value: "Diesel", label: "Diesel" },
    { value: "Petrol", label: "Petrol" },
];

function VehicleReports() {
    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const vehicle = useSelector((state: TRootState) => state.reports.vehicleData.vehicles)

    /**
   * download csv and excel
   */
    const headers = [
        { key: "fullName", label: "Full Name" },
        { key: "phone", label: "Phone" },
        { key: "email", label: "Email Id" },
        { key: "postalCode", label: "Assigned Postalcode" },
        { key: "vehicleFuelType", label: "Vehicle (Fuel Type)" },
        { key: "createdDate", label: "Created Date" },
        { key: "status", label: "Status" }
    ];

    /**
     * xlsx file generated functionality
     * @param data
     * @param filename
     */

    function generateXLSX(
        data: TGetVehicleReportsPayload,
        fileName: any,
        header: { key: string, header: string, style?: any }[]
    ) {
        const workbook: excel.Workbook = new excel.Workbook();
        const sheet: excel.Worksheet = workbook.addWorksheet(fileName);
        sheet.getRow(1).font = { bold: true };
        sheet.columns = header;
        for (let item of data) {
            sheet.addRow({
                fullName: item?.fullName,
                phone: item?.phone,
                email: item?.email,
                postalCode: item?.postalCode,
                vehicleFuelType: item?.vehicleFuelType,
                createdDate: item?.createdDate,
                status: item?.status
            });
        };
        sheet.columns.forEach((column: any) => {
            const length: any = column.values?.map(
                (v: any) => v.toString().length + 20
            );
            const maxLength = Math.max(
                ...length.filter((v: number) => typeof v === "number")
            );
            column.width = maxLength
        });
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            saveAs(blob, `${fileName}.xlsx`);
        })
    }

    useEffect(() => {
        dispatch(getVehicleReportsActionThunk())
    }, [dispatch])

    const selectedValue4 = "All";
    return (
        <Report>
            <div className="tab-pane fadeIn active" id="tab-3">
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
                                        <label>--Vehicle (Fuel Type0)--</label>
                                        <Select
                                            className="custom-select-dropdown"
                                            value={
                                                selectedValue4
                                                    ? (SelectDriver || []).find(
                                                        (prod) =>
                                                            prod.value === selectedValue4
                                                    ) || null
                                                    : null
                                            }
                                            onChange={(val) =>
                                                (val && val.value) || ""
                                            }
                                            placeholder="-- Select --"
                                            options={SelectDriver || []}
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
                                <Dropdown.Item href=""
                                    onClick={() => {
                                        generateXLSX(vehicle, `Vehicle Reports`, [
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
                                                key: "postalCode",
                                                style: { alignment: { horizontal: "left" } },
                                                header: "Assigned Postalcode"
                                            },
                                            {
                                                key: "vehicleFuelType",
                                                style: { alignment: { horizontal: "left" } },
                                                header: "Vehicle (Fuel Type)"
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
                                    }}>
                                    <i className="fa fa-file-excel fa-fw mr-1"></i>
                                    Excel
                                </Dropdown.Item>
                                <CSVLink className="dropdown-item"
                                    data={vehicle?.map((report) => ({
                                        ...report,
                                        fullName: report?.fullName,
                                        phone: report?.phone,
                                        email: report?.email,
                                        postalCode: report?.postalCode,
                                        vehicleFuelType: report?.vehicleFuelType,
                                        createdDate: report?.createdDate,
                                        status: report?.status
                                    }
                                    ))}
                                    headers={headers}
                                    filename={`Vehicle Reports`}>
                                    <i className="fa fa-file-csv fa-fw mr-1"></i>
                                    CSV
                                </CSVLink>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <VehicleReportsList />
                <Pagination />
            </div>
        </Report>

    )
}

export default VehicleReports