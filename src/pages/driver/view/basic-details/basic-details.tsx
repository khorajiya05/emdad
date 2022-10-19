import { TDriverDetailsPayload, TDriverTimeSlotsPayload } from '../../../../store/drivers/drivers.types'
import ViewOrder from '../view'

const BasicDetails = () => {
  return (
    <ViewOrder>
      {(driver: TDriverDetailsPayload, timeSlots: TDriverTimeSlotsPayload) => (
        <div className="tab-pane fadeIn active" id="tab-1">
          <div className="card-body">
            <div className="media">
              <img
                src={""}
                className="align-self-start mr-5 ml-3 rounded-circle img-thumbnail o-cover"
                alt="profile-pic"
                width="130"
                height="130"
              />
              <div className="media-body">
                <div className="row">
                  <div className="col-lg-12 col-xl-8">
                    <h2 className="mt-0 mb-3 text-info">
                      {driver?.driver?.fullName ? driver?.driver?.fullName : "-"}
                    </h2>
                    <ul className="list-unstyled text-left row mb-0">

                      <li className="mb-3 col-md-6">
                        <label className="text-muted mb-1">
                          Assign Timeslot
                        </label>
                        <br /> 12:00 PM to 3:00 PM
                        <br /> 10:00 PM to 8:00 PM
                      </li>
                      <li className="mb-3 col-md-6">
                        <label className="text-muted mb-1">
                          Email Id
                        </label>
                        <br /> {driver?.driver?.email ? driver?.driver?.email : "-"}
                      </li>
                      <li className="mb-3 col-md-6">
                        <label className="text-muted mb-1">
                          Vehicle details
                        </label>
                        <br /> Current Fuel : {driver?.vehicle?.currentFuel ? driver?.vehicle?.currentFuel : "-"}
                        <br />
                        Fuel Capacity : {driver?.vehicle?.fuelCapacity ? driver?.vehicle?.fuelCapacity : "-"}
                      </li>
                      <li className="mb-3 col-md-6">
                        <label className="text-muted mb-2">
                          Assigned Geofence
                        </label>
                        <br />
                        <span className="badge font-size-12 ml-0 mr-1 view-badge badge-light">
                          {driver?.location?.latLong ? driver?.location?.latLong : "-"}
                        </span>
                        <span className="badge font-size-12 ml-0 mr-1 view-badge badge-light">
                          {driver?.location?.latLong ? driver?.location?.latLong : "-"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </ViewOrder>

  )
}
export default BasicDetails