import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from "react-bootstrap-sweetalert";

import TRootState from '../../store/root.types';
import { BarsLoader } from '../loader/Loader';
import DriverHandBookModal from "./DriverHandBookModal";
import { deleteDriverHandBookActionThunk, updateDriverHandBookActionThunk } from "../../store/driverHandBook/driverHandBook.actions.async";
import { AppendedMyComponent } from "../appendToBody/appendToBody";

interface Props {
  deleteDriverHandBook: (deleteHandbook: (fetchDriverHandbooks: () => void) => void) => void
};

const HandBookList: React.FC<Props> = ({ deleteDriverHandBook }) => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const { loading, driverHandBookData: { driverHandBooks } } = useSelector((state: TRootState) => state?.driverHandBook)

  const [show, setShow] = useState(false);
  const [id, setId] = useState<string | number>("");
  const [sweetAlert, setSweetAlert] = useState(false);
  const [editDriverHandBook, setEditDriverHandBook] = useState<{ question: string; answer: string } | null>(null)


  const showAlert = () => {
    setSweetAlert(true);
  };
  const hideAlert = () => {
    setSweetAlert(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleSubmit = (question: string, answer: string) => {
    dispatch(updateDriverHandBookActionThunk({ id, question, answer }))
    setShow(false)
  };

  const deleteHandbook = (fetchDriverHandbooks: () => void) => {
    dispatch(deleteDriverHandBookActionThunk(id, fetchDriverHandbooks))
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover nowrap m-0">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th className="table-field-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (<tr><td colSpan={8} style={{ textAlign: "center" }}><BarsLoader /></td></tr>
            ) : driverHandBooks && driverHandBooks.length > 0 ?
              (driverHandBooks?.map((handBook, index) => (
                <tr key={index}>
                  <td>{handBook?.question}</td>
                  <td>{handBook?.answer}</td>

                  <td className="table-field-actions">
                    <Dropdown className="btn-group">
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="btn btn-sm btn-icon-only"
                      >
                        <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                      </Dropdown.Toggle>
                      <AppendedMyComponent>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#"
                            onClick={() => {
                              setEditDriverHandBook({
                                question: handBook?.question,
                                answer: handBook?.answer
                              })
                              setId(handBook?.id);
                              handleShow();
                            }}
                          >
                            <i className="fa fa-edit fa-fw text-accent-custom"></i>
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#"
                            onClick={() => {
                              setId(handBook?.id?.toString());
                              showAlert();
                            }}
                          >
                            <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </AppendedMyComponent>
                    </Dropdown>
                  </td>
                </tr>)
              )) : (<tr><td colSpan={8} style={{ textAlign: "center" }}>No Driver handBook available</td></tr>)
            }
          </tbody>
        </table>
      </div>
      {
        show && <DriverHandBookModal
          show={show}
          setShow={setShow}
          editDriverHandBook={editDriverHandBook}
          submitAction={handleSubmit}
        />
      }
      {
        sweetAlert && (
          <SweetAlert
            danger
            showCancel
            title="Are you sure you want to delete?"
            onConfirm={hideAlert}
            onCancel={hideAlert}
            customButtons={
              <>
                <button className="btn btn-dark min-w-100 mr-3" onClick={hideAlert}>
                  No
                </button>
                <button className="btn btn-danger min-w-100"
                  onClick={() => {
                    deleteDriverHandBook(deleteHandbook)
                    hideAlert()
                  }
                  }>
                  Yes
                </button>
              </>
            }
          />
        )
      }
    </>
  )
}

export default HandBookList
