import { ActionType } from "typesafe-actions";

import * as actions from "./drivers.action";

type TDriversActionType = ActionType<typeof actions>;

type TDriverDetailsPayload = {
  id: number | string,
  isOnline: boolean,
  orderType: stirng,
  createdAt: stirng,
  updatedAt: stirng,
  deletedAt: null | stirng,
  createdBy: stirng,
  updatedBy: stirng,
  orderCapacity: number,
  vehicle: {
    id: number | string,
    orderType: string,
    numberPlate: stirng,
    make: 2015,
    model: stirng,
    engine: stirng,
    year: number,
    fuelCapacity: number,
    currentFuel: number,
    notifyFuelLimit: number,
    isActive: boolean,
    createdAt: stirng,
    updatedAt: stirng,
    deletedAt: null | stirng,
    createdBy: stirng,
    updatedBy: stirng,
    deletedBy: null | stirng
  },
  location: {
    id: 1,
    latLong: string,
    position: 1,
    isActive: true,
    createdAt: stirng,
    updatedAt: stirng,
    deletedAt: null | string,
    createdBy: stirng,
    updatedBy: stirng | null
    deletedBy: null | stirng
  },
  driver: {
    id: stirng,
    fullName: stirng,
    email: stirng,
    mobileNumber: number,
    createdAt: stirng,
    isActive: boolean
  }
}

type TDriverTimeSlotsPayload = {
  assignedTime: {
    id: stirng | number,
    day: number,
    drivers: number,
    placedOrders: number,
    createdAt: stirng | null,
    updatedAt: stirng | null,
    deletedAt: stirng | null,
    createdBy: stirng | null,
    updatedBy: stirng | null,
    timeSlot: {
      id: 1,
      startTime: stirng | null,
      endTime: stirng | null,
      orderLimit: number,
      createdAt: stirng | null,
      updatedAt: stirng | null,
      deletedAt: stirng | null,
      createdBy: stirng | null,
      updatedBy: stirng | null
    }
  }[]
}


type TGetDriversPayload = {
  count: number;
  drivers: {
    id: number | string,
    isOnline: boolean,
    orderType: stirng,
    createdAt: stirng,
    updatedAt: stirng,
    deletedAt: null | stirng,
    createdBy: stirng,
    updatedBy: stirng,
    orderCapacity: number,
    vehicle: {
      id: number | string,
      orderType: string,
      numberPlate: stirng,
      make: 2015,
      model: stirng,
      engine: stirng,
      year: number,
      fuelCapacity: number,
      currentFuel: number,
      notifyFuelLimit: number,
      isActive: boolean,
      createdAt: stirng,
      updatedAt: stirng,
      deletedAt: null | stirng,
      createdBy: stirng,
      updatedBy: stirng,
      deletedBy: null | stirng
    },
    location: {
      id: 1,
      latLong: string,
      position: 1,
      isActive: true,
      createdAt: stirng,
      updatedAt: stirng,
      deletedAt: null | string,
      createdBy: stirng,
      updatedBy: stirng | null
      deletedBy: null | stirng
    },
    driver: {
      id: stirng,
      fullName: stirng,
      email: stirng,
      mobileNumber: number,
      createdAt: stirng,
      isActive: boolean
    }
  }[];
};

type TDriversState = {
  loading: boolean;
  AllDriversList: TGetDriversPayload;
  driverId: string;
  singleDriverData: { driver: TDriverDetailsPayload; timeSlots: TDriverTimeSlotsPayload };
};

export {
  TDriversActionType,
  TGetDriversPayload,
  TDriversState,
  TDriverDetailsPayload,
  TDriverTimeSlotsPayload
};
