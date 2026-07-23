"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, HelpCircle, ListOrdered, ShoppingCart } from "lucide-react";
import "./sideNav.css";
import Cus from "../customerFrom/page";

export default function page() {
  return (
    <div className="cm-root h-screen flex overflow-hidden bg-[var(--cm-background)] text-[var(--cm-on-background)]">
      {/* Side nav */}
      <aside className="w-[260px] h-full fixed left-0 top-0 border-r border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-lowest)] shadow-sm flex flex-col py-10 px-2 z-20">
        <div className="flex items-center gap-3 px-6 mb-10">
          <Avatar className="h-10 w-10 bg-[var(--cm-surface-container)]">
            <AvatarImage src="/logo.png" alt="Customer Manager logo" />
            <AvatarFallback>CM</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-headline-md font-bold text-[var(--cm-on-primary-fixed-variant)]">
              Customer Manager
            </h1>
            <p className="text-label-md text-[var(--cm-on-surface-variant)]">
              Admin Portal
            </p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-1">
          <a
           href="#"
            className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200  ${
              true
                ? "text-[var(--cm-primary)] font-bold border-r-4 border-[var(--cm-primary)] bg-[var(--cm-primary-container)]/20"
                : "text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)] hover:bg-[var(--cm-surface-container)]"
            }`}
          >
              <Users size={22} strokeWidth={true ? 2.4 : 2} />
              <span className="text-label-md">Customers</span>
          </a>

          <a
           href="#"
            className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200  ${
              true
                ? "text-[var(--cm-primary)] font-bold border-r-4 border-[var(--cm-primary)] bg-[var(--cm-primary-container)]/20"
                : "text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)] hover:bg-[var(--cm-surface-container)]"
            }`}
            
          >
              <ListOrdered size={22} strokeWidth={true ? 2.4 : 2} />
              <span className="text-label-md">Orders</span>
          </a>

          <a
           href="#"
            className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-colors duration-200  ${
              true
                ? "text-[var(--cm-primary)] font-bold border-r-4 border-[var(--cm-primary)] bg-[var(--cm-primary-container)]/20"
                : "text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)] hover:bg-[var(--cm-surface-container)]"
            }`}
            
          >
              <ShoppingCart size={22} strokeWidth={true ? 2.4 : 2} />
              <span className="text-label-md">Items</span>
          </a>
        </nav>

        <div className="mt-auto pt-10 border-t border-[var(--cm-outline-variant)]">
          <a
            href="#"
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg bg-[var(--cm-surface-container-high)] text-[var(--cm-on-surface)] hover:bg-[var(--cm-surface-container)] transition-colors duration-200 mb-1"
          >
            <span className="text-label-md">Support</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 rounded-lg text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)] hover:bg-[var(--cm-surface-container)] transition-colors duration-200"
          >
            <HelpCircle size={22} />
            <span className="text-label-md">Help Center</span>
          </a>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className="flex-1 ml-[260px] flex flex-col min-h-screen overflow-hidden">
        {/* Top nav */}

        <Cus />

        {/* Main content */}
      </div>
    </div>
  );
}
