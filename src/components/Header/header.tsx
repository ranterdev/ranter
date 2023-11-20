import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Header = () => {
  const { data: sessionData } = useSession()

  return (
    <header className="flex items-center justify-between bg-[#2e026d] p-4 px-8 shadow-md">
      <div className="flex items-center gap-4">
        <Link href="/feed" className="font-['Poppins'] text-lg text-white">
          Feed
        </Link>
        <Link href="/top-rants" className="font-['Poppins'] text-lg text-white">
          Top Rants
        </Link>
      </div>
      <div>
        <button
          className="rounded-lg bg-[#ff4c3c] px-6 py-2 font-['Poppins'] font-semibold text-white no-underline transition hover:bg-[#4b4a4a]"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? 'Sign out' : 'Sign in'}
        </button>
      </div>
    </header>
  )
}

export default Header
