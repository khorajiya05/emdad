import Dropdown from "react-bootstrap/Dropdown";
import { CSVLink } from "react-csv";
import * as excel from "exceljs";
import { saveAs } from "file-saver";

import Pagination from "../../components/pagination/pagination";
import Report from './list';
import OrderReportsList from './OrderReportsList';
import { TGetOrderReportsPayload } from '../../store/reports/reports.types';
import { DatePicker } from '../../components';


const OrderReports = () => {

    const order: TGetOrderReportsPayload = [
        {
            order_id: "#007",
            company_name: "peerbits",
            user_name: "John smith",
            date: "22/04/2022",
            timeslot: "15:00 - 16:00",
            vehicle_category: 2,
            location: "5th Floor, AH Building , New Complex, USA",
            driver_name: "Jamesh Smith",
        }
    ];


    /**
   * download csv and excel
   */
    const headers = [
        { key: "orderId", label: "Order Id" },
        { key: "companyName", label: "Company Name" },
        { key: "userName", label: "User Name" },
        { key: "date", label: "Date" },
        { key: "timeslot", label: "Timeslot" },
        { key: "vehicleCategory", label: "Vehicle/Category" },
        { key: "location", label: "Location" },
        { key: "driverName", label: "Driver Name" }
    ];


    /**
    * xlsx file generated functionality
    * @param data
    * @param filename
    */

    function generateXLSX(
        data: TGetOrderReportsPayload,
        fileName: any,
        header: { key: string, header: string, style?: any }[]
    ) {
        const workbook: excel.Workbook = new excel.Workbook();
        const sheet: excel.Worksheet = workbook.addWorksheet(fileName);
        sheet.getRow(1).font = { bold: true };
        sheet.columns = header;
        for (let item of data) {
            sheet.addRow({
                orderId: item?.order_id,
                companyName: item?.company_name,
                userName: item?.user_name,
                date: item?.date,
                timeslot: item?.timeslot,
                vehicleCategory: item?.vehicle_category,
                location: item?.location,
                driverName: item?.driver_name
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


    return (

        <Report>
            <div className="tab-pane fadeIn active" id="tab-4">
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
                                <Dropdown.Item href=""
                                    onClick={() => {
                                        generateXLSX(order, `Order Reports`, [
                                            { key: "orderId", style: { alignment: { horizontal: "left" } }, header: "Order Id" },
                                            { key: "companyName", style: { alignment: { horizontal: "left" } }, header: "Company Name" },
                                            { key: "userName", style: { alignment: { horizontal: "left" } }, header: "User Name" },
                                            { key: "date", style: { alignment: { horizontal: "left" } }, header: "Date" },
                                            { key: "timeslot", style: { alignment: { horizontal: "left" } }, header: "Timeslot" },
                                            { key: "vehicleCategory", style: { alignment: { horizontal: "left" } }, header: "Vehicle/Category" },
                                            { key: "location", style: { alignment: { horizontal: "left" } }, header: "Location" },
                                            { key: "driverName", style: { alignment: { horizontal: "left" } }, header: "Driver Name" }
                                        ])
                                    }}>
                                    <i className="fa fa-file-excel fa-fw mr-1"></i> Excel
                                </Dropdown.Item>
                                <CSVLink className="dropdown-item"
                                    data={order.map((report:any) => ({
                                        ...report,
                                        orderId: report?.order_id,
                                        companyName: report?.company_name,
                                        userName: report?.user_name,
                                        date: report?.date,
                                        timeslot: report?.timeslot,
                                        vehicleCategory: report?.vehicle_category,
                                        location: report?.location,
                                        driverName: report?.driver_name,
                                    }
                                    ))}
                                    headers={headers}
                                    filename={`Order Reports`}
                                >
                                    <i className="fa fa-file-csv fa-fw mr-1"></i>{" "}
                                    CSV
                                </CSVLink>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <OrderReportsList />
                <Pagination />
            </div>

        </Report>

    )
}

export default OrderReports