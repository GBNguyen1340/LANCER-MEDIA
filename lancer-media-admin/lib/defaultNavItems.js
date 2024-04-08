import {
  HomeIcon,
  UserGroupIcon,
  UserIcon,
  InboxArrowDownIcon,
  Square2StackIcon,
  MegaphoneIcon
} from "@heroicons/react/24/outline";
// define a NavItem prop

export const defaultNavItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className="w-4 h-4" />,
  },
  {
    label: "Team",
    href: "/team",
    icon: <UserGroupIcon className="w-4 h-4" />,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: <Square2StackIcon className="w-4 h-4" />,
  },
  {
    label: "Rooms",
    href: "/rooms",
    icon: <InboxArrowDownIcon className="w-4 h-4" />,
  },
  {
    label: "Talents",
    href: "/talents",
    icon: <UserIcon className="w-4 h-4" />,
  },
  {
    label: "Bookings",
    href: "/bookings",
    icon: <MegaphoneIcon className="w-4 h-4" />,
  },
];