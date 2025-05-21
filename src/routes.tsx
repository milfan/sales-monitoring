import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import LoginPage from "./pages/login/LoginPage";
import type { MenuProps } from "antd";

type MenuItemWithComponent = Required<MenuProps>['items'][number] & {
  component?: React.ReactNode;
  children?: MenuItemWithComponent[];
};

export const itemsMenu: MenuItemWithComponent[] = [{
  key: 'dashboard',
  label: 'Dashboard',
  component: <Dashboard />,
},
{
  key: 'data_management',
  label: 'Data Management',
  children: [
    {
      key: 'users',
      label: 'Manajemen Pengguna',
      component: <Users />,
    },
  ],
},
];
// Routes without layout

export const publicRoutes = [
  {
    path: "/",
    element: <LoginPage />,
  },
];

export const headerMenu: MenuProps['items'] = [
  {
    label: 'Manage Profile',
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: 'Logout',
    key: 'logout',
  },
];