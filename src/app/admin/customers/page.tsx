import Image from "next/image";
import { Search } from "lucide-react";

const customers = [
  {
    name: "Sarah Jenkins",
    email: "sarah.jenkins@example.com",
    status: "Active",
    statusTone:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    orders: 24,
    spent: "$3,450.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAM65cakdyElOutD63puHlzrflQsk59OUbEFVS-CkYyLR3kO5PjOQxlpnc0Gpr_VtbSPBrrzwASueqow51YDXXaFU380O-UWF6WqCjHZRCElsgOPFDPPHFej9gwOnQjwh_LkkK0UJxacKN3FsCqkTqLMrsFMrVbgbgoj1wzaCAoNCLEZnL-ZOd9bmJYOYRixxdZKXbzjocpS3m7x9HJ43SJAxT2eS7DFqeCntSH6-MRXEjgV-2FODArO0MCeuo709gTfYkexMJyA1Px",
  },
  {
    name: "Michael Chen",
    email: "m.chen@techcorp.io",
    status: "Active",
    statusTone:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    orders: 12,
    spent: "$1,890.50",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQwBiebtLSSuuE88C4k0CJue-iStKxwboK0iU_iQIgbOkH2p7N5b3uHf-tO8y-X1krbYch9OMe5PoTRmpJwKH9HX5BUBq8R6LSH7lBZtPmLqxnqv2vm01ECKDCDFFxbCpjLivHjJxn1qQP8bN_WE5GA0ErjFVb-kNt3hbe-tp6QLnNRjUtCVlKs9D5zvCEFeC0RxTNuH_2vjs8sH4kO0iMKSdpITsG-xjGOwQTBoLO5YcBr-2ArgTSS7hA3lCQmpLG6Athmmnj_tYa",
  },
  {
    name: "Emily Rodriguez",
    email: "emily.r@designstudio.net",
    status: "Idle",
    statusTone: "border-amber-500/20 bg-amber-500/10 text-amber-400",
    orders: 3,
    spent: "$450.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDw_otoZjxbpOAyxRbdxmGGYJ0xYlK4QDrEScG08QWj8usgdNa4Yzvnp2e0HlDgDgjHe2OJSx4jKGsGiGKTdpS6k-xpn0mO0PRYdQ7WnV4fwtJ4vtLK694vvjyLQ_-B83FLIxQs2iambi5LW6VzCsGOeUGFe6LKGCN5vUrhSw8y-xVS83pq07Z7r_4vWtTsbmCNMnbCGiMcKprqmp7VISBOJHVF2vG5ybo1n99ec4MMU8FH66J4QqAy6iogbaH6hxk_7Rv2uPlGNQem",
  },
  {
    name: "James Dawson",
    email: "jdawson@enterprise.com",
    status: "Active",
    statusTone:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    orders: 56,
    spent: "$12,400.25",
    initials: "JD",
  },
];

export default function AdminCustomersPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 p-6 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
            Customers
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Manage your customer base, view purchase history, and analyze
            spending patterns.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Search customers..."
              className="h-10 w-full rounded-md border border-zinc-800 bg-zinc-900 pl-9 pr-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-500"
            />
          </div>
          <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200">
            Export CSV
          </button>
        </div>
      </div>

      <section className="overflow-hidden rounded-lg border border-zinc-800 bg-[#18181B]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/30">
                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-500">
                  Customer
                </th>
                <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-500">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-500">
                  Total Orders
                </th>
                <th className="px-6 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-500">
                  Total Spent
                </th>
                <th className="px-6 py-4 text-right text-[11px] font-semibold uppercase tracking-[0.05em] text-zinc-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800">
              {customers.map((customer) => (
                <tr
                  key={customer.email}
                  className="group transition-colors hover:bg-zinc-900/40"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {customer.image ? (
                        <Image
                          src={customer.image}
                          alt={customer.name}
                          width={40}
                          height={40}
                          className="size-10 rounded-full border border-zinc-700 object-cover"
                        />
                      ) : (
                        <div className="flex size-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-800 text-sm font-bold text-zinc-300">
                          {customer.initials}
                        </div>
                      )}

                      <div>
                        <div className="font-semibold text-zinc-100 transition-colors group-hover:text-white">
                          {customer.name}
                        </div>
                        <div className="mt-1 text-sm text-zinc-500">
                          {customer.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] ${customer.statusTone}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-zinc-100">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-zinc-100">
                    {customer.spent}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-700">
                      View History
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 border-t border-zinc-800 bg-zinc-950/40 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-zinc-500">
            Showing <span className="font-medium text-zinc-100">1</span> to{" "}
            <span className="font-medium text-zinc-100">4</span> of{" "}
            <span className="font-medium text-zinc-100">1,204</span> customers
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled
              className="rounded-md p-2 text-zinc-600 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            <button className="rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-100">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
