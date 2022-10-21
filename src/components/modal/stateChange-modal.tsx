import React from 'react'
import { Modal } from 'react-bootstrap'

interface Props {
    show: boolean;
    setShow: Function;
    handleStatusChange: Function;
}

const StateChangeModal: React.FC<Props> = ({ show, setShow, handleStatusChange }) => {

    return (
        <Modal centered show={show} onHide={() => setShow(false)} >
            <Modal.Header className="justify-content-center border-0">
                <h3 className="modal-title">Change Status</h3>
            </Modal.Header>
            <Modal.Body className="text-center">
                <span>
                    <i className="far fa-check-circle fa-3x text-success"></i>
                </span>
                <p className="font-size-18 m-0 mt-2">
                    Are you sure want to change status?
                </p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center border-0">
                <button
                    className="btn btn-dark min-w-100"
                    onClick={() => setShow(false)}
                >
                    No
                </button>
                <button
                    className="btn btn-danger min-w-100"
                    onClick={() => handleStatusChange()}
                >
                    Yes
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default StateChangeModal