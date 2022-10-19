import React from 'react'
import { TDriverDetailsPayload, TDriverTimeSlotsPayload } from '../../../../store/drivers/drivers.types'
import { convertTo12 } from '../../../../utils/helpers/timeConvert'
import ViewOrder from '../view'

const UpcomingOrder = () => {
    return (
        <ViewOrder>
            {(driver: TDriverDetailsPayload, timeSlots: TDriverTimeSlotsPayload) => (<div className="tab-pane fadeIn active" id="tab-2">
                <div className="table-responsive">
                    <table className="table table-hover nowrap m-0">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Timeslot </th>
                                <th>Vehicle </th>
                                <th className="table-field-status">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeSlots && timeSlots?.assignedTime?.map((timeslot) => (
                                <tr key={timeslot?.id}>
                                    <td>{timeslot?.id} </td>
                                    <td>{convertTo12(timeslot?.timeSlot?.startTime)} to {convertTo12(timeslot?.timeSlot?.endTime)}</td>
                                    <td>-</td>
                                    <td className="table-field-status">
                                        <span className="badge badge-pill badge-success">
                                            -
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            )}
        </ViewOrder>

    )
}

export default UpcomingOrder