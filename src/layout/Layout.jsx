import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  RefreshCcw,
} from "lucide-react";
export default function Layout() {

  return (
    <div className="bg-rose-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Header />

      <ContextMenu>
        <ContextMenuTrigger>
          <main>
            <Outlet />
          </main>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem
            className="cursor-pointer"
            inset
            onClick={() => history.back()}
          >
            Back
            <ContextMenuShortcut>
              <ChevronLeft />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            className="cursor-pointer"
            inset
            onClick={() => history.forward()}
          >
            Forward
            <ContextMenuShortcut>
              <ChevronRight />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            className="cursor-pointer"
            inset
            onClick={() => window.location.reload()}
          >
            Reload
            <ContextMenuShortcut>
              <RefreshCcw />
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            className="cursor-pointer"
            disabled
            inset
            onClick={() => window.location.reload()}
          >
            DownLoad CV
            <ContextMenuShortcut>
              <Download />
            </ContextMenuShortcut>
          </ContextMenuItem>
          {/* <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                Save Page As...
                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub> */}
        </ContextMenuContent>
      </ContextMenu>

      <Footer />
    </div>
  );
}
