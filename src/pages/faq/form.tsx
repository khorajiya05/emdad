import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import CKEditor from "../../components/CKeditor/CKEditor";
import { useState } from "react";
import { useSelector } from "react-redux";
import TRootState from "../../store/root.types";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getFAQsByIdActionThunk } from "../../store/faqs/FAQs.actions.async";
const FaqForm: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const navigate = useNavigate();
  const param = useParams();

  const FAQId = param?.id;
  const { loading, singleFAQsData } = useSelector((state: TRootState) => state?.faqs)

  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleRedirectToEmailTemplate = () => {
    navigate("/settings/faq");
  };

  useEffect(() => {
    if (FAQId && FAQId !== "new") {
      dispatch(getFAQsByIdActionThunk(FAQId))
    }
  }, [FAQId, dispatch])

  useEffect(() => {
    setQuestion(singleFAQsData?.question);
    setAnswer(singleFAQsData?.answer)
  }, [singleFAQsData])

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
                  <h1>Add FAQ</h1>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <form className="form-horizontal">
                  <div className="card-body">
                    <div className="mt-3">
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Question{" "}
                        </label>
                        <div className="col-md-5">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=""
                            value={question}
                            onChange={(e) => setQuestion(e.target?.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="control-label text-md-right col-md-3">
                          Answer
                        </label>
                        <div className="col-md-7">
                          <CKEditor setPageData={setAnswer} data={answer} />
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
                      type="button"
                      className="btn btn-primary"
                      onClick={handleRedirectToEmailTemplate}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FaqForm;
