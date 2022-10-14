import React from 'react'
import { Modal } from 'react-bootstrap'

function UnassignOrderModal() {
    return (
        <Modal
            centered
            show={showUnAssignOrderModal}
            onHide={() => handleUnAssignOrder()}
        >
            <Modal.Header className="justify-content-center border-0">
                <h3 className="modal-title">Unassign Order</h3>
            </Modal.Header>
            <Modal.Body className="text-center">
                <span>
                    <i className="far fa-times-circle fa-3x text-danger"></i>
                </span>
                <p className="font-size-18 m-0 mt-2">
                    Are you sure want to Unassign Order?
                </p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center border-0">
                <button
                    className="btn btn-dark min-w-100"
                    onClick={() => handleUnAssignOrder()}
                >
                    No
                </button>
                <button
                    className="btn btn-danger min-w-100"
                    onClick={() => handleUnAssignOrder()}
                >
                    Yes
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default UnassignOrderModal