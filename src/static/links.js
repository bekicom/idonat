import {
  IconTriangleSquareCircle,
  IconLayoutBoardSplit,
  IconMessage,
  IconCashBanknote,
  IconArrowUpRight,
  IconCashBanknoteOff,
  IconReceiptDollar,
  IconNotebook,
  IconUserCircle,
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
  { label: "Pul yig'ish", icon: IconReceiptDollar, link: "/collect-money" },
  { label: "Donat sahifasi", icon: IconNotebook, link: "/donat-page" },
  {
    label: "Vidjet sozlamalari",
    icon: IconTriangleSquareCircle,
    link: "/settings",
  },
  { label: "Profil", icon: IconUserCircle, link: "/profile" },
];
