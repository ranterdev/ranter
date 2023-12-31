import { useSession } from 'next-auth/react'
import Head from 'next/head'
// import Link from "next/link";

import { api } from '@utils/api'
import Header from '@/components/Header/header'

export default function Home() {
  const hello = api.post.hello.useQuery({ text: 'from Ranter 🌿' })

  return (
    <>
      <Head>
        <title>Ranter</title>
        <meta
          name="description"
          content="A permissionless platform for people to share their fraustration & experiences anonymously."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-bold tracking-tight text-[hsl(280,100%,70%)] sm:text-[5rem]">
            Ranter
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  )
}

function AuthShowcase() {
  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
    </div>
  )
}
