import { Dropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import TRootState from '../../store/root.types'
import { AppendedMyComponent } from '../appendToBody/appendToBody'
import { BarsLoader } from '../loader/Loader'

interface Props {
    page: number | string;
}
const EmailTemplatList: React.FC<Props> = ({ page }) => {

    const { loading, emailTemplateData: { emailTemplates } } = useSelector((state: TRootState) => state?.emailTemplate)

    return (
        <div className="table-responsive">
            <table className="table table-hover m-0">
                <thead>
                    <tr>
                        <th>Email Subject</th>
                        <th className="table-field-actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {!loading ? (
                        emailTemplates && emailTemplates?.length > 0 ? (
                            emailTemplates?.map((emailTemplate, index: number) => (
                                <tr key={emailTemplate?.id || index}>
                                    <td>{emailTemplate?.subject}</td>
                                    <td className="table-field-actions">
                                        <Dropdown className="btn-group">
                                            <Dropdown.Toggle id="dropdown-basic" className="btn btn-sm btn-icon-only" > <i className="icon dripicons-dots-3 zmdi-hc-fw"></i></Dropdown.Toggle>
                                            <AppendedMyComponent>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item as={Link} to={`/settings/email-templates/${emailTemplate?.id}/view`} state={{ page: page }}> <i className="fa fa-info-circle fa-fw text-accent-custom"></i> View</Dropdown.Item>
                                                    <Dropdown.Item as={Link} to={`/settings/email-templates/${emailTemplate?.id}/edit`} state={{ page: page }}> <i className="fa fa-edit fa-fw text-accent-custom"></i> Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </AppendedMyComponent>
                                        </Dropdown>
                                    </td>
                                </tr>))
                        ) : (<tr><td colSpan={2} style={{ textAlign: "center" }}>No records available</td></tr>)
                    ) : (<tr><td colSpan={2} style={{ textAlign: "center" }}><BarsLoader /></td></tr>)}
                </tbody>
            </table>
        </div >
    )
}
export default EmailTemplatList;