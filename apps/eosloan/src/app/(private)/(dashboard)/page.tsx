export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-zinc-600">Overview of your operations</p>
      </header>

      <div className="h-px w-full bg-zinc-900" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-2 border border-zinc-900 p-6 transition-colors hover:border-zinc-700">
          <span className="font-mono text-xs text-zinc-500">TOTAL</span>
          <p className="text-3xl font-bold text-white">$ 0.00</p>
          <p className="text-sm text-zinc-600">In proposals</p>
        </div>

        <div className="space-y-2 border border-zinc-900 p-6 transition-colors hover:border-zinc-700">
          <span className="font-mono text-xs text-zinc-500">APPROVED</span>
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-sm text-zinc-600">Approved proposals</p>
        </div>

        <div className="space-y-2 border border-zinc-900 p-6 transition-colors hover:border-zinc-700">
          <span className="font-mono text-xs text-zinc-500">PENDING</span>
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-sm text-zinc-600">Awaiting approval</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">Recent Activity</h2>

        <div className="border border-zinc-900 p-4 text-center text-sm text-zinc-600">
          No activity recorded
        </div>
      </div>
    </div>
  )
}
