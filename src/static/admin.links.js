import {
  IconUsers,
  IconUserCheck,
  IconLayoutDashboard,
  IconHome,
} from "@tabler/icons-react";

export const admin_data = [
  { label: "Admin panel", icon: IconLayoutDashboard, link: "/admin" },
  {
    label: "Foydalanuvchilar",
    icon: IconUsers,
    link: "/admin/users",
  },
  {
    label: "Ro'yhatdan o'tganlar",
    icon: IconUserCheck,
    link: "/admin/users/new",
  },
  { label: "Saytga o'tish", icon: IconHome, link: "/" },
];
