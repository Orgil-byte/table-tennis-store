import { Bell, CircleHelp, Menu, Search } from "lucide-react";

import { AppSideBar } from "./adminPageComponents/AppSideBar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className} dark min-h-screen w-full overflow-x-hidden bg-[#131315] text-[#e5e1e4]`}
    >
      <input
        id="admin-mobile-nav"
        type="checkbox"
        className="peer/admin-nav sr-only"
      />

      <AppSideBar />

      <div className="flex min-h-screen min-w-0 flex-col bg-[#131315] lg:pl-60">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-zinc-800 bg-[#09090B] px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <label
              htmlFor="admin-mobile-nav"
              className="flex size-10 cursor-pointer items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-100 lg:hidden"
            >
              <Menu className="size-5" />
              <span className="sr-only">Open navigation</span>
            </label>

            <span className="flex items-center gap-2 text-base font-bold tracking-tight text-zinc-50 lg:hidden">
              <span className="flex size-6 items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-zinc-800">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgTkYXG5N1zUSiYXCmL2UX0GHGlizYFcFQeX08iOHU-PE_MxmMeAw9ApTAhqzQjqqlP9D71bp95bTNmpoIHwpKJtcB2rD_aOGciISv_kgp9NOqPkIm3-_ZLxxW5vP5v7OYR_ZJl0nMAkOLIBeLESa_wwuXMzGW1AtNQCBKqokpy38DTVpQ-femZmuidXwO720NHORoJwQivLvLOU_rzaejBgwMyF48Y3A1xuorrS07rzFc6o0t0xCMFWey95Kw6beFuyt-23NXVWe0"
                  alt="Store logo"
                  className="h-full w-full object-cover"
                />
              </span>
              AdminPanel
            </span>

            <div className="relative hidden md:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-64 rounded-md border border-zinc-800 bg-zinc-900 pl-9 pr-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button className="flex size-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100">
              <Bell className="size-5" />
              <span className="sr-only">Notifications</span>
            </button>
            <button className="flex size-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100">
              <CircleHelp className="size-5" />
              <span className="sr-only">Help</span>
            </button>
            <button className="ml-2 overflow-hidden rounded-full border border-zinc-700 transition hover:ring-2 hover:ring-zinc-600">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWyCYhtlkSHapzmOTF80EIXOIp4OCWYXkg7rG5TnKTNpCihx0fyrF4uoadqRfM-bU21eoH9UF8mDfvlh-r6MEcgXmrcgNwVPZ1VlqRzmMMUVUrwHUMJF36WHf10fYkLUjVy7EPVqLqR9FcCSiIFv-73MS_GUZCQxNNY-jRMglcBbxBr4GQlNVqQIuyc0deKD-oynpSHyW7i-ah0Qd4D4kPY0e_jW0LcnkvTWYh5jtlJ67WdWMQF1d455lnaZfWl8CWu_rioa9cFHvj"
                alt="User avatar"
                className="size-8 object-cover"
              />
            </button>
          </div>
        </header>

        <main className="min-w-0 flex-1 bg-[#131315]">{children}</main>
      </div>
    </div>
  );
}
