"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HelpCircle,
  Search,
  Plus,
  Bell,
  Filter,
  Download,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./customer.css";

const CUSTOMERS = [
  {
    id: 1,
    initials: "JD",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    date: "Oct 24, 2023",
    bg: "var(--cm-primary-container)",
    fg: "var(--cm-on-primary-container)",
  },
  {
    id: 2,
    initials: "JS",
    name: "Jane Smith",
    email: "jane.smith@company.org",
    phone: "+1 (555) 987-6543",
    date: "Nov 12, 2023",
    bg: "var(--cm-secondary-container)",
    fg: "var(--cm-on-secondary-container)",
  },
  {
    id: 3,
    initials: "MJ",
    name: "Michael Johnson",
    email: "michael.j@startup.co",
    phone: "+44 20 7123 4567",
    date: "Jan 05, 2024",
    bg: "var(--cm-tertiary-container)",
    fg: "var(--cm-on-tertiary-container)",
  },
];

export default function page() {
  const [page, setPage] = useState(1);

  return (
    <div className="cm-root h-screen flex overflow-hidden bg-[var(--cm-background)] text-[var(--cm-on-background)]">
      {/* Side nav */}

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top nav */}
        {/* <header className="h-16 w-full max-w-[1440px] mx-auto sticky top-0 z-10 bg-[var(--cm-surface-container-lowest)] shadow-sm flex items-center justify-between px-10">
          <div className="flex items-center gap-6">
            <h2 className="text-headline-lg font-semibold text-[var(--cm-on-surface)] hidden md:block">
              Customer Management
            </h2>
          </div>

          <div className="flex-1 max-w-md mx-10 hidden md:block relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--cm-on-surface-variant)]"
            />
            <Input
              placeholder="Search Customer..."
              className="pl-10 pr-12 bg-[var(--cm-surface)] border-[var(--cm-outline-variant)] focus-visible:ring-[var(--cm-primary)]"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-label-sm text-[var(--cm-outline)] px-1.5 py-0.5 rounded border border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-lowest)]">
              ⌘K
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Button className="bg-[var(--cm-primary-container)] text-[var(--cm-on-primary-container)] hover:bg-[var(--cm-secondary-container)] gap-1">
              <Plus size={18} />
              Add New
            </Button>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)] hover:bg-[var(--cm-surface-container-high)]"
              >
                <Bell size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)] hover:bg-[var(--cm-surface-container-high)] md:hidden"
              >
                <Search size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)] hover:bg-[var(--cm-surface-container-high)]"
              >
                <HelpCircle size={20} />
              </Button>
            </div>

            <Avatar className="w-8 h-8 ml-2 border border-[var(--cm-outline-variant)] cursor-pointer hover:border-[var(--cm-primary)] transition-colors">
              <AvatarImage src="/avatar.jpg" alt="User avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header> */}

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-10 max-w-[1440px] mx-auto w-full">
          <div className="mb-10 flex justify-between items-end">
            <div>
              <h3 className="text-display text-[var(--cm-on-surface)]">
                Customer Directory
              </h3>
              <p className="text-body-lg text-[var(--cm-on-surface-variant)] mt-1">
                Manage and view all customer records.
              </p>
            </div>

            <div className="flex-1 max-w-md mx-10 hidden md:block relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--cm-on-surface-variant)]"
            />
            <Input
              placeholder="Search Customer..."
              className="pl-10 pr-12 bg-[var(--cm-surface)] border-[var(--cm-outline-variant)] focus-visible:ring-[var(--cm-primary)]"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-label-sm text-[var(--cm-outline)] px-1.5 py-0.5 rounded border border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-lowest)]">
              ⌘K
            </span>
          </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="bg-[var(--cm-surface-container-lowest)] border-[var(--cm-outline-variant)] text-[var(--cm-on-surface-variant)] hover:bg-[var(--cm-surface-container-low)] gap-1"
              >
                <Filter size={18} />
                Filter
              </Button>
              <Button className="bg-[var(--cm-primary-container)] text-[var(--cm-on-primary-container)] hover:bg-[var(--cm-secondary-container)] gap-1">
                <Plus size={18} />
                Add New
              </Button>
            </div>
          </div>

          {/* Data table card */}
          <div className="bg-[var(--cm-surface-container-lowest)] rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] border border-[var(--cm-outline-variant)] overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-low)]/50 hover:bg-[var(--cm-surface-container-low)]/50">
                    <TableHead className="text-label-md text-[var(--cm-on-surface-variant)] uppercase tracking-wider">
                      Customer Name
                    </TableHead>
                    <TableHead className="text-label-md text-[var(--cm-on-surface-variant)] uppercase tracking-wider">
                      Email Address
                    </TableHead>
                    <TableHead className="text-label-md text-[var(--cm-on-surface-variant)] uppercase tracking-wider">
                      Phone Number
                    </TableHead>
                    <TableHead className="text-label-md text-[var(--cm-on-surface-variant)] uppercase tracking-wider">
                      Registration Date
                    </TableHead>
                    <TableHead className="text-label-md text-[var(--cm-on-surface-variant)] uppercase tracking-wider text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {CUSTOMERS.map((c) => (
                    <TableRow
                      key={c.id}
                      className="border-b border-[var(--cm-outline-variant)] hover:bg-[var(--cm-surface-bright)]/50 transition-colors"
                    >
                      <TableCell className="py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-headline-md font-bold"
                            style={{ backgroundColor: c.bg, color: c.fg }}
                          >
                            {c.initials}
                          </div>
                          <div className="text-body-md font-medium text-[var(--cm-on-surface)]">
                            {c.name}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-body-md text-[var(--cm-on-surface-variant)]">
                        {c.email}
                      </TableCell>
                      <TableCell className="text-body-md text-[var(--cm-on-surface-variant)]">
                        {c.phone}
                      </TableCell>
                      <TableCell className="text-body-md text-[var(--cm-on-surface-variant)]">
                        {c.date}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="cm-row-actions flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Update"
                            className="text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)] hover:bg-[var(--cm-surface-container-high)]"
                          >
                            <Pencil size={18} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Delete"
                            className="text-[var(--cm-error)] hover:text-[var(--cm-on-error-container)] hover:bg-[var(--cm-error-container)]"
                          >
                            <Trash2 size={18} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination footer */}
            <div className="px-6 py-3 border-t border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-low)] flex items-center justify-between">
              <span className="text-body-md text-[var(--cm-on-surface-variant)]">
                Showing 1 to 3 of 120 entries
              </span>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={page === 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="text-[var(--cm-on-surface-variant)] hover:bg-[var(--cm-surface-container)] disabled:opacity-50"
                >
                  <ChevronLeft size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setPage((p) => p + 1)}
                  className="text-[var(--cm-on-surface-variant)] hover:bg-[var(--cm-surface-container)]"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
