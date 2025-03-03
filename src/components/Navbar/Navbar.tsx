import { AppSidebar } from "@/components/app-sidebar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Route, Routes } from "react-router";
import { Actors, MovieInformation, Profile } from "@/utils";
import { SearchForm } from "../search-form";
import { LucideMoon } from "lucide-react";
export default function Page() {
  return (
    <SidebarProvider className="w-full">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between bg-blue-500">
          <span>
            <SidebarTrigger className="-ml-1 text-white" />
            <Separator orientation="vertical" className="mr-2 h-4" />
          </span>

          <SearchForm />
          <button>
            <LucideMoon className="text-white" />
          </button>
        </header>
        <main className="flex-1 p-[2em]">
          <Routes>
            <Route path="/" element={<h1>Hello</h1>} />
            <Route path="/actors/:id" element={<Actors />} />

            <Route path="/movie/:id" element={<MovieInformation />} />

            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
