import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Categories",
      url: "#",
      items: [
        {
          title: "Popular",
          url: "#",
          isActive: true,
        },
        {
          title: "Top Rated",
          url: "#",
        },
        {
          title: "Upcoming",
          url: "#",
        },
      ],
    },
    {
      title: "Genres",
      url: "#",
      items: [
        {
          title: "Action",
          url: "#",
        },
        {
          title: "Adventure",
          url: "#",
        },
        {
          title: "Animation",
          url: "#",
        },
        {
          title: "Comedy",
          url: "#",
        },
        {
          title: "Crime",
          url: "#",
        },
        {
          title: "Documentary",
          url: "#",
        },
        {
          title: "Drama",
          url: "#",
        },
        {
          title: "Family",
          url: "#",
        },
        {
          title: "Fantasy",
          url: "#",
        },
        {
          title: "History",
          url: "#",
        },
        {
          title: "Horror",
          url: "#",
        },
        {
          title: "Music",
          url: "#",
        },
        {
          title: "Mystery",
          url: "#",
        },
        {
          title: "Romance",
          url: "#",
        },
        {
          title: "Science Fiction",
          url: "#",
        },
        {
          title: "TV Movie",
          url: "#",
        },
        {
          title: "Thriller",
          url: "#",
        },
        {
          title: "War",
          url: "#",
        },
        {
          title: "Western",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h1 className="text-3xl font-extrabold text-blue-500 text-center py-3">
          Filmpire
        </h1>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <Separator
              orientation="horizontal"
              className="mr-2 h-px bg-gray-200 "
            />
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className="text-xl"
                      asChild
                      isActive={item.isActive}
                    >
                      <a className="" href={item.url}>
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
