import React, { SetStateAction, useState } from 'react'
import User from "../../assets/img/user.jpg";
import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import TRootState from '../../store/root.types';
import { BarsLoader } from '../loader/Loader';
import OrderStatus from '../orderStatus/OrderStatus';
import { AppendedMyComponent } from '../appendToBody/appendToBody';
import StateChangeModal from '../modal/stateChange-modal';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { deleteDriverActionThunk, updateStatusOfDriverActionThunk } from '../../store/drivers/drivers.actions.async';
import DeleteModal from '../modal/delete-modal';
import { Link } from 'react-router-dom';
interface Props {
    setFilter: React.Dispatch<SetStateAction<string>>;
    filter: string;
    setFilterBy: React.Dispatch<SetStateAction<string>>;
    fetchData?: Function;
    page?: number;
}
const DriversList: React.FC<Props> = ({ setFilter, filter, setFilterBy, fetchData, page }) => {

    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const { loading, AllDriversList: { drivers } } = useSelector((state: TRootState) => state?.drivers);

    const [id, setId] = useState<number | string>("");
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showStatusModal, setShowStatusModal] = useState<boolean>(false);
    const [statusWithId, setStatusWithId] = useState<{ driverId: string | number, status: boolean } | null>(null)

    const handleDelete = () => {
        setShowDeleteModal(false);
        dispatch(deleteDriverActionThunk(id, fetchData));
    }

    const closeStatusModal = (isShow: boolean) => {
        setStatusWithId(null)
        setShowStatusModal(isShow);
    }
    const handleStatusChange = () => {
        setShowStatusModal(false);
        statusWithId && dispatch(updateStatusOfDriverActionThunk(statusWithId?.driverId, statusWithId?.status, fetchData))
    }
    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover m-0">
                    <thead>
                        <tr>
                            <th className="w-250 sorting">
                                <span
                                    onClick={() => {
                                        filter === "ASC" ? setFilter("DESC") : setFilter("ASC");
                                        setFilterBy("fullName");
                                    }}
                                >Full Name</span>
                            </th>
                            <th>Email Id</th>
                            <th>Geofence </th>
                            <th>Vehicle (Fuel Type) </th>
                            <th className="table-field-status"> Status</th>
                            <th className="table-field-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan={8} style={{ textAlign: "center" }}><BarsLoader /></td></tr>
                        ) : (
                            drivers?.map((driver, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="media">
                                            <img
                                                className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                                src={User}
                                                alt="" />
                                            <div className="media-body">
                                                <h6 className="mt-1 mb-0">{driver?.driver?.fullName}</h6>
                                                <span className="text-muted">
                                                    {driver?.driver?.mobileNumber}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{driver?.driver?.email}</td>
                                    <td>{driver?.location?.latLong}</td>
                                    <td>
                                        <span className="badge badge-light">
                                            {driver?.vehicle?.engine}
                                        </span>
                                    </td>
                                    <td className="table-field-status">
                                        <span className="sorting"
                                            onClick={() => {
                                                setShowStatusModal(true);
                                                setStatusWithId({ driverId: driver?.driver?.id, status: !driver?.driver?.isActive })
                                            }}
                                        >
                                            <OrderStatus status={driver?.driver?.isActive === true ? "active" : "inactive"} />
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
                                            <AppendedMyComponent>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="/driver/assign-timeslot">
                                                        <i className="fa fa-plus fa-fw text-accent-custom"></i>Assign Slot
                                                    </Dropdown.Item>
                                                    <Dropdown.Item as={Link} to={`/drivers/view/${driver?.driver?.id}/basic-details`} state={{ page: page }}>
                                                        <i className="fa fa-info-circle fa-fw text-accent-custom"></i>View
                                                    </Dropdown.Item>
                                                    <Dropdown.Item as={Link} to={`/drivers/${driver?.driver?.id}`} state={{ page: page }}>
                                                        <i className="fa fa-edit fa-fw text-accent-custom"></i>Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item
                                                        onClick={() => {
                                                            setId(driver?.driver?.id);
                                                            setShowDeleteModal(true);
                                                        }}
                                                    >
                                                        <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </AppendedMyComponent>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <StateChangeModal show={showStatusModal} setShow={closeStatusModal} handleStatusChange={handleStatusChange} />
            <DeleteModal show={showDeleteModal} setShow={setShowDeleteModal} handleDelete={handleDelete} />
        </>
    )
}

export default DriversList 