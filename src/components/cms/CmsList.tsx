import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import TRootState from '../../store/root.types'
import { BarsLoader } from '../loader/Loader'

const CmsList: React.FC = () => {

    const location = useLocation();

    const type = location?.pathname === "/settings/cms/customers" ? "customers" : "drivers"
    const { loading, cmsPageList: { cmsPages } } = useSelector((state: TRootState) => state?.cmsPages)

    return (
        <div className="card-body p-0">
            <div className="tab-content">
                <div className="tab-pane fadeIn active" id="tab-1">
                    <div className="table-responsive">
                        <table className="table table-hover m-0">
                            <thead>
                                <tr>
                                    <th>Particular Name</th>
                                    <th>Last Modified on</th>
                                    <th className="table-field-actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {!loading ? (
                                    cmsPages && cmsPages.length > 0 ? (
                                        cmsPages.map((page, index) => (
                                            <tr key={index}>
                                                <td>{page?.nameEng}</td>
                                                <td>{page?.updatedAt ? moment(page?.updatedAt).format("DD MMMM, YYYY") : "-"}</td>
                                                <td className="table-field-actions">
                                                    <Link
                                                        to={"/settings/cms/view/" + page?.id}
                                                        state={{ type: type }}
                                                        className="btn btn-default btn-icon-only"
                                                    >
                                                        <i className="zmdi zmdi-eye zmdi-hc-fw text-secondary font-size-20"></i>
                                                    </Link>
                                                </td>
                                            </tr>))
                                    ) : (
                                        <tr>
                                            <td colSpan={5} style={{ textAlign: "center" }}>
                                                No pages available
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <tr>
                                        <td colSpan={5} style={{ textAlign: "center" }}>
                                            <BarsLoader />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CmsList