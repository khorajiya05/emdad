import { ActionType } from "typesafe-actions";
import * as actions from "./orders.action";

type TOrderByIdPayload = {
  order: {
    id: number;
    orderType: number;
    status: string;
    imageOne: null | string;
    imageTwo: null | string;
    startTime: string;
    endTime: string;
    subTotal: number;
    grandTotal: number;
    leakageFee: number;
    scheduleDate: string;
    indexPrice: number;
    vendorDeliveryFee: number;
    generalDeliveryFee: null | number;
    vendorReceivedAmount: number;
    freelanceDriverReceivedAmount: number;
    driverCancellationCharge: number;
    customerCancellationCharge: number;
    adminReceivedAmount: number;
    refundAmount: number;
    cancellationReasonOther: null | number;
    salesTaxPercentage: number;
    salesTaxAmount: number;
    locationFee: number;
    cylindersize: number;
    qty: number;
    priority: null | string;
    isDelivered: boolean;
    promocodeDiscountAmount: number;
    promocodeDiscountPercentage: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: null | string;
    createdBy: null | string;
    updatedBy: null | string;
    order: {
      id: number;
      uuid: string;
      invoicedReceiptUrl: "https://pay.stripe.com/receipts/acct_1IbOxSSBJPMsjmRO/ch_3KvfKESBJPMsjmRO0yND9XQN/rcpt_LcvAP4UVkMiXf6JhX7C5iICDjnvOB2B";
      cancellationReasonOther: null;
      serviceFee: null | number;
      serviceCharge: null | number;
      grandTotal: number;
      adminTotalDeliveryFee: null | number;
      vendorTotalDeliveryfee: number;
      paymentType: null;
      lat: number;
      long: number;
      address: string;
      stripePaymentIntentId: string;
      isPaid: boolean;
      createdAt: string;
      updatedAt: string;
      deletedAt: null | string;
      createdBy: string | null;
      updatedBy: string | null;
      timeSlot: {
        id: number;
        startTime: string;
        endTime: string;
      };
      timeSlotsId: number;
      userId: string;
      user: {
        id: string;
        fullName: string;
        email: string;
        countryCode: string;
        mobileNumber: string;
        profileImage: string;
        userSubscriptionCount: number;
        address: {
          id: number;
          zipCode: {
            id: number;
            areaName: string;
            zipcode: number;
          };
        }[];
      };
    };
    vendor: {
      id: string;
      fullName: string;
      email: string;
      countryCode: string;
      mobileNumber: string;
      profileImage: null | string;
    };
    driver: {
      id: string;
      fullName: string;
      email: string;
      countryCode: string;
      mobileNumber: string;
      profileImage: string;
      createdAt: string;
      driver: null | string;
    };
    product: {
      id: number;
      name: string;
      logo: string;
      details: {
        id: number;
        indexPrice: number;
        discount: number;
      }[];
    };
    orderLogs: [];
    category: {
      id: number;
      name: string;
      orderType: number;
    };
    // accessory: null | number | string;
    accessory: {
      name: string;
      image: string;
      price: number;
      description: string;
    };
    cylinderSize: {
      id: number;
      cylinderSize: number;
    };
    location: {
      id: number;
      name: string;
      description: null | string;
      price: number;
    };
    promocodes: {
      discount: number;
      id: number;
      promocode: string;
      title: string;
    };
    cancellationReason: null | { reason: string; id: number | string };
    orderId: number;
    productId: number;
    vendorId: string;
    driverId: string;
    locationId: number;
    cylinderSizeId: null | number;
    categoryId: number;
    accessoryId: null | number;
    promocodeId: null | number;
    cancellationReasonId: null | number;
  };
  drivers: {
    id: string;
    fullName: string;
    email: string;
    countryCode: string;
    mobileNumber: string;
    profileImage: null | string;
    createdAt: string;
    driver: {
      id: number;
      orderType: number;
      personalId: null | string;
      idInformation: null | string;
      driverVehicle: null | string;
      vehicalNo: string;
      identity: null | string;
      licenceNo: null | string;
      orderCapacity: null | number;
    };
    completedOrderCount: number;
    orders: { 2: number; 1: number };
  }[];
};
type TOrdersFuel = {
  count: number;
  orders: {
    id: number,
    uuid: string,
    address: string,
    city: string,
    state: string,
    country: string,
    lat: number,
    long: number,
    orderType: number,
    qty: number,
    price: number,
    scheduleDate: string,
    startTime: string,
    endTime: string,
    driverStartTime: null | string,
    driverEndTime: null | string,
    fuelQtyDriver: null | number,
    pumpReadingImage: null | string,
    tankCheckComment: null | string,
    subTotal: number,
    grandTotal: number,
    vatPercentage: number,
    vatPrice: number,
    deliveryVatPercentage: number,
    deliveryVatPrice: number,
    deliveryPrice: number,
    adminPercentage: null,
    adminReceivedAmount: number,
    refundAmount: null | number,
    priority: number,
    isDelivered: boolean,
    isPaid: boolean,
    isRefunded: boolean,
    promocodeDiscountAmount: null | number,
    promocodeDiscountPercentage: null | number,
    referralDiscountAmount: null | number,
    referralDiscountPercentage: null | number,
    safetyChecks: null | string,
    tankChecks: null | string,
    status: string,
    rating: null | number,
    orderFeedback: null | string,
    driverCancellationCharge: null | number,
    customerCancellationCharge: null | number,
    cancellationReasonOther: null | number,
    createdAt: string,
    updatedAt: string,
    deletedAt: null | string,
    createdBy: stirng,
    updatedBy: string | null,
    user: {
      id: string,
      fullName: string,
      mobileNumber: number,
      profileImage: null | string,
    },
    driver: {
      id: string,
      fullName: string,
      mobileNumber: number,
      profileImage: null | string,
    },
    cancellationReasonId: null | string,
    userAddressId: null | string,
    userId: string
  }[];
};

type TOrdersTank = {
  count: number;
  orders: {
    id: string | number;
    status: string;
    createdAt: string;
    customerName: string;
    scheduleDate: string;
    startTime: string;
    endTime: string;
    address: string;
    vendorName: string;
    categoryName: string;
    driverName: string;
    isVendorsDriver: number;
    vendorId: string | number;
    driverId: string;
    lat: string;
    long: string;
  }[];
};

type TRescheduleTimeSlots = {
  id: number | string;
  startTime: string;
  endTime: string;
}[];

type TOrdersState = {
  loading: boolean;
  orderId: string | number;
  orderById: TOrderByIdPayload | null;
  orderFuelData: TOrdersFuel;
  orderTankData: TOrdersTank;
  rescheduleTimeSlots: TRescheduleTimeSlots;
};

type TOrdersActionType = ActionType<typeof actions>;

export {
  TOrdersActionType,
  TOrdersState,
  TOrdersFuel,
  TOrdersTank,
  TRescheduleTimeSlots,
  TOrderByIdPayload,
};
