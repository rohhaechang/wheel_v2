import React from 'react'
import { useRouter } from 'next/router'

function SearchResult({ results }) {
  const router = useRouter()
  const backHome = (event) => {
    event.preventDefault()
    if (router.query.de || router.query.ar) {
      router.push(
        `/${
          router.query.term === '출발지'
            ? '&de=' + router.query.searchBody
            : '&ar=' + router.query.searchBody
        }`
      )
    }
    router.push(
      `/${
        router.query.term === '출발지'
          ? '?de=' + router.query.searchBody
          : '?ar=' + router.query.searchBody
      }`
    )
  }
  return (
    <div className="flex flex-col items-center m-2 px-10">
      {results.documents?.map((result) => (
        <div
          key={result.id}
          className="flex group items-center justify-between space-x-4 bg-gray-300 my-1 w-full px-5 h-24 rounded-md"
        >
          <div className="my-2">
            <p
              onClick={backHome}
              className="text-xl cursor-pointer group-hover:underline"
            >
              {result.place_name}
            </p>
            <p>{result.address_name}</p>
            <p>{result.phone}</p>
          </div>
          <div
            onClick={backHome}
            className="flex cursor-pointer bg-blue-400 h-16 w-16 items-center justify-center rounded-md group hover:brightness-110"
          >
            <span className="text-white group-hover:underline">선택</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchResult
