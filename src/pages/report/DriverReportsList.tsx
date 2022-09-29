import React from 'react'
import { useSelector } from 'react-redux';
import { BarsLoader } from '../../components/loader/Loader';
import TRootState from '../../store/root.types';



const DriverReportsList: React.FC = () => {
    
    const driver = useSelector((state: TRootState) => state.reports.driverData.drivers);
    const loading = useSelector((state: TRootState) => state.reports.loading);

    return (
        <div className="table-responsive">
            <table className="table table-hover m-0">
                <thead>
                    <tr>
                        <th className=" sorting">
                            <span>Make</span>
                        </th>
                        <th>Model</th>
                        <th>Number Plate </th>
                        <th>Vehicle (Fuel Type)</th>
                        <th>Driver Name </th>
                        <th>Created Date</th>
                        <th className="table-field-status"> Status</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={8} style={{ textAlign: "center" }}>
                                <BarsLoader />
                            </td>
                        </tr>
                    ) :
                        driver && driver.length > 0 ? (driver.map((driver, index) => (

                            <tr key={index}>
                                <td>{driver?.make}</td>
                                <td>{driver?.model}</td>

                                <td>{driver?.numberPlate}</td>
                                <td>
                                    <span className="badge badge-light">
                                        {driver?.vehicleFuelType}
                                    </span>
                                </td>
                                <td>{driver?.driverName} </td>
                                <td>{driver?.createdDate}</td>
                                <td className="table-field-status">
                                    <span className="badge badge-pill badge-success">
                                        {driver?.status}
                                    </span>
                                </td>
                            </tr>))
                        ) : (
                            <tr>
                                <td colSpan={8} style={{ textAlign: "center" }}>
                                    No Customer reports available
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default DriverReportsList;