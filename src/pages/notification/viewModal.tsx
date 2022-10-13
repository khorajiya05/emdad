import React from 'react'
import { Modal } from 'react-bootstrap'
import { TNotification } from '../../store/notifications/notifications.types'

interface Props {
  showViewModal: boolean,
  notification: TNotification | null,
  setShowViewModal: React.Dispatch<React.SetStateAction<boolean>>
}
const ViewModal: React.FC<Props> = ({ showViewModal, notification, setShowViewModal }) => {
  return (
    <Modal centered show={showViewModal}>
      <Modal.Header>
        <h4 className="modal-title">Notification</h4>
        <button className="close" onClick={() => setShowViewModal(false)}>
          <span aria-hidden="true" className="zmdi zmdi-close"></span>
        </button>
      </Modal.Header>
      <Modal.Body>
        {notification?.descriptionEng && (
          <div
            dangerouslySetInnerHTML={{ __html: (notification?.descriptionEng || notification?.descriptionArb) }}
          />
        )}
      </Modal.Body>
    </Modal>
  )
}
export default ViewModal