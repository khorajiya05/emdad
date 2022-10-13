import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../../components/pagination/pagination';
import TRootState from '../../store/root.types';
import NoificationList from './list';
import NotificationReceivedList from './notificationReceivedList';

const NotificatoinSent: React.FC = () => {


  const count = useSelector((state: TRootState) => state?.notifications?.notifications?.count)

  return (
    <NoificationList>
      {
        (page: number, setPage: Function, fetchNotifications: Function) => {
          const fetchNotificationsData = (pageNum?: number) => {
            fetchNotifications("", pageNum)
          };
          return (
            <div className="card-body p-0">
              <Pagination
                page={page}
                setPage={setPage}
                ItemsComponent={NotificationReceivedList}
                pageCount={count}
                dispatchAction={fetchNotificationsData} />
            </div>
          )
        }
      }
    </NoificationList>
  )
}

export default NotificatoinSent