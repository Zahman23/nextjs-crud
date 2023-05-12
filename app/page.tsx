import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href='/users' className="btn btn-secondary btn-md">Users</Link>
      <Link href='/informasi' className="btn btn-primary btn-md">Informasi</Link>
    </main>
  )
}
