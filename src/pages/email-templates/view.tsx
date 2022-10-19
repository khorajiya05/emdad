import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import TRootState from "../../store/root.types";
import { getEmailTemplateByIdActionThunk } from "../../store/emailTemplate/emailTemplate.actions.async";
import { BarsLoader } from "../../components/loader/Loader";

const EmailTemplatesView: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>()
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const { emailTemplateId } = useParams();
  const { loading, singleEmailTemplate } = useSelector((state: TRootState) => state?.emailTemplate);

  const handleRedirectToEmailTempalte = () => {
    navigate("/settings/email-templates", { state: { page: state?.page } });
  };

  useEffect(() => {
    dispatch(getEmailTemplateByIdActionThunk(emailTemplateId));
  }, [dispatch, emailTemplateId]);

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
                  <h1>View Email Template</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToEmailTempalte()}
                  >
                    <i className="fa fa-angle-left">&nbsp;</i> Back
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body">
                  {
                    loading ? (<BarsLoader />) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: singleEmailTemplate?.template || "",
                        }}
                      ></div>
                    )
                  }

                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailTemplatesView;
