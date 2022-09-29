import React from 'react'

function OrderHistoryFuelList() {
    return (
        <div className="table-responsive">
            <div className="tab-content">
                <div className="tab-pane fadeIn active" id="tab-1">
                    <table className="table table-hover nowrap m-0">
                        <thead>
                            <tr>
                                <th className="sorting">
                                    <span>Order Id</span>
                                </th>
                                <th>User Name</th>
                                <th>Date & Timeslot</th>
                                {/* <th>Monthly Settlement</th>
    <th>Payment Settlement</th>
    <th className="text-center">Product Status</th> */}
                                <th>Location</th>
                                <th>Qty (Ltr)</th>
                                <th>Price (SDG)</th>
                                <th>Assigned by Admin</th>
                                <th>Driver Name</th>
                                <th className="table-field-status">Status</th>
                                <th className="table-field-actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(5)].map((elementInArray, index) => (
                                <React.Fragment>
                                    <tr key={index}>
                                        {/* <div className="media">
                <img className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover" src={User} />
                <div className="media-body">
                    <h6 className="mt-1 mb-0">John Smith</h6>
                    <span className="text-muted">+1 987 654 3210</span>
                </div>
            </div> */}
                                        <td>#00001 </td>

                                        <td>Abdul Kareem</td>
                                        <td>30/04/2022 11:00 AM - 12:00 AM</td>
                                        {/* <td>$2500</td>
        <td>$4500</td>
        <td className="text-center">
            <span className="badge badge-pill badge-success">Active</span>
        </td> */}
                                        <td>
                                            211 SW 16th St, For Lauderdale, Khartoum
                                            North, Sudan
                                        </td>
                                        <td>1000</td>
                                        <td>50.00</td>
                                        <td>Abdul Kareem</td>
                                        <td>Abdul Kareem</td>
                                        {/* <td className="text-center">
            <span className="badge badge-pill badge-warning">Pending</span>
        </td> */}
                                        <td className="text-center">
                                            <span className="badge badge-pill badge-success">
                                                Completed
                                            </span>
                                        </td>
                                        <td className="table-field-actions">
                                            <Dropdown className="btn-group">
                                                <Dropdown.Toggle
                                                    id="dropdown-basic"
                                                    className="btn btn-sm btn-icon-only"
                                                >
                                                    <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="/orders/view">
                                                        <i className="fa fa-info-circle fa-fw text-accent-custom"></i>{" "}
                                                        View
                                                    </Dropdown.Item>
                                                    {/* <Dropdown.Item href="#">
<i className="fa fa-edit fa-fw text-accent-custom"></i>{" "}
Edit
</Dropdown.Item> */}
                                                    <Dropdown.Item
                                                        href="#"
                                                        onClick={() => handleShowDelete()}
                                                    >
                                                        <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>{" "}
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr key={index}>
                                        {/* <td>
             <div className="media">
                 <img className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover" src={User} /> 
                <div className="media-body">
                    <h6 className="mt-1 mb-0">John Smith</h6>
                    <span className="text-muted">+1 987 654 3210</span>
                </div>
            </div> 
        </td> */}
                                        <td>#00001 </td>

                                        <td>Abdul Kareem</td>
                                        <td>30/04/2022 11:00 AM - 12:00 AM</td>
                                        {/* <td>$2500</td>
        <td>$4500</td>
        <td className="text-center">
            <span className="badge badge-pill badge-success">Active</span>
        </td> */}
                                        <td>
                                            211 SW 16th St, For Lauderdale, Khartoum
                                            North, Sudan
                                        </td>
                                        <td>1000</td>
                                        <td>50.00</td>
                                        <td>Abdul Kareem</td>
                                        <td>Abdul Kareem</td>
                                        {/* <td className="text-center">
            <span className="badge badge-pill badge-warning">Pending</span>
        </td> */}
                                        <td className="text-center">
                                            <span className="badge badge-pill badge-danger">
                                                Cancelled
                                            </span>
                                        </td>
                                        <td className="table-field-actions">
                                            <Dropdown className="btn-group">
                                                <Dropdown.Toggle
                                                    id="dropdown-basic"
                                                    className="btn btn-sm btn-icon-only"
                                                >
                                                    <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="/orders/view">
                                                        <i className="fa fa-info-circle fa-fw text-accent-custom"></i>{" "}
                                                        View
                                                    </Dropdown.Item>
                                                    {/* <Dropdown.Item href="/vendors/add">
<i className="fa fa-edit fa-fw text-accent-custom"></i>{" "}
Edit
</Dropdown.Item> */}
                                                    <Dropdown.Item
                                                        href="#"
                                                        onClick={() => handleShowDelete()}
                                                    >
                                                        <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>{" "}
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OrderHistoryFuelList