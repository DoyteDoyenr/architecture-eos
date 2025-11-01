import Link from 'next/link'
import { ReactNode } from 'react'

interface PrivateLayoutProps {
  readonly children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-zinc-900">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-white">EosLoan</h1>

            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="flex h-9 items-center px-4 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Dashboard
              </Link>
              <Link
                href="/project"
                className="flex h-9 items-center px-4 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                Project
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-black">
              U
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}
