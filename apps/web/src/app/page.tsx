import { env } from '@repo/environment'
import { Card } from '@repo/ui/card'

export default async function Home() {
  return (
    <div className="-bg-conic-0 flex min-h-screen flex-col items-center justify-center bg-zinc-900">
      Hello world!
      <Card />
      {env.DATABASE_URL}
    </div>
  )
}
