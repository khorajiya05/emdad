import moment from 'moment';
import _ from "lodash";
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from "react-select";
import { BarsLoader } from '../../components/loader/Loader';
import TRootState from '../../store/root.types';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { deleteNotificationActionThunk, updateNotificationActionThunk } from '../../store/notifications/notifications.actions.async';
import DeleteModal from './deleteModal';
import ViewModal from './viewModal';
import { TNotification } from '../../store/notifications/notifications.types';

interface Props {
  getAction: Function
}
const readUnReadDropDown = [
  { value: "read", label: "Mark as Read" },
  { value: "un_read", label: "Mark as Unread" },
];

const NotificationReceivedList: React.FC<Props> = ({ getAction }) => {

  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const { notifications } = useSelector((state: TRootState) => state?.notifications?.notifications);
  const loading = useSelector((state: TRootState) => state?.notifications?.loading);
  const userId = "";

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)
  const [showViewModal, setShowViewModal] = useState<boolean>(false)
  const [showViewModalData, setShowViewModalData] = useState<TNotification | null>(null)

  const [readUnReadDropDownValue, setReadUnReadDropDownValue] = useState("")
  const [allNotifications, setAllNotifications] = useState<{ id: number, isChecked: boolean }[]>([]);
  const [selectedNotifications, setSelectedNotifications] = useState<number[]>(allNotifications?.filter((notification) => notification?.isChecked === true).map(notification => notification?.id))


  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event?.target;
    let cloneAllNotifications = _.cloneDeep(allNotifications);
    if (id === "default") {
      cloneAllNotifications = cloneAllNotifications.map((notificatoin) => ({ ...notificatoin, isChecked: checked }))
    }
    else {
      cloneAllNotifications = cloneAllNotifications?.map(notification => {
        return notification?.id === Number(id) ? { id: Number(id), isChecked: checked } : notification
      })
    }
    setAllNotifications(cloneAllNotifications)
    setSelectedNotifications(cloneAllNotifications?.filter(notification => notification?.isChecked === true)?.map(notification => notification?.id))
  }


  const handleDelete = () => {
    setShowDeleteModal(false)
    dispatch(deleteNotificationActionThunk(selectedNotifications, getAction, setSelectedNotifications))
  }


  useEffect(() => {
    setAllNotifications(notifications?.map((notification) => ({ id: notification?.id, isChecked: false })))
  }, [notifications])


  return (
    <>
      <div className="tab-content">
        <div className="tab-pane fadeIn active" id="tab-1">
          <ul className="actions top-right">
            <li className="m-r-10">
              <Select
                className="custom-select-dropdown min-w-200"
                value={selectedNotifications ? (readUnReadDropDown || []).find((val) => val.value === readUnReadDropDownValue) || null : null}
                onChange={(val) => {
                  setReadUnReadDropDownValue((val && val.value) || "");
                  selectedNotifications?.length && dispatch(updateNotificationActionThunk(selectedNotifications, val?.value || "read"));
                  setSelectedNotifications([])
                }}
                placeholder="-- Select --"
                options={readUnReadDropDown || []} />
            </li>
            <li className="m-r-10">
              <button
                type="button"
                className="btn btn-danger h-35 lh-16"
                onClick={() => setShowDeleteModal(selectedNotifications.length ? true : false)}
              >
                Remove
              </button>
            </li>
          </ul>
          <div className="table-responsive">
            <table className="table table-hover m-0">
              <thead>
                <tr>
                  <th className="w-50">
                    <label className="control control-outline control-primary control--checkbox m-0" htmlFor="default">
                      <input
                        type="checkbox"
                        id="default"
                        checked={allNotifications?.length ? allNotifications?.every(notification => notification?.isChecked === true) : false}
                        onChange={(event) => handleCheck(event)} />
                      <div className="control__indicator" style={{ top: "-10px" }}></div>
                    </label>
                  </th>
                  <th>Description</th>
                  <th>Date & Time</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {!loading ?
                  (notifications && notifications?.map((notification, index) => (
                    <tr key={notification?.id}>
                      <td>
                        <label className="control control-outline control-primary control--checkbox m-0" htmlFor={notification?.id.toString()}>
                          <input
                            type="checkbox"
                            id={notification?.id.toString()}
                            checked={selectedNotifications?.some(id => id === Number(notification?.id))}
                            onChange={(event) => {
                              handleCheck(event);
                            }} />
                          <div className="control__indicator" style={{ top: "-10px" }}></div>
                        </label>
                      </td>
                      <td className={notification?.readedBy ? "text-muted" : "font-weight-500 text-black"}>{notification?.descriptionEng}</td>
                      <td className={notification?.readedBy ? "text-muted" : "font-weight-500 text-black"}>{moment(notification?.createdAt).format("MM/DD/YYY hh:mm A")}</td>
                      <td>
                        <i
                          className="fa fa-info-circle top-1 m-l-5 m-r-5"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setShowViewModalData(notification);
                            setShowViewModal(true);
                          }}
                        >
                        </i>
                      </td>
                    </tr>
                  ))
                  ) :
                  loading && (<tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>
                      <BarsLoader />
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} handleDelete={handleDelete} />
      <ViewModal showViewModal={showViewModal} notification={showViewModalData} setShowViewModal={setShowViewModal} />
    </>
  )
}

export default NotificationReceivedList