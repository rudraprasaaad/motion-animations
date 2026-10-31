import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconCurrencyDollar,
  IconShoppingCart,
  IconUsers,
  IconActivity,
} from "@tabler/icons-react";

const stats = [
  {
    label: "Revenue",
    value: "$48,230",
    change: "+12.5%",
    up: true,
    icon: IconCurrencyDollar,
  },
  {
    label: "Users",
    value: "2,845",
    change: "+4.1%",
    up: true,
    icon: IconUsers,
  },
  {
    label: "Orders",
    value: "1,209",
    change: "-2.3%",
    up: false,
    icon: IconShoppingCart,
  },
  {
    label: "Active now",
    value: "184",
    change: "+8.0%",
    up: true,
    icon: IconActivity,
  },
];

const activity = [
  { user: "Ava Thompson", action: "placed an order", time: "2 min ago" },
  { user: "Liam Carter", action: "created an account", time: "14 min ago" },
  { user: "Noah Patel", action: "updated billing details", time: "1 hr ago" },
  { user: "Mia Chen", action: "left a review", time: "3 hr ago" },
];

export const Dashboard = () => {
  return (
    <main className="flex-1 overflow-y-auto p-8">
      <header className="rise mb-8">
        <h1 className="text-2xl font-semibold">Overview</h1>
        <p className="text-sm text-muted">
          Here&apos;s what&apos;s happening today.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, change, up, icon: Icon }, i) => (
          <div
            key={label}
            style={{ "--i": i + 1 } as React.CSSProperties}
            className="rise rounded-xl border border-border bg-white p-5"
          >
            <div className="flex items-center justify-between text-muted">
              <span className="text-sm">{label}</span>
              <Icon size={20} />
            </div>
            <p className="mt-3 text-3xl font-semibold">{value}</p>
            <p
              className={`mt-1 flex items-center gap-1 text-sm ${up ? "text-green-600" : "text-red-600"}`}
            >
              {up ? (
                <IconArrowUpRight size={16} />
              ) : (
                <IconArrowDownRight size={16} />
              )}
              {change} <span className="text-muted">vs last week</span>
            </p>
          </div>
        ))}
      </section>

      <section
        style={{ "--i": 5 } as React.CSSProperties}
        className="rise mt-8 rounded-xl border border-border bg-white p-5"
      >
        <h2 className="mb-4 text-lg font-semibold">Recent activity</h2>
        <ul className="divide-y divide-border">
          {activity.map((item) => (
            <li
              key={item.user}
              className="flex items-center justify-between py-3 text-sm"
            >
              <span>
                <span className="font-medium">{item.user}</span>{" "}
                <span className="text-muted">{item.action}</span>
              </span>
              <span className="text-muted">{item.time}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
