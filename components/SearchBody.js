import React from 'react'
import Search from './Search'
import { useRouter } from 'next/router'

export default function SearchBody() {
  const query = '최적경로검색'
  const router = useRouter()
  const search = (event) => {
    event.preventDefault()
    router.push(`/destination?term=${query}`)
  }
  return (
    <div className="h-25 border-b shadow-sm">
      <div className="mx-8 mt-3 pt-3 pr-3 pl-3 border-2  border-blue-200 shadow-md">
        <Search goback="출발지" />
        <Search goback="도착지" />
      </div>
      <div
        onClick={search}
        className="group flex mx-10 p-5 my-3 bg-gray-500 rounded-md cursor-pointer hover:bg-gray-400"
      >
        <p className="mx-auto text-white text-xl font-semibold group-hover:underline">
          최적 경로 검색
        </p>
      </div>
    </div>
  )
}
