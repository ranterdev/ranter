import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Header = () => {
  const { data: sessionData } = useSession()

  return (
    <header className="flex items-center justify-between bg-[#2e026d] p-4 px-8 shadow-md">
      <div className="flex items-center gap-4">
        <Link href="/feed" className="text-lg text-white">
          Feed
        </Link>
        <Link href="/top-rants" className="text-lg text-white">
          Top Rants
        </Link>
      </div>
      <div>
        <button
          className="bg-primary hover:bg-hover rounded-lg px-6 py-2 font-semibold text-white no-underline transition"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? 'Sign out' : 'Sign in'}
        </button>
      </div>
    </header>
  )
}

export default Header
