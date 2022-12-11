import React from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { arrAtom, depAtom } from '../atom/SearchAtom'

export default function Header() {
  const router = useRouter()
  const [arr, setArr] = useRecoilState(arrAtom)
  const [dep, setDep] = useRecoilState(depAtom)
  const goHome = (event) => {
    event.preventDefault()
    if (!router.query.term) {
      setArr('')
      setDep('')
    }
    router.push(`/`)
  }
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-sky-400 to-blue-800 shadow-sm border-b rounded-bl-lg rounded-br-lg sticky top-0 z-30 ">
      <div
        onClick={goHome}
        className="flex h-10 items-center hover:cursor-pointer"
      >
        <p className="text-white font-extrabold text-4xl">W:HEEL</p>
      </div>
      <div className="flex space-x-3">
        <div>
          <MagnifyingGlassIcon className="h-8 text-white cursor-pointer" />
        </div>
        <div>
          <Bars3Icon className="h-8 text-white cursor-pointer" />
        </div>
      </div>
    </header>
  )
}
