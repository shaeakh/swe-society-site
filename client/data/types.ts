import { LucideIcon } from "lucide-react";

export interface SidebarItems {
  links: Array<{
    label: string;
    href: string;
    Icon?: LucideIcon;
  }>;
}

export interface RoleAccessType {
  statistics: boolean;
  achievement: boolean;
  blog: boolean;
  member: boolean;
  notice: boolean;
  bulkmail: boolean;
  landingpage: boolean;
  events: boolean;
  ec: boolean;
  roles: boolean;
}

export interface UserDataType {
  reg: number;
  name: string;
  role: string;
  photourl: string;
}
