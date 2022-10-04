import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { RouteComponentProps } from "react-router-dom";


interface Props {
  ItemsComponent?: React.FC
  //   pageCount: number;
    dispatchAction?: Function;
  //   filter?: string | Record<string, string>;
  //   setFilter?: Function;
  //   page?: number;
  //   setPage?: Function;
  //   navigate: string;
  //   setFilterBy?: Function;
  //   completedOrders?: string | undefined;
  //   cancelledOrders?: string | undefined;
  //   todayOrders?: string | undefined;
  }

  const Pagination: React.FC<Props> = ({ItemsComponent,dispatchAction}) => {

    useEffect(()=>{
      dispatchAction && dispatchAction()
    },[])

    return (
      <div>
        <div className="pagination-container">
          {ItemsComponent? <ItemsComponent /> : ""}
          <div className="p-3">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div className="mt-1 font-size-14" role="status" aria-live="polite">
                  Showing 1 to 10 of 57 entries
                </div>
              </div>
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
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  };
  export default Pagination;