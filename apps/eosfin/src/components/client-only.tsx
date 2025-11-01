'use client'

import dynamic from 'next/dynamic'
import type { ComponentType, ReactNode } from 'react'

function ClientOnlyComponent({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export const ClientOnly = dynamic(
  async function () {
    return Promise.resolve(ClientOnlyComponent) as Promise<
      ComponentType<{ children: ReactNode }>
    >
  },
  { ssr: false }
)
