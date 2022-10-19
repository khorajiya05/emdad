import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getAllFAQsActionThunk } from "../../store/faqs/FAQs.actions.async";
import TRootState from "../../store/root.types";
import { BarsLoader } from "../../components/loader/Loader";

const FaqList: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const navigate = useNavigate();

  const { loading, FAQsData: { FAQs } } = useSelector((state: TRootState) => state?.faqs)

  const [showDeleteModal, setshowDeleteModal] = useState<boolean>(false);
  const [showEditeModal, setShowEditeModal] = useState<boolean>(false);


  const handleEditeFAQ = () => {
    console.log("Edited");
    setShowEditeModal(false)
  }

  const handleDeleteFAQ = () => {
    console.log("Deleted")
    setshowDeleteModal(false)
  }
  const handleRedirectToAddVendor = () => {
    navigate("/settings/faq/:faqId");
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
                            Q{index}: {faq?.question}
                          </button>
                          <ul className="actions top-right">
                            <li className="m-0">
                              <button
                                onClick={() => setShowEditeModal(true)}
                              >
                                <i className="zmdi zmdi-edit zmdi-hc-fw text-secondary"></i>
                              </button>
                            </li>
                            <li className="m-0">
                              <Link to={`/settings/faq/${faq?.id}`}>
                                <i className="zmdi zmdi-delete zmdi-hc-fw text-secondary"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          id={`collapseFaq${String(faq?.id)}`}
                          className="collapse show"
                          aria-labelledby={`headingFaq${String(faq?.id)}`}
                          data-parent="#accordion-faq"
                        >
                          <div className="card-body">
                            {faq?.answer}
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

      <Modal centered scrollable show={showEditeModal} onHide={() => setShowEditeModal(false)}>
        <Modal.Header>
          <h4 className="modal-title">Add Postcode</h4>
          <button className="close" onClick={() => setShowEditeModal(false)}>
            <span aria-hidden="true" className="zmdi zmdi-close"></span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label className="control-label">Postcode </label>
            <input type="text" className="form-control" placeholder="" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowEditeModal(false)}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={() => handleEditeFAQ()}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>

      <Modal centered show={showDeleteModal} onHide={() => setshowDeleteModal(false)}>
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
            onClick={() => setShowEditeModal(false)}
          >
            No
          </button>
          <button
            className="btn btn-danger min-w-100"
            onClick={() => handleDeleteFAQ()}
          >
            Yes
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default FaqList;
