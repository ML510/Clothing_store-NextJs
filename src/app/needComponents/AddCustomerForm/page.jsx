"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Menu,
  ChevronRight,
  Search,
  Bell,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  User,
  Save,
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

import "./addCustomerForm.css";

const MOBILE_NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, active: false },
  { label: "Customers", icon: Users, active: true },
  { label: "Reports", icon: BarChart3, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export default function Page() {
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
    // TODO: wire up to your API / server action
    console.log("New customer:", form);
  };

  return (
    <div className="cm-root min-h-screen flex bg-[var(--cm-background)] text-[var(--cm-on-surface)] selection:bg-[var(--cm-primary-container)] selection:text-[var(--cm-on-primary-container)]">
       
          <div className="w-full max-w-4xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--cm-surface-container-lowest)] shadow-[0px_4px_12px_rgba(0,0,0,0.03)] rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Section: Contact information */}
              <div className="md:col-span-2 border-b border-[var(--cm-surface-variant)] pb-3 mb-1 flex items-center gap-3 text-[var(--cm-primary)]">
                <User size={20} fill="currentColor" />
                <h4 className="text-headline-md text-[var(--cm-on-surface)]">
                  Contact Information
                </h4>
              </div>

              {/* Full name */}
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
                  className="bg-[var(--cm-surface-container-lowest)] border-[var(--cm-outline-variant)] text-[var(--cm-on-surface)] placeholder:text-[var(--cm-on-surface-variant)] focus-visible:border-[var(--cm-primary)] focus-visible:ring-[var(--cm-primary)]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email" className="text-label-md text-[var(--cm-on-surface-variant)]">
                  Email Address *
                </Label>
                <div className="relative flex items-center">
                  <Mail size={20} className="absolute left-3 text-[var(--cm-on-surface-variant)] pointer-events-none" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full pl-10 bg-[var(--cm-surface-container-lowest)] border-[var(--cm-outline-variant)] text-[var(--cm-on-surface)] placeholder:text-[var(--cm-on-surface-variant)] focus-visible:border-[var(--cm-primary)] focus-visible:ring-[var(--cm-primary)]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone" className="text-label-md text-[var(--cm-on-surface-variant)]">
                  Phone Number
                </Label>
                <div className="relative flex items-center">
                  <Phone size={20} className="absolute left-3 text-[var(--cm-on-surface-variant)] pointer-events-none" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full pl-10 bg-[var(--cm-surface-container-lowest)] border-[var(--cm-outline-variant)] text-[var(--cm-on-surface)] placeholder:text-[var(--cm-on-surface-variant)] focus-visible:border-[var(--cm-primary)] focus-visible:ring-[var(--cm-primary)]"
                  />
                </div>
              </div>

              {/* Section: Physical address */}
              <div className="md:col-span-2 border-b border-[var(--cm-surface-variant)] pb-3 mb-1 mt-6 flex items-center gap-3 text-[var(--cm-primary)]">
                <MapPin size={20} fill="currentColor" />
                <h4 className="text-headline-md text-[var(--cm-on-surface)]">
                  Physical Address
                </h4>
              </div>

              {/* Street address */}
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
                  className="bg-[var(--cm-surface-container-lowest)] border-[var(--cm-outline-variant)] text-[var(--cm-on-surface)] placeholder:text-[var(--cm-on-surface-variant)] focus-visible:border-[var(--cm-primary)] focus-visible:ring-[var(--cm-primary)]"
                />
              </div>

              {/* Form actions */}
              <div className="md:col-span-2 pt-10 mt-6 flex items-center justify-end gap-6 border-t border-[var(--cm-surface-variant)]">
                <Button
                  type="button"
                  variant="outline"
                  className="border-[var(--cm-primary-container)] text-[var(--cm-on-surface)] hover:bg-[var(--cm-surface-container)]"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[var(--cm-primary-container)] text-[var(--cm-on-primary-fixed-variant)] hover:bg-[var(--cm-primary-fixed)] hover:shadow-sm gap-1"
                >
                  <Save size={18} />
                  Save Customer
                </Button>
              </div>
            </form>
          </div>
        

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[var(--cm-surface-container-lowest)] border-t border-[var(--cm-surface-variant)] z-20">
        <ul className="flex items-center justify-around h-16">
          {MOBILE_NAV_ITEMS.map(({ label, icon: Icon, active }) => (
            <li key={label} className="w-full h-full">
              <a
                href="#"
                className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
                  active
                    ? "text-[var(--cm-primary)]"
                    : "text-[var(--cm-on-surface-variant)] hover:text-[var(--cm-primary)]"
                }`}
              >
                {active ? (
                  <div className="bg-[var(--cm-primary-container)]/30 px-4 py-1 rounded-full mb-1">
                    <Icon size={22} fill="currentColor" />
                  </div>
                ) : (
                  <Icon size={22} />
                )}
                <span className={`text-[10px] ${active ? "font-bold" : "font-medium mt-1"}`}>
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}