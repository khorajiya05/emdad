import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import User from "../../assets/img/user.jpg";
import TRootState from '../../store/root.types';
import { BarsLoader } from '../loader/Loader';

interface Props {
    filter: string;
    setFilter: Function;
    setFilterBy: Function;
    page?: number
}

const UsersLists: React.FC<Props> = ({ filter, setFilter, setFilterBy }) => {

    const { loading, usersData: { users } } = useSelector((state: TRootState) => state?.users)

    const [userId, setUserId] = useState<string | number>("");
    const [userIdWithStatus, setUserIdWithStatus] = useState<{ userId: string | number, status: Boolean } | null>(null)
    return (
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
                                        <h6 className="mt-1 mb-0">Abdul Kareem</h6>
                                        <span className="text-muted">
                                            +249 98765 43210
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>abdulkareem@domain.com</td>
                            <td className="text-center">1</td>
                            <td className="table-field-status">
                                <span className="badge badge-pill badge-success">
                                    Active
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
                                        <Dropdown.Item href="/user/view">
                                            <i className="fa fa-info-circle fa-fw text-accent-custom"></i>{" "}
                                            View
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="/user/form"
                                        >
                                            <i className="fa fa-edit fa-fw text-accent-custom"></i>{" "}
                                            Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            href="#"
                                        >
                                            <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>{" "}
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
    )
}

export default UsersLists