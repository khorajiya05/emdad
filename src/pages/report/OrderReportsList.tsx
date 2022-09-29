import React from 'react'

function OrderReportsList() {
    return (
        <div className="table-responsive">
            <table className="table table-hover m-0">
                <thead>
                    <tr>
                        <th className=" sorting">
                            <span>Order Id</span>
                        </th>
                        <th className="text-nowrap">Company Name</th>
                        <th className="text-nowrap">User Name</th>
                        <th>Date</th>
                        <th>Timeslot</th>
                        <th className="text-center">
                            Vehicle/Category
                        </th>
                        <th>Location</th>
                        <th className="text-nowrap">Driver Name </th>
                        <th className="table-field-status"> Status</th>
                        {/* <th className="table-field-actions">Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(5)].map((elementInArray, index) => (
                        <React.Fragment>
                            <tr key={index}>
                                <td>#00001	</td>
                                <td>Peerbits</td>

                                <td>Abdul Kareem</td>
                                <td>22/04/2022</td>
                                <td>15:00 - 16:00</td>
                                <td className="text-center">1</td>
                                <td>
                                    211 SW 16th St, For Lauderdale, Khartoum North, Sudan
                                </td>
                                <td>James Smith</td>
                                <td className="table-field-status">
                                    <span className="badge badge-pill badge-success">
                                        Active
                                    </span>
                                </td>
                            </tr>
                            <tr key={index}>
                                <td>#00001	</td>
                                <td>Peerbits</td>

                                <td>Abdul Kareem</td>
                                <td>22/04/2022</td>
                                <td>15:00 - 16:00 </td>
                                <td className="text-center"> 2</td>
                                <td>
                                    211 SW 16th St, For Lauderdale, Khartoum North, Sudan
                                </td>
                                <td>james Smith</td>
                                <td className="table-field-status">
                                    <span className="badge badge-pill badge-success">
                                        Active
                                    </span>
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OrderReportsList