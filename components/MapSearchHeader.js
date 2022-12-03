import React, { useRef } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function MapSearchHeader() {
  const searchInputRef = useRef(null)
  const router = useRouter()
  const search = (event) => {
    event.preventDefault()
    const term = searchInputRef.current.value
    if (!term.trim()) return
    router.push(
      `/mapSearch?term=${router.query.term}&searchBody=${term.trim()}`
    )
  }
  return (
    <div>
      <div className="border-b border-blue-200">
        <div className="relative flex justify-between items-center mx-10 my-5 space-x-5">
          <div className="bg-blue-200">
            <p className="p-2 text-center whitespace-nowrap">
              {router.query.term}
            </p>
          </div>
          <form className="flex w-full items-center">
            <input
              type="text"
              className="bg-gray-200 flex-1 h-10 text-center"
              ref={searchInputRef}
            />
            <MagnifyingGlassIcon
              onClick={search}
              type="submit"
              className="h-5 absolute right-2 cursor-pointer active:shadow-md"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
