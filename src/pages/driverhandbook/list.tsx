import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { addDriverHandBookActionThunk, getAllDriverHandBooksActionThunk } from "../../store/driverHandBook/driverHandBook.actions.async";
import Pagination from "../../components/pagination/pagination";
import { useLocation } from "react-router-dom";
import HandBookList from "../../components/driverHandBook/DriverHandBookList";
import TRootState from "../../store/root.types";
import DriverHandBookModal from "../../components/driverHandBook/DriverHandBookModal";

const DriverHandbookList: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>()
  const location = useLocation();

  const { count } = useSelector((state: TRootState) => state?.driverHandBook?.driverHandBookData)
  const { perPageItems } = useSelector((state: TRootState) => state?.pagination)
  const { state } = location;

  const [page, setPage] = useState<number>(state?.page || 1)
  const [searchBook, setSearchBook] = useState<string>("");
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = (question: string, answer: string) => {
    dispatch(addDriverHandBookActionThunk(
      question,
      answer,
      "english",
      "driver",
      fetchDriverHandbooks
    ))
    setShow(false)
  }

  const deleteDriverHandBook = (deleteHandbook: (fetchDriverHandbooks: () => void) => void) => {
    deleteHandbook(fetchDriverHandbooks)

  }

  const fetchDriverHandbooks = () => {
    dispatch(getAllDriverHandBooksActionThunk(
      searchBook || null,
      page,
      perPageItems
    ));
  }

  return (
    <React.Fragment>
      <Header />
      <div id="app">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>Driver Handbook</h1>
                </div>
                <div className="m-l-10">
                  <div className="input-group w-250">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      title="Search"
                      value={searchBook}
                      onChange={(e) => setSearchBook(e.target?.value)}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="input-group-text pointer"
                        onClick={() => fetchDriverHandbooks()}
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
                      setSearchBook("");
                      dispatch(getAllDriverHandBooksActionThunk(
                        null,
                        page,
                        perPageItems
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
                    onClick={handleShow}
                  >
                    Add Driver Handbook
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body p-0">
                  <Pagination
                    ItemsComponent={() => <HandBookList deleteDriverHandBook={deleteDriverHandBook} />}
                    pageCount={count}
                    dispatchAction={fetchDriverHandbooks}
                    page={page}
                    setPage={setPage}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {show && <DriverHandBookModal
        show={show}
        setShow={setShow}
        submitAction={handleSubmit}
      />}
    </React.Fragment>
  );
};

export default DriverHandbookList;
