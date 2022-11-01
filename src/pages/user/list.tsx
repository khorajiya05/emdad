import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Pagination from "../../components/pagination/pagination";
import UsersLists from "../../components/user/users-list";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getAllUsersActionThunk } from "../../store/users/users.actions.async";
import TRootState from "../../store/root.types";

const UserList: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const { perPageItems } = useSelector((state: TRootState) => state.pagination)

  const [page, setPage] = useState<number>(Number(state?.page) || 1)
  const [sort, setSort] = useState<string>("ASC");
  const [sortBy, setSortBy] = useState<string>("fullName");
  const [searchUser, setSearchUser] = useState<string | null>("")
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const handleRedirectToAddVendor = () => {
    navigate("/user/form");
  };
  const handleCloseDelete = () => {
    setShowDeleteModal(false);
  };

  const fetchUsers = () => {
    dispatch(getAllUsersActionThunk(
      searchUser || null,
      page,
      perPageItems,
      sort,
      sortBy
    ))
  }

  return (
    <React.Fragment>
      <div id="app">
        <div className="d-block d-lg-none">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          <Header />
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>Manage Users</h1>
                </div>
                <div className="m-l-10">
                  <div className="input-group w-250">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      title="Search"
                      value={searchUser || ""}
                      onChange={(e) => setSearchUser(e.target.value)}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="input-group-text pointer"
                        onClick={() => fetchUsers()}
                      >
                        <span className="fa fa-search"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSearchUser("");
                      dispatch(getAllUsersActionThunk(
                        null,
                        page,
                        perPageItems,
                        sort,
                        sortBy
                      ))
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRedirectToAddVendor}
                  >
                    Add User
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body p-0">
                  <Pagination
                    ItemsComponent={UsersLists}
                    pageCount={0}
                    dispatchAction={fetchUsers}
                    page={page}
                    setPage={setPage}
                    filter={sort}
                    setFilter={setSort}
                    setFilterBy={setSortBy}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal centered show={showDeleteModal} onHide={() => handleCloseDelete()}>
        <Modal.Header className="justify-content-center border-0">
          <h3 className="modal-title">Delete</h3>
        </Modal.Header>
        <Modal.Body className="text-center">
          <span>
            <i className="far fa-times-circle fa-3x text-danger"></i>
          </span>
          <p className="font-size-18 m-0 mt-2">Are you sure want to delete?</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-center border-0">
          <button
            className="btn btn-dark min-w-100"
            onClick={() => handleCloseDelete()}
          >
            No
          </button>
          <button
            className="btn btn-danger min-w-100"
            onClick={() => handleCloseDelete()}
          >
            Yes
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default UserList;
