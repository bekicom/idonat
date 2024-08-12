import {
  IconLayoutBoardSplit,
  IconMessage,
  IconCashBanknote,
  IconArrowUpRight,
  IconCashBanknoteOff,
  IconNotebook,
  IconUserCircle,
  IconUserEdit,
} from "@tabler/icons-react";

export const data = [
  { label: "Boshqaruv paneli", icon: IconLayoutBoardSplit, link: "/" },
  {
    label: "Xabarlar paneli",
    icon: IconMessage,
    link: "/messages",
  },
  {
    label: "To'lovlar tarixi",
    icon: IconCashBanknote,
    link: "/payment-history",
  },
  { label: "Top donaterlar", icon: IconArrowUpRight, link: "/top-donators" },
  {
    label: "Pulni yechish",
    icon: IconCashBanknoteOff,
    link: "/withdraw-money",
  },
  { label: "Donat sahifasi", icon: IconNotebook, link: "/donat-page" },
  { label: "Profil", icon: IconUserCircle, link: "/profile" },
  { label: "Admin panel", icon: IconUserEdit, link: "/admin" },
];
