import React, { useEffect } from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import CKEditor from "../../components/CKeditor/CKEditor";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getSingleCmsPagesActionThunk, updateCmsPagesActionThunk } from "../../store/cms/cms.action.async";
import TRootState from "../../store/root.types";
import { BarsLoader } from "../../components/loader/Loader";

const CMSPagesForm: React.FC = () => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, singleCmsPage } = useSelector((state: TRootState) => state.cmsPages);
  const { pageId } = useParams<{ pageId: string }>();
  const { type } = location.state as { type: string };

  const [pageData, setPageData] = useState("");
  const [name, setName] = useState(singleCmsPage?.nameEng);

  const handleRedirectToCMSPagesView = () => {
    Promise.resolve(
      dispatch(
        updateCmsPagesActionThunk(
          pageData,
          name || "",
          singleCmsPage?.id?.toString() || ""
        )
      )
    ).then(() => {
      navigate(`/settings/cms/view/${pageId}`, {
        state: {
          type: type || "customers"
        }
      });
    });
  };


  useEffect(() => {
    dispatch(getSingleCmsPagesActionThunk(pageId || ""));
  }, [dispatch, pageId]);

  useEffect(() => {
    setName(singleCmsPage?.nameEng);
    setPageData(singleCmsPage?.contentEng || "");
  }, [singleCmsPage?.contentEng, singleCmsPage?.nameEng]);

  return (
    <React.Fragment>
      <Header />
      <div id="app">
        <Sidebar />
        <div className="content-wrapper">
          {loading ? (<BarsLoader />) :
            (<div className="content">
              <header className="page-header">
                <div className="d-flex align-items-center">
                  <div className="mr-auto">
                    <h1>Edit {singleCmsPage?.nameEng}</h1>
                  </div>
                  <div className="m-l-10">
                    <button
                      className="btn btn-secondary"
                      onClick={() =>
                        navigate(`/settings/cms/view/${pageId}`, {
                          state: {
                            type: type || "customers"
                          }
                        })
                      }
                    >
                      <i className="fa fa-angle-left">&nbsp;</i> Back
                    </button>
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
                            CMS Particular Name
                            <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-5">
                            <input
                              type="text"
                              className="form-control"
                              value={name || ""}
                              readOnly
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="control-label text-md-right col-md-3">
                            Content <span className="text-danger">*</span>
                          </label>
                          <div className="col-md-7">
                            <CKEditor setPageData={setPageData} data={singleCmsPage && (singleCmsPage?.contentEng || "")} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer bg-light text-right">
                      <button
                        type="button"
                        className="btn btn-secondary clear-form mr-2"
                        onClick={() =>
                          navigate(`/settings/cms/view/${pageId}`, {
                            state: {
                              type: type || "customers"
                            }
                          })
                        }
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleRedirectToCMSPagesView}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>)}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CMSPagesForm;
