import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Pagination from "../../components/pagination/pagination";
import TimeSlotsList from "../../components/timeslot/TimeSlotsList";
import { addTimeSlotActionThunk, getTimeSlotActionThunk } from "../../store/timesSlot/timeSlot.actions.async";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import TRootState from "../../store/root.types";
import { warningToast } from "../../components/toast/toast";
import { TAddTimeSlotPayload } from "../../store/timesSlot/timeSlot.types";
import moment from "moment";

interface createMoreSlotData {
  [name: string]: string | number;
  startTime: string;
  endTime: string;
  orderLimit: number | string;
}

const Timeslot: React.FC = () => {

  const location = useLocation();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const { state } = location;
  const { perPageItems } = useSelector((state: TRootState) => state?.pagination)
  const { count, timeSlots } = useSelector((state: TRootState) => state?.timeSlot?.timeSlotList)

  const [page, setPage] = useState(Number(state?.page) || 1);
  const [searchSlot, setSearchSlot] = useState<string | null>(null);
  const [showAddNewTimeslotModal, setShowAddNewTimeslotModal] = useState<boolean>(false);
  const [createMoreSlot, setCreateMoreSlot] = useState<createMoreSlotData[]>([{ startTime: "", endTime: "", orderLimit: "" }]);




  /**
   * add new slot function
   */
  const slotData = {
    startTime: "",
    endTime: "",
    orderLimit: ""
  };
  const addMoreSlotHandler = () => {
    setCreateMoreSlot([...createMoreSlot, slotData]);
  };

  /**
  * delete slot function
  * @param id
  * @returns
  */
  const deleteMoreSlotHandler = (id: number) => {
    const updatedMoreSlot = [...createMoreSlot];
    if (updatedMoreSlot.length === 1) return;
    updatedMoreSlot.splice(id, 1);
    setCreateMoreSlot(updatedMoreSlot);
  };

  /**
 * convert to 00 hours
 */
  const formatTime00: TAddTimeSlotPayload = [];

  (createMoreSlot || []).forEach((time) => {
    formatTime00.push({
      startTime: moment(time.startTime, "HHmmss").format("HH:mm:ss"),
      endTime: moment(time.endTime, "HHmmss").format("HH:mm:ss"),
      orderLimit: time.orderLimit
    });
  });

  /**
   * find same slot for start and end value
   */
  const sameTime: string[] = [];
  const sameFn = () => {
    (createMoreSlot || []).forEach((time, i: number) => {
      if (
        createMoreSlot[i].startTime === createMoreSlot[i].endTime &&
        createMoreSlot[i] &&
        createMoreSlot[i].startTime !== "" &&
        createMoreSlot[i].endTime !== ""
      ) {
        sameTime.push(createMoreSlot[i].startTime);
      }
    });
  };

  /**
  * find empty slot for start or end value
  */
  const emptySlot: object[] = [];
  const emptyFn = () => {
    (createMoreSlot || []).forEach((time, i: number) => {

      if (
        createMoreSlot[i].startTime === "" ||
        createMoreSlot[i].endTime === "" ||
        createMoreSlot[i].orderLimit === ""
      ) {
        emptySlot.push({
          startTime: createMoreSlot[i].startTime,
          endTime: createMoreSlot[i].endTime,
        });
      };
    });
  };

  /**
   * find existing slot
   */
  const existingSlot: object[] = [];
  const existingFn = () => {
    for (let n = 0; n < (formatTime00 || []).length; n++) {
      const newSlot = formatTime00[n];
      for (let o = 0; o < (timeSlots || []).length; o++) {
        const oldSlot = (timeSlots || [])[o];
        if (
          newSlot.startTime === oldSlot.startTime &&
          newSlot.endTime === oldSlot?.endTime
        ) {
          existingSlot.push(newSlot);
        }
      }
    }
  };

  /**
 * add slot submit function
 * @param e
 */
  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    sameFn();
    emptyFn();
    existingFn();
    if (emptySlot.length > 0) {
      warningToast("This field is required.");
    } else if (sameTime.length > 0) {
      warningToast("Please enter valid slot.");
    } else if (existingSlot.length > 0) {
      warningToast("Time slot already exists.");
    } else {
      dispatch(addTimeSlotActionThunk(formatTime00, fetchSlots));
      setCreateMoreSlot([
        {
          startTime: "",
          endTime: "",
          orderLimit: "",
        },
      ]);
      setShowAddNewTimeslotModal(false);
    }
  };

  /**
  * slot state update on onChange method
  * @param index
  * @param name
  * @param value
  */
  const addSlotData = (index: number, name: string, value: string) => {
    const updatedMoreSlot = [...createMoreSlot];
    updatedMoreSlot[index][name] = value;
    setCreateMoreSlot(updatedMoreSlot);
  };

  const closeAddNewTimeslotModal = () => {
    setShowAddNewTimeslotModal(false);
    setCreateMoreSlot([{ startTime: "", endTime: "", orderLimit: 0 }]);
  }

  const fetchSlots = (pages?: number) => {
    dispatch(
      getTimeSlotActionThunk(searchSlot || null, pages || page, perPageItems)
    );
  };
  return (
    <React.Fragment>
      <Header />
      <div id="app">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>Time Slots</h1>
                </div>
                <div className="m-l-10">
                  <div className="input-group w-250">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      title="Search"
                      value={searchSlot || ""}
                      onChange={(e) => setSearchSlot(e.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          fetchSlots();
                        }
                      }}
                    />
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="input-group-text pointer"
                        onClick={() => fetchSlots()}
                      >
                        <span className="fa fa-search"></span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSearchSlot(null);
                      dispatch(
                        getTimeSlotActionThunk(null, page, perPageItems)
                      );
                    }}
                  >
                    Reset
                  </button>
                </div>
                <div className="m-l-10">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowAddNewTimeslotModal(true)}
                  >
                    Add New Time Slot
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                <div className="card-body p-0">
                  <Pagination
                    ItemsComponent={TimeSlotsList}
                    pageCount={count}
                    dispatchAction={fetchSlots}
                    setPage={setPage}
                    page={page}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal
        centered
        scrollable
        show={showAddNewTimeslotModal}
        onHide={() => closeAddNewTimeslotModal()}
        size="lg"
      >
        <Modal.Header>
          <h4 className="modal-title">Add New Time Slot</h4>
          <button className="close" onClick={() => closeAddNewTimeslotModal()}>
            <span aria-hidden="true" className="zmdi zmdi-close"></span>
          </button>
        </Modal.Header>
        <form onSubmit={submitHandler}>
          <Modal.Body>
            {createMoreSlot?.map((data, index) => {
              return (
                <div className="form-row" key={index}>
                  <div className="col-md-10">
                    <div className="form-row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="control-label">
                            Start Time <span className="text-danger">*</span>
                          </label>
                          <input
                            type="time"
                            value={data.startTime}
                            className="form-control"
                            onChange={(e) =>
                              addSlotData(
                                index,
                                "startTime",
                                moment(e.target.value, "HHmmss").format("HH:mm")
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="control-label">
                            End Time <span className="text-danger">*</span>
                          </label>
                          <input
                            type="time"
                            value={data.endTime}
                            className="form-control"
                            onChange={(e) => {
                              addSlotData(
                                index,
                                "endTime",
                                moment(e.target.value, "HHmmss").format("HH:mm")
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="control-label">
                            Order Limit <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={data?.orderLimit}
                            onChange={(e) => {
                              addSlotData(
                                index,
                                "orderLimit",
                                e.target?.value
                              );
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label className="control-label d-block">&nbsp;</label>
                      <button type="button" className="btn btn-danger removebtn px-3" onClick={() => deleteMoreSlotHandler(index)}>
                        <i className="fa fa-trash-alt text-white"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <button type="button" className="btn btn-dark btn-sm" onClick={addMoreSlotHandler}>
              <i className="fa fa-plus text-white"></i> Add more
            </button>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" type="button" onClick={() => closeAddNewTimeslotModal()}>
              Close
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default Timeslot;
