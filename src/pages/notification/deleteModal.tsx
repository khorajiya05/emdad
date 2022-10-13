import React from 'react'
import { Modal } from 'react-bootstrap'

interface Props {
    showDeleteModal: boolean,
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>,
    handleDelete: Function

}

const DeleteModal: React.FC<Props> = ({ showDeleteModal, setShowDeleteModal, handleDelete }) => {
    return (
        <Modal centered show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
            <Modal.Header className="justify-content-center border-0">
                <h3 className="modal-title">Delete</h3>
            </Modal.Header>
            <Modal.Body className="text-center">
                <span>
                    <i className="far fa-times-circle fa-3x text-danger"></i>
                </span>
                <p className="font-size-18 m-0 mt-2">Are you sure want to delete?</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center border-0">
                <button
                    className="btn btn-dark min-w-100"
                    onClick={() => setShowDeleteModal(false)}
                >
                    No
                </button>
                <button
                    className="btn btn-danger min-w-100"
                    onClick={() => handleDelete()}
                >
                    Yes
                </button>
            </Modal.Footer>
        </Modal >
    )
}

export default DeleteModal