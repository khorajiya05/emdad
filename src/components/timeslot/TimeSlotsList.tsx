import moment from 'moment';
import { useState } from 'react';
import { Dropdown, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import TRootState from '../../store/root.types'
import { deleteTimeSlotActionThunk, editTimeSlotActionThunk } from '../../store/timesSlot/timeSlot.actions.async';
import { convertTo12 } from '../../utils/helpers/timeConvert';
import { AppendedMyComponent } from '../appendToBody/appendToBody';
import { BarsLoader } from '../loader/Loader';
import DeleteModal from '../modal/delete-modal';
import { warningToast } from '../toast/toast';

interface Props {
    getAction: Function;
}
const TimeSlotsList: React.FC<Props> = ({ getAction }) => {

    const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

    const { loading, timeSlotList: { timeSlots } } = useSelector((state: TRootState) => state?.timeSlot)

    const [showEditSlot, setShowEditSlot] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [editId, setEditId] = useState<number | null>(null);
    const [startEditTimeSlot, setStartEditTimeSlot] = useState("");
    const [originalStartTimeSlot, setOriginalStartTimeSlot] = useState("");
    const [endEditTimeSlot, setEndEditTimeSlot] = useState("");
    const [originalEndTimeSlot, setOriginalEndTimeSlot] = useState("");
    const [editOrderLimit, setEditOrderLimit] = useState<number | null>(null)
    const [originalOrderLimit, setOriginalOrderLimit] = useState<number | null>(null);

    const convertedStartTime00 = moment(startEditTimeSlot, "HHmmss").format("HH:mm:ss");
    const convertedEndTime00 = moment(endEditTimeSlot, "HHmmss").format("HH:mm:ss");

    const closeEditeModel = () => {
        setShowEditSlot(false);
        setStartEditTimeSlot("");
        setEndEditTimeSlot("");
        setEditOrderLimit(null);
        setOriginalOrderLimit(null);
    }

    /**
     * find existing slot
    */
    const existingSlot = timeSlots.filter(
        (old) => old.startTime === convertedStartTime00 && old.endTime === convertedEndTime00
    );

    /**
     * 
     * is orderlimit changed
     */
    const isOrderLimtChanged = () => {
        return (originalOrderLimit !== editOrderLimit);
    }

    /**
    * 
    * is timeslot changed
    */
    const isTimeSlotChanged = () => {
        return !(originalStartTimeSlot === convertedStartTime00 && originalEndTimeSlot === convertedEndTime00)
    }


    const editSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        console.log("1", startEditTimeSlot === endEditTimeSlot);
        console.log("2", editOrderLimit === null);
        console.log("3", existingSlot.length > 0 && !isOrderLimtChanged());
        console.log("4", isOrderLimtChanged() && isTimeSlotChanged() && existingSlot.length > 0, isTimeSlotChanged());
        console.log("5", isOrderLimtChanged() && !isTimeSlotChanged());

        if (startEditTimeSlot === endEditTimeSlot) {
            warningToast("Please enter valid slot.");
        } else if (editOrderLimit === null) {
            warningToast("Please enter order litmit.");
        } else if (existingSlot.length > 0 && !isOrderLimtChanged()) {
            warningToast("Time slot already exists.");
        } else if (isOrderLimtChanged() && isTimeSlotChanged() && existingSlot.length > 0) {
            warningToast("Time slot already exists.");
        } else if (isOrderLimtChanged() && !isTimeSlotChanged()) {
            dispatch(editTimeSlotActionThunk(editId, { startTime: convertedStartTime00, endTime: convertedEndTime00, orderLimit: editOrderLimit || 0 }, getAction));
            setShowEditSlot(false);
        } else {
            dispatch(editTimeSlotActionThunk(editId, { startTime: convertedStartTime00, endTime: convertedEndTime00, orderLimit: editOrderLimit || 0 }, getAction));
            setShowEditSlot(false);
        }
    };

    const handleDelete = () => {
        dispatch(deleteTimeSlotActionThunk(editId, getAction));
        setShowDeleteModal(false);
    }

    return (
        <>
            <div className="table-responsive">
                <table className="table table-hover m-0">
                    <thead>
                        <tr>
                            <th className="w-300">Start Time</th>
                            <th>End Time</th>
                            <th className="text-center">Order Limit</th>
                            <th className="table-field-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={3} style={{ textAlign: "center" }}>
                                    <BarsLoader />
                                </td>
                            </tr>
                        ) : timeSlots && timeSlots.length > 0 ? (
                            timeSlots.map((slot) => (
                                <tr key={slot.id}>
                                    <td>{convertTo12(slot.startTime)}</td>
                                    <td>{convertTo12(slot.endTime)}</td>
                                    <td className="text-center">{slot?.orderLimit}</td>
                                    <td className="table-field-actions">
                                        <Dropdown className="btn-group">
                                            <Dropdown.Toggle
                                                id="dropdown-basic"
                                                className="btn btn-sm btn-icon-only"
                                            >
                                                <i className="icon dripicons-dots-3 zmdi-hc-fw"></i>
                                            </Dropdown.Toggle>
                                            <AppendedMyComponent>
                                            <Dropdown.Menu>
                                                <Dropdown.Item
                                                    href="#"
                                                    onClick={() => {
                                                        setShowEditSlot(true);
                                                        setEditId(slot.id);

                                                        setEditOrderLimit(slot?.orderLimit);
                                                        setOriginalOrderLimit(slot?.orderLimit);

                                                        setStartEditTimeSlot(moment(slot.startTime, "HHmmss").format("HH:mm"));
                                                        setOriginalStartTimeSlot(slot.startTime);

                                                        setEndEditTimeSlot(moment(slot.endTime, "HHmmss").format("HH:mm"));
                                                        setOriginalEndTimeSlot(slot.endTime);
                                                    }}
                                                >
                                                    <i className="fa fa-edit fa-fw text-accent-custom"></i>
                                                    Edit
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    onClick={() => { setEditId(slot?.id); setShowDeleteModal(true) }}
                                                >
                                                    <i className="fa fa-trash-alt fa-fw text-accent-custom"></i>
                                                    Delete
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                            </AppendedMyComponent>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} style={{ textAlign: "center" }}>
                                    No Time slots available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal
                centered
                scrollable
                show={showEditSlot}
                onHide={() => closeEditeModel()}
                size="lg"
            >
                <Modal.Header>
                    <h4 className="modal-title">Edit Time Slot</h4>
                    <button className="close" onClick={() => closeEditeModel()}>
                        <span aria-hidden="true" className="zmdi zmdi-close"></span>
                    </button>
                </Modal.Header>
                <form onSubmit={editSubmitHandler}>
                    <Modal.Body>
                        <div className="form-row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="control-label">
                                        Start Time <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="time"
                                        value={startEditTimeSlot}
                                        className="form-control"
                                        onChange={(e) => setStartEditTimeSlot(moment(e.target.value, "HHmmss").format("HH:mm"))}
                                        required
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
                                        value={endEditTimeSlot}
                                        className="form-control"
                                        onChange={(e) => setEndEditTimeSlot(moment(e.target.value, "HHmmss").format("HH:mm"))}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="control-label">Order Limit<span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        value={editOrderLimit || ""}
                                        className="form-control"
                                        onChange={(e) => setEditOrderLimit(Number(e.target.value))}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-secondary" onClick={() => closeEditeModel()}>
                            Close
                        </button>
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
            <DeleteModal
                show={showDeleteModal}
                setShow={setShowDeleteModal}
                handleDelete={handleDelete}
            />
        </>
    )
}

export default TimeSlotsList