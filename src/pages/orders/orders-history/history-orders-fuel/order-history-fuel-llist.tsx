import moment from 'moment';
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { BarsLoader } from '../../../../components/loader/Loader';
import DeleteModal from '../../../../components/modal/delete-modal';
import OrderStatus from '../../../../components/orderStatus/OrderStatus';
import { convertTo12 } from '../../../../utils/helpers/timeConvert';
import { cancelOrderActionThunk } from '../../../../store/orders/orders.actions.async';
import TRootState from '../../../../store/root.types';


interface Prop {
    setFilter: Function;
    filter: string;
    setFilterBy: Function;
    getAction: Function;
}

const OrderHistoryFuelList: React.FC<Prop> = ({ setFilter, filter, setFilterBy }) => {

    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const { loading, orderFuelData: { orders } } = useSelector((state: TRootState) => state.orders)

    const [id, setId] = useState<number | string>("")
    const [showAssignOrderModal, setShowAssignOrderModal] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showUnAssignOrderModal, setShowUnAssignOrderModal] = useState<boolean>(false);

    const handleDeleteOrder = () => {
        dispatch(cancelOrderActionThunk(id, 1))
        setShowDeleteModal(false);
    }

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
        <>
            <div className="table-responsive">

                <div className="tab-content">
                    <div className="tab-pane fadeIn active" id="tab-1">
                        <table className="table table-hover nowrap m-0">
                            <thead>
                                <tr>
                                    <th className="sorting">
                                        <span
                                            onClick={() => {
                                                filter === "ASC" ? setFilter("DESC") : setFilter("ASC");
                                                setFilterBy("orderNumber");
                                            }}
                                        >
                                            Order Id
                                        </span>
                                    </th>
                                    <th>User Name</th>
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
                                            <td><p className="mb-0">{order?.id}</p> </td>
                                            <td><p className="mb-0">{order?.user?.fullName}</p></td>
                                            <td><p className="mb-0">{moment(order?.scheduleDate).format("MM/DD/YYYY")}{" "}{order?.startTime ? convertTo12(order?.startTime) : null} -{" "}{order?.endTime ? convertTo12(order?.endTime) : null}</p></td>
                                            <td><p className="mb-0">{`${order?.address}, ${order?.city}, ${order?.state}, ${order?.country}`}</p></td>
                                            <td><p className="mb-0">{order?.qty}</p></td>
                                            <td><p className="mb-0">{order?.price}</p></td>
                                            <td><p className="mb-0">Abdul Kareem</p></td>
                                            <td><p className="mb-0">{order?.driver?.fullName}</p></td>
                                            <td className="text-center"><OrderStatus status={order?.status} /></td>
                                            <td className="table-field-actions">
                                                <Dropdown className="btn-group">
                                                    <Dropdown.Toggle
                                                        id="dropdown-basic"
                                                        className="btn btn-sm btn-icon-only"
                                                    >
                                                        <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item as={Link} to={`/orders/${order?.id}`} >
                                                            <i className="fa fa-info-circle fa-fw text-accent-custom"></i>
                                                            View
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            onClick={() => { setId(order?.id); setShowDeleteModal(true); }}
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
            {showDeleteModal && <DeleteModal show={showDeleteModal} setShow={setShowDeleteModal} handleDelete={handleDeleteOrder} />}
        </>

    )
}

export default OrderHistoryFuelList