import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CKEditor from "../../components/CKeditor/CKEditor";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getEmailTemplateByIdActionThunk, updateEmailTemplateActionThunk } from "../../store/emailTemplate/emailTemplate.actions.async";
import TRootState from "../../store/root.types";
import { BarsLoader } from "../../components/loader/Loader";

const EmailTemplatesForm: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>()
  const navigate = useNavigate();
  const location = useLocation();

  const { emailTemplateId } = useParams();
  const { state } = location;
  const { loading, singleEmailTemplate } = useSelector((state: TRootState) => state?.emailTemplate)

  const [subject, setSubject] = useState<string>("");
  const [template, setTemplate] = useState<string>("");
  console.log("Template:", template);


  const handleRedirectToEmailTemplate = () => {
    navigate("/settings/email-templates", { state: { page: state?.page } });
  };

  const handleSubmit = () => {
    template && subject && Promise.resolve(
      dispatch(updateEmailTemplateActionThunk(emailTemplateId, subject, template))
    ).then(() => handleRedirectToEmailTemplate())
  }

  useEffect(() => {
    dispatch(getEmailTemplateByIdActionThunk(emailTemplateId))
  }, [dispatch, emailTemplateId])

  useEffect(() => {
    if(singleEmailTemplate){
      setSubject(singleEmailTemplate?.subject)
      setTemplate(singleEmailTemplate?.template)

    }
  }, [singleEmailTemplate])

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
                  <h1>Edit Email Template</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToEmailTemplate()}
                  >
                    <i className="fa fa-angle-left">&nbsp;</i> Back
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                {
                  loading ? (<BarsLoader />) : (
                    <form className="form-horizontal">
                      <div className="card-body">
                        <div className="mt-3">
                          <div className="form-group row">
                            <label className="control-label text-md-right col-md-3">
                              Email Subject <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-5">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                value={subject || ""}
                                onChange={(e) => setSubject(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="control-label text-md-right col-md-3">
                              Email Content <span className="text-danger">*</span>
                            </label>
                            <div className="col-md-7">
                              <CKEditor setPageData={setTemplate} data={template} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-light text-right">
                        <button
                          type="button"
                          className="btn btn-secondary clear-form mr-2"
                          onClick={handleRedirectToEmailTemplate}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={(e) => { e.preventDefault(); handleSubmit() }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  )
                }

              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailTemplatesForm;
