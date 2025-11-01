export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-zinc-600">Visão geral das suas operações</p>
      </header>

      <div className="h-px w-full bg-zinc-900" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="space-y-2 border border-zinc-900 p-6 transition-colors hover:border-zinc-700">
          <span className="font-mono text-xs text-zinc-500">TOTAL</span>
          <p className="text-3xl font-bold text-white">R$ 0,00</p>
          <p className="text-sm text-zinc-600">Em propostas</p>
        </div>

        <div className="space-y-2 border border-zinc-900 p-6 transition-colors hover:border-zinc-700">
          <span className="font-mono text-xs text-zinc-500">APROVADAS</span>
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-sm text-zinc-600">Propostas aprovadas</p>
        </div>

        <div className="space-y-2 border border-zinc-900 p-6 transition-colors hover:border-zinc-700">
          <span className="font-mono text-xs text-zinc-500">PENDENTES</span>
          <p className="text-3xl font-bold text-white">0</p>
          <p className="text-sm text-zinc-600">Aguardando aprovação</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white">Atividades Recentes</h2>

        <div className="border border-zinc-900 p-4 text-center text-sm text-zinc-600">
          Nenhuma atividade registrada
        </div>
      </div>
    </div>
  )
}
