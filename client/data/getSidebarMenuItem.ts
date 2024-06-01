import { RoleAccessType, SidebarItems } from "@/data/types";
import {
  Award,
  BarChart2,
  BookUser,
  CalendarFold,
  CreditCard,
  Megaphone,
  NotebookPen,
  PencilRuler,
  Send,
  User,
  UserCog,
  Users,
} from "lucide-react";
import { roleAccess } from "./dummy/roleresponse";

const getItem = (roleAccess: RoleAccessType): SidebarItems => {
  const links = [
    { label: "Profile", href: "/dashboard/profile", Icon: User },
    { label: "Billing", href: "/dashboard/billing", Icon: CreditCard },
  ];

  if (roleAccess.achievement) {
    links.push({
      label: "Achievement",
      href: "/dashboard/achievement",
      Icon: Award,
    });
  }
  if (roleAccess.blog) {
    links.push({ label: "Blog", href: "/dashboard/blog", Icon: NotebookPen });
  }
  if (roleAccess.bulkmail) {
    links.push({ label: "Bulk Mail", href: "/dashboard/bulkmail", Icon: Send });
  }
  if (roleAccess.events) {
    links.push({
      label: "Event",
      href: "/dashboard/event",
      Icon: CalendarFold,
    });
  }
  if (roleAccess.ec) {
    links.push({
      label: "Executive Committee",
      href: "/dashboard/ec",
      Icon: BookUser,
    });
  }
  if (roleAccess.landingpage) {
    links.push({
      label: "Landing Page",
      href: "/dashboard/landingpage",
      Icon: PencilRuler,
    });
  }
  if (roleAccess.member) {
    links.push({ label: "Members", href: "/dashboard/members", Icon: Users });
  }
  if (roleAccess.notice) {
    links.push({ label: "Notice", href: "/dashboard/notice", Icon: Megaphone });
  }
  if (roleAccess.roles) {
    links.push({ label: "Roles", href: "/dashboard/roles", Icon: UserCog });
  }
  if (roleAccess.statistics) {
    links.push({
      label: "Statistics",
      href: "/dashboard/statistics",
      Icon: BarChart2,
    });
  }

  return { links };
};

const sidebarItems = getItem(roleAccess);

export default sidebarItems;
