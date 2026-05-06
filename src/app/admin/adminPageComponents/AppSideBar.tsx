"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Shapes,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const mainNavItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Categories", href: "/admin/categories", icon: Shapes },
  { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { label: "Customers", href: "/admin/customers", icon: Users },
];

const bottomNavItems = [
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Logout", href: "/logout", icon: LogOut },
];

function NavLinks({
  items,
  withClose,
}: {
  items: typeof mainNavItems | typeof bottomNavItems;
  withClose?: boolean;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => {
        const Icon = item.icon;
        const active =
          item.href === "/admin"
            ? pathname === item.href
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all",
              active
                ? "bg-zinc-100 text-zinc-950"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100",
            ].join(" ")}
          >
            <Icon className="size-5 shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}

      {withClose ? (
        <label
          htmlFor="admin-mobile-nav"
          className="mt-2 flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100"
        >
          <X className="size-5 shrink-0" />
          <span>Close</span>
        </label>
      ) : null}
    </div>
  );
}

export function AppSideBar() {
  return (
    <>
      <label
        htmlFor="admin-mobile-nav"
        className="fixed inset-0 z-40 hidden bg-black/80 opacity-0 transition-opacity peer-checked/admin-nav:block peer-checked/admin-nav:opacity-100 lg:hidden"
      />

      <aside className="fixed inset-y-0 left-0 z-50 flex w-70 -translate-x-full flex-col border-r border-zinc-800 bg-zinc-950 p-4 shadow-xl transition-transform duration-300 ease-in-out peer-checked/admin-nav:translate-x-0 lg:hidden">
        <div className="mb-8 flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-zinc-800">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgTkYXG5N1zUSiYXCmL2UX0GHGlizYFcFQeX08iOHU-PE_MxmMeAw9ApTAhqzQjqqlP9D71bp95bTNmpoIHwpKJtcB2rD_aOGciISv_kgp9NOqPkIm3-_ZLxxW5vP5v7OYR_ZJl0nMAkOLIBeLESa_wwuXMzGW1AtNQCBKqokpy38DTVpQ-femZmuidXwO720NHORoJwQivLvLOU_rzaejBgwMyF48Y3A1xuorrS07rzFc6o0t0xCMFWey95Kw6beFuyt-23NXVWe0"
                alt="Store logo"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold leading-none text-zinc-50">
                Operations
              </h2>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Management
              </span>
            </div>
          </div>
          <label
            htmlFor="admin-mobile-nav"
            className="-mr-2 flex cursor-pointer items-center justify-center rounded-md p-2 text-zinc-500 transition-colors hover:text-zinc-100"
          >
            <X className="size-5" />
            <span className="sr-only">Close navigation</span>
          </label>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <NavLinks items={mainNavItems} />
          <div className="border-t border-zinc-800 pt-4">
            <NavLinks items={bottomNavItems} />
          </div>
        </div>
      </aside>

      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r border-zinc-800 bg-[#09090B] p-4 lg:flex">
        <div className="mb-8 flex items-center gap-3 px-3 py-2">
          <div className="flex size-8 items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-zinc-800">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgTkYXG5N1zUSiYXCmL2UX0GHGlizYFcFQeX08iOHU-PE_MxmMeAw9ApTAhqzQjqqlP9D71bp95bTNmpoIHwpKJtcB2rD_aOGciISv_kgp9NOqPkIm3-_ZLxxW5vP5v7OYR_ZJl0nMAkOLIBeLESa_wwuXMzGW1AtNQCBKqokpy38DTVpQ-femZmuidXwO720NHORoJwQivLvLOU_rzaejBgwMyF48Y3A1xuorrS07rzFc6o0t0xCMFWey95Kw6beFuyt-23NXVWe0"
              alt="Store logo"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold leading-none text-zinc-50">
              Operations
            </h2>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
              Management
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <NavLinks items={mainNavItems} />
          <div className="border-t border-zinc-800 pt-4">
            <NavLinks items={bottomNavItems} />
          </div>
        </div>
      </aside>
    </>
  );
}
