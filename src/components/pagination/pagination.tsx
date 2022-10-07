import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TRootState from "../../store/root.types";
// import { RouteComponentProps } from "react-router-dom";


interface Props {
  ItemsComponent?: React.FC
  pageCount?: number;
  dispatchAction?: Function;
  filter?: string | Record<string, string>;
  setFilter?: Function;
  page?: number;
  setPage?: Function;
  //   navigate: string;
  // setFilterBy?: Function;
  //   completedOrders?: string | undefined;
  //   cancelledOrders?: string | undefined;
  //   todayOrders?: string | undefined;
}

const Pagination: React.FC<Props> = ({ ItemsComponent, dispatchAction, pageCount, page, setPage, filter, setFilter }) => {

  const navigate = useNavigate();
  const location = useLocation();
  // const itemsPerPage = useSelector((state: TRootState) => state.pagination.perPageItems);


  const handlePageClick = (event: { selected: number }) => {
    setPage && setPage(event.selected + 1);
    navigate(location.pathname, { state: { page: event.selected + 1 } });
  };

  useEffect(() => {
    dispatchAction && dispatchAction(page || 1)
  }, [page, filter])

  useEffect(() => {
    if (page && page > Math.ceil(pageCount || 57 / 10)) {
      setPage && setPage(() => page && page - 1);
      navigate(location.pathname, { state: { page: page - 1 } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Math.ceil(pageCount || 57 / 10)]);

  return (
    <div>
      <div className="pagination-container">
        {ItemsComponent ? <ItemsComponent
        // setFilter={setFilter}
        // filter={filter}
        // getAction={dispatchAction}
        // setFilterBy={setFilterBy}
        /> : ""}
        <div className="p-3">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="mt-1 font-size-14" role="status" aria-live="polite">
                Showing {page === 1 ? 1 : (page || 1 - 1) * 10 + 1} to {Math.min(Number(page) * 10, pageCount || 57)} of {pageCount} entries
              </div>
            </div>
            <ReactPaginate
              nextLabel={"Next"}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={Math.ceil(pageCount || 57 / 10) || 1}
              previousLabel={"Previous"}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              forcePage={page && page > 1 ? page - 1 : 0}
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              marginPagesDisplayed={4}
            // disableInitialCallback={true}
            />

            {/*             
            <div className="col-sm-12 col-md-7">
              <div className="text-right">
                <ul className="pagination m-0 float-right">
                  <li className="paginate_button page-item previous disabled">
                    <Link to="" className="page-link">
                      Previous
                    </Link>
                  </li>
                  <li className="paginate_button page-item active">
                    <Link to="" className="page-link">
                      1
                    </Link>
                  </li>
                  <li className="paginate_button page-item ">
                    <Link to="" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="paginate_button page-item ">
                    <Link to="" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="paginate_button page-item ">
                    <Link to="" className="page-link">
                      4
                    </Link>
                  </li>
                  <li className="paginate_button page-item ">
                    <Link to="" className="page-link">
                      5
                    </Link>
                  </li>
                  <li className="paginate_button page-item ">
                    <Link to="" className="page-link">
                      6
                    </Link>
                  </li>
                  <li className="paginate_button page-item next">
                    <Link to="" className="page-link">
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>

      </div>
    </div>
  )
};
export default Pagination;