import React from 'react'
import { Modal } from 'react-bootstrap'

function AssignOrderModal() {

    const showAssignOrderModal:boolean = false;
    const handleAssignOrder = () =>{}
    const User = "https://picsum.photos/200/300";
    return (
        <Modal
            centered
            scrollable
            show={showAssignOrderModal}
            onHide={() => handleAssignOrder()}
        >
            <Modal.Header>
                <h3 className="modal-title">Assign Order - Drivers</h3>
            </Modal.Header>
            <Modal.Body className="p-0 assign-order-radio">
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-1"
                    />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-2"
                    />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-3"
                    />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-4"
                    />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-5"
                    />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-6"
                    />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-6"
                    />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-6"
                    />
                    <div className="control__indicator"></div>
                </label>
                <label className="control control-outline control-primary control--radio pr-4 py-2 border-bottom d-flex justify-content-between">
                    <div className="media flex-fill">
                        <img
                            className="align-self-center m-r-10 w-40 h-40 rounded-circle o-cover"
                            src={User}
                        />
                        <div className="media-body d-flex align-items-end">
                            <div className="mr-auto">
                                <h6 className="mt-1 mb-0"> John Smith</h6>
                                <span>+249 98765 43210</span>
                            </div>
                            <span>MK11 7HX</span>
                        </div>
                    </div>
                    <input
                        type="radio"
                        name="assign-order-radio"
                        id="assign-order-radio-6"
                    />
                    <div className="control__indicator"></div>
                </label>
            </Modal.Body>
            <Modal.Footer className="justify-content-end">
                <button
                    className="btn btn-secondary min-w-100"
                    onClick={() => handleAssignOrder()}
                >
                    Cancel
                </button>
                <button
                    className="btn btn-primary min-w-100"
                    onClick={() => handleAssignOrder()}
                >
                    Assign
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default AssignOrderModal