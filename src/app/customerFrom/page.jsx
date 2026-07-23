"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, Filter, Pencil, Trash2, ChevronLeft, ChevronRight, Mail, Phone, MapPin, User, Save, X } from "lucide-react";
import "./customer.css";
import "./../needComponents/AddCustomerForm/addCustomerForm.css";

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

export default function Page() {
  const [page, setPage] = useState(1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address1: "",
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New customer:", form);
    setIsAddModalOpen(false);
  };

  return (
    <div className="cm-root h-screen flex overflow-hidden bg-[var(--cm-background)] text-[var(--cm-on-background)]">
      {/* Side nav */}

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        
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
              <Button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="bg-[var(--cm-primary-container)] text-[var(--cm-on-primary-container)] hover:bg-[var(--cm-secondary-container)] gap-1"
              >
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

      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl bg-[var(--cm-surface-container-lowest)] p-6 shadow-2xl md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-headline-md text-[var(--cm-on-surface)]">Add New Customer</h3>
                <p className="mt-1 text-body-md text-[var(--cm-on-surface-variant)]">
                  Fill in the customer details below.
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setIsAddModalOpen(false)}
                className="text-[var(--cm-on-surface-variant)] hover:bg-[var(--cm-surface-container-high)]"
              >
                <X size={18} />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="md:col-span-2 mb-1 flex items-center gap-3 border-b border-[var(--cm-surface-variant)] pb-3 text-[var(--cm-primary)]">
                <User size={20} fill="currentColor" />
                <h4 className="text-headline-md text-[var(--cm-on-surface)]">Contact Information</h4>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <Label htmlFor="fullName" className="text-label-md text-[var(--cm-on-surface-variant)]">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="e.g. Jane Doe"
                  required
                  value={form.fullName}
                  onChange={handleChange("fullName")}
                  className="border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-lowest)] text-[var(--cm-on-surface)] placeholder:text-[var(--cm-on-surface-variant)] focus-visible:border-[var(--cm-primary)] focus-visible:ring-[var(--cm-primary)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email" className="text-label-md text-[var(--cm-on-surface-variant)]">
                  Email Address *
                </Label>
                <div className="relative flex items-center">
                  <Mail size={20} className="pointer-events-none absolute left-3 text-[var(--cm-on-surface-variant)]" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-lowest)] pl-10 text-[var(--cm-on-surface)] placeholder:text-[var(--cm-on-surface-variant)] focus-visible:border-[var(--cm-primary)] focus-visible:ring-[var(--cm-primary)]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone" className="text-label-md text-[var(--cm-on-surface-variant)]">
                  Phone Number
                </Label>
                <div className="relative flex items-center">
                  <Phone size={20} className="pointer-events-none absolute left-3 text-[var(--cm-on-surface-variant)]" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-lowest)] pl-10 text-[var(--cm-on-surface)] placeholder:text-[var(--cm-on-surface-variant)] focus-visible:border-[var(--cm-primary)] focus-visible:ring-[var(--cm-primary)]"
                  />
                </div>
              </div>

              <div className="md:col-span-2 mt-6 flex items-center gap-3 border-b border-[var(--cm-surface-variant)] pb-3 text-[var(--cm-primary)]">
                <MapPin size={20} fill="currentColor" />
                <h4 className="text-headline-md text-[var(--cm-on-surface)]">Physical Address</h4>
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <Label htmlFor="address1" className="text-label-md text-[var(--cm-on-surface-variant)]">
                  Street Address
                </Label>
                <Input
                  id="address1"
                  name="address1"
                  placeholder="123 Main St, Suite 400"
                  value={form.address1}
                  onChange={handleChange("address1")}
                  className="border-[var(--cm-outline-variant)] bg-[var(--cm-surface-container-lowest)] text-[var(--cm-on-surface)] placeholder:text-[var(--cm-on-surface-variant)] focus-visible:border-[var(--cm-primary)] focus-visible:ring-[var(--cm-primary)]"
                />
              </div>

              <div className="md:col-span-2 mt-6 flex items-center justify-end gap-4 border-t border-[var(--cm-surface-variant)] pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddModalOpen(false)}
                  className="border-[var(--cm-primary-container)] text-[var(--cm-on-surface)] hover:bg-[var(--cm-surface-container)]"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="gap-1 bg-[var(--cm-primary-container)] text-[var(--cm-on-primary-fixed-variant)] hover:bg-[var(--cm-primary-fixed)] hover:shadow-sm"
                >
                  <Save size={18} />
                  Save Customer
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
