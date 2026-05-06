import { ChevronDown, Download, Search } from "lucide-react";

const orders = [
  {
    id: "ORD-9021",
    customer: "Eleanor Rigby",
    email: "eleanor@example.com",
    date: "Oct 24, 2023",
    status: "Processing",
    statusTone: "bg-white",
    amount: "$124.00",
  },
  {
    id: "ORD-9020",
    customer: "Jude Martin",
    email: "jude.m@example.com",
    date: "Oct 23, 2023",
    status: "Shipped",
    statusTone: "bg-zinc-400",
    amount: "$89.50",
  },
  {
    id: "ORD-9019",
    customer: "Penny Lane",
    email: "penny.l@example.com",
    date: "Oct 22, 2023",
    status: "Delivered",
    statusTone: "bg-zinc-500",
    amount: "$342.00",
  },
  {
    id: "ORD-9018",
    customer: "Maxwell Edison",
    email: "max.edison@example.com",
    date: "Oct 21, 2023",
    status: "Delivered",
    statusTone: "bg-zinc-500",
    amount: "$45.00",
  },
];

export default function AdminOrdersPage() {
  return (
    <div className="mx-auto flex w-full max-w-360 flex-col gap-8 p-6 md:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
            Orders
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Manage and track customer orders.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-[#18181B] px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-600 hover:bg-zinc-900">
          <Download className="size-4" />
          Export
        </button>
      </div>

      <section className="overflow-hidden rounded-lg border border-zinc-800 bg-[#18181B]">
        <div className="flex flex-col gap-4 border-b border-zinc-800 bg-zinc-950/40 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Filter by customer or ID..."
              className="h-10 w-full rounded-md border border-zinc-800 bg-[#131315] pl-9 pr-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            <button className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-[#131315] px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100">
              Status
              <ChevronDown className="size-4" />
            </button>
            <button className="inline-flex items-center gap-1 rounded-md border border-zinc-800 bg-[#131315] px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100">
              Date Range
              <ChevronDown className="size-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-200 border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-950/30">
                <th className="w-32 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Order ID
                </th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Customer
                </th>
                <th className="w-40 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Date
                </th>
                <th className="w-32 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Status
                </th>
                <th className="w-32 px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Total Amount
                </th>
                <th className="w-28 px-4 py-3 text-right text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-800">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="group transition-colors hover:bg-zinc-900/40"
                >
                  <td className="px-4 py-4 font-mono text-sm text-zinc-500">
                    {order.id}
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-medium text-zinc-100">
                      {order.customer}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {order.email}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-zinc-500">
                    {order.date}
                  </td>
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-200">
                      <span
                        className={`size-1.5 rounded-full ${order.statusTone}`}
                      />
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-right text-sm text-zinc-100">
                    {order.amount}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <button className="rounded-md border border-transparent bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-800 bg-zinc-950/40 px-4 py-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>Showing 1 to 4 of 48 results</span>
          <div className="flex items-center gap-2">
            <button
              disabled
              className="rounded-md border border-zinc-800 bg-[#131315] px-3 py-1 text-zinc-600 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button className="rounded-md border border-zinc-800 bg-[#131315] px-3 py-1 transition-colors hover:border-zinc-700 hover:text-zinc-100">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
