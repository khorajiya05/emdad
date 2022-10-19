import { type } from "os";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import EmailTemplatList from "../../components/email-templates/EmailTemplateList";

import Header from "../../components/header/header";
import Pagination from "../../components/pagination/pagination";
import Sidebar from "../../components/sidebar/sidebar";
import { getEmailTemplateActionThunk } from "../../store/emailTemplate/emailTemplate.actions.async";
import TRootState from "../../store/root.types";

const EmailList: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>()
  const location = useLocation();

  const { state } = location;
  const { pagination: { perPageItems }, emailTemplate: { emailTemplateData: { count } } } = useSelector((state: TRootState) => state)

  const [page, setPage] = useState<number>(Number(state?.page) || 1)
  const [searchTemplate, setSearchTemplate] = useState<string>("")

  const fetchEmailTemplates = () => {
    dispatch(getEmailTemplateActionThunk(
      searchTemplate || null,
      page,
      perPageItems
    ))
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
                  <h1>Email Templates</h1>
                </div>
                <div className="m-l-10">
                  <div className="input-group w-250">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      title="Search"
                      value={searchTemplate}
                      onChange={(e) => setSearchTemplate(e.target?.value)}
                      onKeyUp={(event) => {
                        if (event.key === "Enter") {
                          fetchEmailTemplates();
                        }
                      }}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="input-group-text pointer"
                        onClick={() => fetchEmailTemplates()}
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
                      setSearchTemplate("");
                      dispatch(getEmailTemplateActionThunk(
                        null,
                        page,
                        perPageItems
                      ))
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body p-0">

                  <Pagination
                    ItemsComponent={() => <EmailTemplatList page={page} />}
                    pageCount={count}
                    dispatchAction={fetchEmailTemplates}
                    setPage={setPage}
                    page={page}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailList;
