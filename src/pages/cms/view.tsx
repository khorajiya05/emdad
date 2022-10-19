import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Header from "../../components/header/header";
import { BarsLoader } from "../../components/loader/Loader";
import Sidebar from "../../components/sidebar/sidebar";
import { getSingleCmsPagesActionThunk } from "../../store/cms/cms.action.async";
import TRootState from "../../store/root.types";

const CMSPagesView: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const { type } = location.state as { type: string };
  const { pageId } = useParams<{ pageId: string }>();

  const { loading, singleCmsPage } = useSelector((state: TRootState) => state?.cmsPages);

  const handleRedirectToCMSPages = () => {
    navigate(`/settings/cms/${type || "customers"}`);
  };

  const handleRedirectToCMSPagesForm = () => {
    navigate("/settings/cms/form/" + pageId, { state: { type: type || "customers" } });
  };

  useEffect(() => {
    dispatch(getSingleCmsPagesActionThunk(pageId || ""));
  }, [dispatch, pageId]);


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
                  <h1>View {singleCmsPage?.nameEng}</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToCMSPages()}
                  >
                    <i className="fa fa-angle-left">&nbsp;</i> Back
                  </button>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRedirectToCMSPagesForm()}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">

                <div className="card-body font-weight-normal cms-page">
                  {loading ? (
                    <BarsLoader />
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: singleCmsPage?.contentEng }}></p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CMSPagesView;
