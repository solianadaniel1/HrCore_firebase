
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  Briefcase,
  CalendarOff,
  ChevronRight,
  User,
  Users,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import * as React from "react";
import { ReportingModal } from "./reporting-modal";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/profile", label: "My Profile", icon: User },
  { href: "/employees", label: "Employees", icon: Users },
  { href: "/payroll", label: "Payroll", icon: Briefcase },
  { href: "/leave", label: "Leave", icon: CalendarOff },
];

const activityItems = [
  { href: "/activities/promotion", label: "Promotion" },
  { href: "/activities/demotion", label: "Demotion" },
  { href: "/activities/lateral", label: "Lateral" },
  { href: "/activities/transfer", label: "Transfer" },
  { href: "/activities/acting", label: "Acting" },
  { href: "/activities/returned-acting", label: "Returned Acting" },
];

export function SidebarNav() {
  const pathname = usePathname();
  const [activitiesOpen, setActivitiesOpen] = React.useState(
    pathname.startsWith("/activities")
  );

  React.useEffect(() => {
    setActivitiesOpen(pathname.startsWith("/activities"));
  }, [pathname]);

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === item.href}
            tooltip={item.label}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
       <SidebarMenuItem>
        <ReportingModal />
      </SidebarMenuItem>
      <SidebarMenuItem>
        <Collapsible open={activitiesOpen} onOpenChange={setActivitiesOpen}>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              className="w-full justify-between"
              isActive={activitiesOpen}
              tooltip="Activities"
            >
              <div className="flex items-center gap-2">
                <Activity />
                <span>Activities</span>
              </div>
              <ChevronRight
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform",
                  activitiesOpen && "rotate-90"
                )}
              />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {activityItems.map((item) => (
                <SidebarMenuSubItem key={item.href}>
                  <SidebarMenuSubButton
                    asChild
                    isActive={pathname === item.href}
                  >
                    <Link href={item.href}>
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
