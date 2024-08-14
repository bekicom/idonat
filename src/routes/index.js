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
  Statistic,
  Goal,
  Admin,
  Users,
  NewUsers,
  Donat,
  MakeDonat,
  UserView,
  UserEdit,
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
  {
    path: "statistic",
    element: <Statistic />,
  },
  {
    path: "goal",
    element: <Goal />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "admin/users",
    element: <Users />,
  },
  {
    path: "admin/users/new",
    element: <NewUsers />,
  },
  {
    path: "d",
    element: <MakeDonat />,
  },
  {
    path: "admin/users/:id",
    element: <UserView />,
  },
  {
    path: "admin/users/edit/:id",
    element: <UserEdit />,
  },
];
