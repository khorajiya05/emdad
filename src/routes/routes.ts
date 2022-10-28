import { lazy } from "react";

export const publicRoutes = [
  {
    path: "/",
    element: lazy(() => import("../pages/login/login")),
  },
  {
    path: "/login",
    element: lazy(() => import("../pages/login/login")),
  },
  {
    path: "/forgot-password",
    element: lazy(() => import("../pages/forgot-password/forgot-password")),
  },
];

export const privateRoutes = [
  {
    path: "/dashboard",
    element: lazy(() => import("../pages/dashboard/dashboard")),
  },

  {
    path: "/profile",
    element: lazy(() => import("../pages/profile/profile")),
  },
  {
    path: "/profile/edit",
    element: lazy(() => import("../pages/profile/edit-profile")),
  },
  {
    path: "/profile/change-password",
    element: lazy(() => import("../pages/profile/change-password")),
  },
  // {
  //   path: "/forgot-password",
  //   element: lazy(() => import("../pages/forgot-password/forgot-password")),
  //
  // },
  // {
  //   path: "/orders/pending-orders",
  //   element: lazy(() => import("../pages/orders/pending-orders")),
  // },

  {
    path: "/orders/:orderId",
    element: lazy(() => import("../pages/orders/view-order")),
  },
  {
    path: "/orders/pending-orders/fuel",
    element: lazy(() => import("../pages/orders/pending-orders/pending-orders-fuel/pending-order-fuel"))
  },
  {
    path: "/orders/pending-orders/gas",
    element: lazy(() => import("../pages/orders/pending-orders/pending-orders-gas/pending-order-gas"))
  },
  {
    path: "/orders/orders-history/fuel",
    element: lazy(() => import("../pages/orders/orders-history/history-orders-fuel/order-history-fuel")),
  },
  {
    path: "/orders/orders-history/gas",
    element: lazy(() => import("../pages/orders/orders-history/history-orders-gas/order-history-gas")),
  },
  {
    path: "/vehicle/list",
    element: lazy(() => import("../pages/vehicle/list")),
  },
  {
    path: "/vehicle/form",
    element: lazy(() => import("../pages/vehicle/form")),
  },
  {
    path: "/vehicle/view",
    element: lazy(() => import("../pages/vehicle/view")),
  },
  {
    path: "/drivers",
    element: lazy(() => import("../pages/driver/list")),
  },
  {
    path: "/drivers/:driverId",
    element: lazy(() => import("../pages/driver/form")),
  },
  {
    path: "/drivers/view/:driverId/basic-details",
    element: lazy(() => import("../pages/driver/view/basic-details/basic-details")),
  },
  {
    path: "/drivers/view/:driverId/upcoming-orders",
    element: lazy(() => import("../pages/driver/view/upcoming-order/upcoming-order")),
  },
  {
    path: "/drivers/view/:driverId/assign-timeslots",
    element: lazy(() => import("../pages/driver/view/assign-timeslots/assign-timeslots")),
  },
  {
    path: "/driver/assign-timeslot",
    element: lazy(() => import("../pages/driver/assign-timeslot")),
  },
  {
    path: "/user/list",
    element: lazy(() => import("../pages/user/list")),
  },
  {
    path: "/user/view",
    element: lazy(() => import("../pages/user/view")),
  },
  {
    path: "/user/form",
    element: lazy(() => import("../pages/user/form")),
  },
  {
    path: "/promocode/list",
    element: lazy(() => import("../pages/promocode/list")),
  },
  {
    path: "/promocode/form",
    element: lazy(() => import("../pages/promocode/form")),
  },
  {
    path: "/reports/user",
    element: lazy(() => import("../pages/report/UserReports")),
  },
  {
    path: "/reports/driver",
    element: lazy(() => import("../pages/report/DriverReports"))
  },
  {
    path: "/reports/vehicle",
    element: lazy(() => import("../pages/report/VehicleReports"))
  },
  {
    path: "/reports/order",
    element: lazy(() => import("../pages/report/OrderReports"))
  },
  {
    path: "/postcode",
    element: lazy(() => import("../pages/postcode/list")),
  },
  {
    path: "/fueltype",
    element: lazy(() => import("../pages/fueltype/list")),
  },
  {
    path: "/referalcode",
    element: lazy(() => import("../pages/referalcode/referal-code")),
  },
  {
    path: "/timeslot",
    element: lazy(() => import("../pages/timeslot/list")),
  },
  {
    path: "/settings/notifications/received",
    element: lazy(() => import("../pages/notification/notificatoinReceived")),
  },
  {
    path: "/settings/notifications/sent",
    element: lazy(() => import("../pages/notification/notificationSent")),
  },
  {
    path: "/settings/notification/new",
    element: lazy(() => import("../pages/notification/form")),
  },
  {
    path: "settings/app-settings/:type",
    element: lazy(() => import("../pages/app-settings/list")),
  },
  {
    path: "/settings/email-templates",
    element: lazy(() => import("../pages/email-templates/list")),
  },
  {
    path: "/settings/email-templates/:emailTemplateId/edit",
    element: lazy(() => import("../pages/email-templates/form")),
  },
  {
    path: "/settings/email-templates/:emailTemplateId/view",
    element: lazy(() => import("../pages/email-templates/view")),
  },
  {
    path: "/settings/cms/:name",
    element: lazy(() => import("../pages/cms/list")),
  },
  {
    path: "/settings/cms/view/:pageId",
    element: lazy(() => import("../pages/cms/view")),
  },
  {
    path: "/settings/cms/form/:pageId",
    element: lazy(() => import("../pages/cms/form")),
  },
  {
    path: "/cms/contact-us",
    element: lazy(() => import("../pages/cms/contact-us")),
  },
  {
    path: "/settings/driverhandbook",
    element: lazy(() => import("../pages/driverhandbook/list")),
  },
  {
    path: "/settings/faq",
    element: lazy(() => import("../pages/faq/list")),
  },
  {
    path: "/settings/faq/:FAQId",
    element: lazy(() => import("../pages/faq/form")),
  },
  {
    path: "/sub-admins/list",
    element: lazy(() => import("../pages/sub-admins/list")),
  },
  {
    path: "settings/roles-permissions",
    element: lazy(() => import("../pages/roles-permissions/list")),
  },
  {
    path: "settings/roles-permissions/:id",
    element: lazy(() => import("../pages/roles-permissions/form")),
  },
  {
    path: "/gas/list",
    element: lazy(() => import("../pages/gas/list")),
  },
  {
    path: "/gas/form",
    element: lazy(() => import("../pages/gas/form")),
  },
  {
    path: "/fuel/list",
    element: lazy(() => import("../pages/fuel/list")),
  },
  {
    path: "/fuel/form",
    element: lazy(() => import("../pages/fuel/form")),
  },
  {
    path: "/earnings/list",
    element: lazy(() => import("../pages/earnings/list")),
  },
  {
    path: "/location",
    element: lazy(() => import("../pages/location/list")),
  },
  {
    path: "/earning",
    element: lazy(() => import("../pages/earning/list")),
  },
  {
    path: "/geofences/list",
    element: lazy(() => import("../pages/geofences/list")),
  },
  {
    path: "/geofences/form",
    element: lazy(() => import("../pages/geofences/form")),
  },
  {
    path: "/vendors/list",
    element: lazy(() => import("../pages/vendors/list")),
  },
  {
    path: "/vendors/form",
    element: lazy(() => import("../pages/vendors/form")),
  },
  {
    path: "/vendors/view",
    element: lazy(() => import("../pages/vendors/view")),
  },
  {
    path: "vendors-category/list",
    element: lazy(() => import("../pages/vendors-category/list")),
  },
];

// export default routes;
