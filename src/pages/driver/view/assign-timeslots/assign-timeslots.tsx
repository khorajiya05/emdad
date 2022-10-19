import React from 'react'
import { TDriverDetailsPayload, TDriverTimeSlotsPayload } from '../../../../store/drivers/drivers.types'
import { convertTo12 } from '../../../../utils/helpers/timeConvert'
import ViewOrder from '../view'

const AssignTimeslots = () => {
    return (
        <ViewOrder>
            {(driver: TDriverDetailsPayload, timeslots: TDriverTimeSlotsPayload) => (
                <div className="tab-pane fadeIn active" id="tab-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12 col-xl-8">
                                <ul className="list-unstyled text-left row mb-0">
                                    {timeslots && timeslots?.assignedTime?.map((timeslot) => (
                                        <li className="mb-3 col-md-6">
                                            <label className="text-muted mb-1">{timeslot?.id}</label>
                                            <br /> {convertTo12(timeslot?.timeSlot?.startTime)} - {convertTo12(timeslot?.timeSlot?.endTime)}
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </ViewOrder>
    )
}

export default AssignTimeslots