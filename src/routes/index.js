import {
  Dashboard,
  Messages,
  Payments,
  Profile,
  Settings,
  TopDonators,
  WithdrawMoney,
  CollectMoney,
  DonatPage,
} from "../pages";

export const RootRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "messages",
    element: <Messages />,
  },
  {
    path: "top-donators",
    element: <TopDonators />,
  },
  {
    path: "payment-history",
    element: <Payments />,
  },
  {
    path: "withdraw-money",
    element: <WithdrawMoney />,
  },
  {
    path: "collect-money",
    element: <CollectMoney />,
  },
  {
    path: "donat-page",
    element: <DonatPage />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
];
