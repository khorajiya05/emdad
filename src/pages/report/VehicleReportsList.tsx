import React from 'react'
import { useSelector } from 'react-redux';
import User from "../../assets/img/user.jpg";
import { BarsLoader } from '../../components/loader/Loader';
import TRootState from '../../store/root.types';


function VehicleReportsList() {

    const vehicle = useSelector((state: TRootState) => state.reports.vehicleData.vehicles);
    const loading = useSelector((state: TRootState) => state.reports.loading);

    console.log(vehicle);
    
    return (
        <div className="table-responsive">
            <table className="table table-hover m-0">
                <thead>
                    <tr>
                        <th className="sorting">
                            <span>Full Name</span>
                        </th>
                        <th>Email Id</th>
                        <th>Assigned Postalcode</th>
                        <th>Vehicle (Fuel Type)</th>
                        <th>Created Date</th>
                        <th className="table-field-status"> Status</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan={8} style={{ textAlign: "center" }}> <BarsLoader /></td>
                        </tr>
                    ) : (
                        vehicle && vehicle.length > 0 ? (
                            vehicle.map((vehicle, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="media">
                                            <img className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover" src={User} alt="img not found" />
                                            <div className="media-body">
                                                <h6 className="mt-1 mb-0">{vehicle?.fullName}</h6>
                                                <span className="text-muted">{vehicle?.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{vehicle?.email}</td>
                                    <td>{vehicle?.postalCode}</td>
                                    <td><span className="badge badge-light">{vehicle?.vehicleFuelType}</span></td>
                                    <td>{vehicle?.createdDate}</td>
                                    <td className="table-field-status"><span className="badge badge-pill badge-success">{vehicle?.status}</span></td>
                                </tr>
                            ))
                        ) : (
                            <tr> <td colSpan={8} style={{ textAlign: "center" }}>No Vehicle reports available</td> </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default VehicleReportsList