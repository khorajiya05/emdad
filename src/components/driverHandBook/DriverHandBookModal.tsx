import React from "react";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";


interface Prop {
  show: boolean;
  setShow: Function;
  submitAction: Function;
  editDriverHandBook?: { question: string; answer: string } | null;
}

const DriverHandBookModal: React.FC<Prop> = ({ show, setShow, submitAction, editDriverHandBook }) => {

  const handleClose = () => {
    setShow(false);
  };

  const driverHandBookSchema = Yup.object().shape({
    question: Yup.string().required("Question is required"),
    answer: Yup.string().required("Answer is required")
  });

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: driverHandBookSchema,
    initialValues: {
      question: (editDriverHandBook && editDriverHandBook?.question) || "",
      answer: (editDriverHandBook && editDriverHandBook?.answer) || ""
    },

    onSubmit: (values) => {
      submitAction(values?.question, values?.answer);
      handleClose();
    }
  });

  const { errors, touched } = formik;

  return (
    <>
      <Modal centered
        show={show} onHide={() => handleClose()}>
        <Modal.Header>
          <h4 className="modal-title">{editDriverHandBook ? "Edit" : "Add"} Question</h4>
          <button className="close" onClick={() => handleClose()}>
            <span aria-hidden="true" className="zmdi zmdi-close"></span>
          </button>
        </Modal.Header>
        <form onSubmit={formik.handleSubmit}>
          <div className="modal-body">
            <div className="form-group">
              <label className="control-label">Question</label>
              <input type="text" className="form-control" value={formik?.values?.question} onChange={formik?.handleChange} name="question" />
              <span className="small text-danger">{errors?.question && touched ? errors?.question : ""}</span>
            </div>
            <div className="form-group">
              <label className="control-label">Answer</label>
              <textarea className="form-control" rows={4} name="answer" value={formik?.values?.answer} onChange={formik?.handleChange}></textarea>
              <p className="text-danger">{errors?.answer && touched ? errors?.answer : ""}</p>
            </div>
          </div>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={() => handleClose()}>
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default DriverHandBookModal