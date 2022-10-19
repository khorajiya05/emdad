import React from 'react'
import { Modal } from 'react-bootstrap'

function StateChangeModal() {

    const showChangeStatusModal:boolean = false
    const handleCloseChangeStatus = () => {}
    return (
        <Modal
            centered
            show={showChangeStatusModal}
            onHide={() => handleCloseChangeStatus()}
        >
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
                    onClick={() => handleCloseChangeStatus()}
                >
                    No
                </button>
                <button
                    className="btn btn-danger min-w-100"
                    onClick={() => handleCloseChangeStatus()}
                >
                    Yes
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default StateChangeModal