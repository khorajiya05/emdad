import moment from 'moment';
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { BarsLoader } from '../../../../components/loader/Loader';
import OrderStatus from '../../../../components/orderStatus/OrderStatus';
import TRootState from '../../../../store/root.types';

interface Prop {
    setFilter: Function;
    filter: string;
    setFilterBy: Function;
    getAction: Function;
}

const PendingOrderFuelList: React.FC<Prop> = ({ setFilter, filter, setFilterBy }) => {

    const { loading, orderFuelData: { orders } } = useSelector((state: TRootState) => state.orders)

    const [showAssignOrderModal, setShowAssignOrderModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showUnAssignOrderModal, setShowUnAssignOrderModal] = useState<boolean>(false);

    const handleShowAssignOrder = () => {
        setShowAssignOrderModal(true);
    };

    const handleShowUnAssignOrder = () => {
        setShowUnAssignOrderModal(true);
    };

    const handleShowDelete = () => {
        setShowDeleteModal(true);
    };

    return (
        <div className="tab-content">
            <div className="tab-pane fadeIn active" id="tab-1">
                <div className="table-responsive">
                    <table className="table table-hover nowrap m-0">
                        <thead>
                            <tr>
                                <th className="sorting">
                                    <span
                                        onClick={() => {
                                            filter === "ASC" ? setFilter("DESC") : setFilter("ASC");
                                            setFilterBy("orderId");
                                        }}
                                    >
                                        Order Id
                                    </span>
                                </th>
                                <th>Date & Timeslot</th>
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
                            {loading ? (
                                <tr>
                                    <td colSpan={10} style={{ textAlign: "center" }}>
                                        <BarsLoader />
                                    </td>
                                </tr>
                            ) : orders && orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order?.id}>
                                        <td>{order?.id} </td>
                                        <td>{`${moment(order?.startTime).format("MM/DD/YYYY hh:mm A")} - ${moment(order?.endTime).format("MM/DD/YYYY")}`}</td>
                                        <td><p className="mb-0">-</p></td>
                                        <td>{order?.qty}</td>
                                        <td>{order?.price}</td>
                                        <td>Abdul Kareem</td>
                                            <td>{order?.driver?.fullName}</td>
                                            <td className="text-center">
                                                <OrderStatus status={order?.status} />
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
                                                            <i className="fa fa-info-circle fa-fw text-accent-custom"></i>
                                                            View
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            href="#"
                                                            onClick={() =>
                                                                handleShowAssignOrder()
                                                            }
                                                        >
                                                            <i className="fa fa-check fa-fw text-accent-custom"></i>
                                                            Assign Order
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            href="#"
                                                            onClick={() => handleShowDelete()}
                                                        >
                                                            <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
                                                            Delete
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={10} style={{ textAlign: "center" }}>
                                        No orders available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PendingOrderFuelList