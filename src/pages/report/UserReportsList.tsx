import { useSelector } from 'react-redux';


import User from "../../assets/img/user.jpg";
import { BarsLoader } from '../../components/loader/Loader';
import TRootState from '../../store/root.types';


function UserReportsList() {


    const users = useSelector((state: TRootState) => state?.reports?.userData);
    const loading = useSelector((state: TRootState) => state?.reports?.loading);

    

    


    return (
        <div className="table-responsive">
            <table className="table table-hover m-0">
                <thead>
                    <tr>
                        <th className="sorting">
                            <span>Full Name</span>
                        </th>
                        <th>Email Id</th>
                        <th>Total Orders</th>
                        <th>Created Date</th>
                        {/* <th className="text-center">Membership Status</th> */}
                        <th className="table-field-status"> Status</th>
                        {/* <th className="table-field-actions">Actions</th> */}
                    </tr>
                </thead>
                <tbody>

                    {loading ?
                        (<tr>
                            <td colSpan={8} style={{ textAlign: "center" }}>
                                <BarsLoader />
                            </td>
                        </tr>) : users.users && users.users.length > 0 ? (
                            users.users.map((report, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="media">
                                            <img
                                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                                src={User}
                                                alt="no img"
                                            />
                                            <div className="media-body">
                                                <h6 className="mt-1 mb-0">
                                                    {report.name}
                                                </h6>
                                                <span className="text-muted">
                                                   {report?.phone}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{report?.email}</td>
                                    <td>{report?.totalOrders}</td>
                                    <td>{report?.date}</td>
                                    <td className="table-field-status">
                                        <span className="badge badge-pill badge-success">
                                            {report?.status ? "Active" : "not active"}
                                        </span>
                                    </td>
                                </tr>
                            ))
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

export default UserReportsList