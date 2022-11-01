import React, { SetStateAction, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import User from "../../assets/img/user.jpg";
import TRootState from '../../store/root.types';
import { deleteUserActionThunk } from '../../store/users/users.actions.async';
import { BarsLoader } from '../loader/Loader';
import DeleteModal from '../modal/delete-modal';
import OrderStatus from '../orderStatus/OrderStatus';

interface Props {
    setFilter: React.Dispatch<SetStateAction<string>>;
    filter: string;
    setFilterBy: React.Dispatch<SetStateAction<string>>;
    fetchData?: Function;
    page?: number;
}

const UsersLists: React.FC<Props> = ({ setFilter, filter, setFilterBy, fetchData, page }) => {

    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const { loading, usersData: { users } } = useSelector((state: TRootState) => state?.users)

    const [id, setId] = useState<string | number>("");
    // const [userIdWithStatus, setUserIdWithStatus] = useState<{ userId: string | number, status: Boolean } | null>(null)
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const handleDelete = () => {
        setShowDeleteModal(false);
        dispatch(deleteUserActionThunk(id, fetchData));
    }

    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover m-0">
                    <thead>
                        <tr>
                            <th className="w-250 sorting"><span onClick={() => { setFilter(filter === "ASC" ? "DESC" : "ASC"); setFilterBy("fullName") }}>Full Name</span></th>
                            <th>Email Id</th>
                            <th className="text-center">Total Orders</th>
                            <th className="table-field-status"> Status</th>
                            <th className="table-field-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan={8} style={{ textAlign: "center" }}><BarsLoader /></td></tr>
                        ) : users && users.length > 0 ? (users.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="media">
                                        <img
                                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                                            src={User}
                                            alt=" "
                                        />
                                        <div className="media-body">
                                            <h6 className="mt-1 mb-0">{user?.user_full_name || ""}</h6>
                                            <span className="text-muted">
                                                {user?.user_country_code} {user?.user_mobile_number}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td>{user?.user_email}</td>
                                <td className="text-center">1</td>
                                <td className="table-field-status">
                                    <OrderStatus status={user?.user_is_active === true ? "active" : "inactive"} />
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
                                            <Dropdown.Item as={Link}
                                                to={`/users/view/${user?.user_id}/`}
                                                state={{ page: page }}>
                                                <i className="fa fa-info-circle fa-fw text-accent-custom"></i>View
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                href="/user/form"
                                            >
                                                <i className="fa fa-edit fa-fw text-accent-custom"></i>{" "}
                                                Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() => {
                                                    setId(user?.user_id);
                                                    setShowDeleteModal(true);
                                                }}
                                            >
                                                <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
                                                Delete
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>)
                        )) : (<tr><td colSpan={8} style={{ textAlign: "center" }}>No User data available</td></tr>)
                        }
                    </tbody>
                </table>
            </div >
            <DeleteModal show={showDeleteModal} setShow={setShowDeleteModal} handleDelete={handleDelete} />
        </>
    )
}

export default UsersLists