import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { deleteFAQsActionThunk, getAllFAQsActionThunk } from "../../store/faqs/FAQs.actions.async";
import TRootState from "../../store/root.types";
import { BarsLoader } from "../../components/loader/Loader";
import DeleteModal from "../../components/modal/delete-modal";

const FaqList: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const navigate = useNavigate();

  const { loading, FAQsData: { FAQs } } = useSelector((state: TRootState) => state?.faqs)

  const [showDeleteModal, setshowDeleteModal] = useState<boolean>(false);
  const [FAQId, setFAQId] = useState<string | number | null>(null)

  const handleDeleteFAQ = () => {
    FAQId && dispatch((deleteFAQsActionThunk(FAQId)))
    setshowDeleteModal(false);
  }
  const handleRedirectToAddVendor = () => {
    navigate("/settings/faq/new");
  };

  useEffect(() => {
    dispatch(getAllFAQsActionThunk("english", "user"))
  }, [dispatch])

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
                  <h1>FAQs</h1>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleRedirectToAddVendor}
                  >
                    Add New
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="accordion" id="accordion-faq">
                {
                  loading ? (<BarsLoader />) : (
                    FAQs?.map((faq, index) => (
                      <div className="card" key={faq?.id}>
                        <div className="card-header" id={`headingFaq${String(faq?.id)}`}>
                          <button
                            className="btn btn-link "
                            type="button"
                            data-toggle="collapse"
                            data-target={`#collapseFaq${String(faq?.id)}`}
                            aria-expanded="true"
                            aria-controls={`collapseFaq${String(faq?.id)}`}
                          >
                            Q{index + 1}: {faq?.question}
                          </button>
                          <ul className="actions top-right">
                            <li className="m-0">
                              <Link to={`/settings/faq/${faq?.id}`}><i className="zmdi zmdi-edit zmdi-hc-fw text-secondary"></i></Link>
                            </li>
                            <li className="m-0">
                              <label style={{ cursor: "pointer" }} onClick={() => { setFAQId(faq?.id); setshowDeleteModal(true) }}><i className="zmdi zmdi-delete zmdi-hc-fw text-secondary"></i></label>
                            </li>
                          </ul>
                        </div>
                        <div
                          id={`collapseFaq${String(faq?.id)}`}
                          className="collapse"
                          aria-labelledby={`headingFaq${String(faq?.id)}`}
                          data-parent="#accordion-faq"
                        >
                          <div className="card-body">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: faq?.answer || "",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
              </div>
            </section>
          </div>
        </div>
      </div>
      <DeleteModal show={showDeleteModal} setShow={setshowDeleteModal} handleDelete={handleDeleteFAQ} />
    </React.Fragment>
  );
};

export default FaqList;
