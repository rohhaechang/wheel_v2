import React from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { depAtom, arrAtom } from '../atom/SearchAtom'

function SearchResult({ results }) {
  const [dep, setDep] = useRecoilState(depAtom)
  const [arr, setArr] = useRecoilState(arrAtom)
  const router = useRouter()
  const chooseResult = (event, result) => {
    event.preventDefault()
    if (router.query.term === '출발지') {
      setDep(result)
      router.push('/')
    } else {
      setArr(result)
      router.push('/')
    }
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
              onClick={() => chooseResult(event, result.place_name)}
              className="text-xl cursor-pointer group-hover:underline"
            >
              {result.place_name}
            </p>
            <p>{result.address_name}</p>
            <p>{result.phone}</p>
          </div>
          <div
            onClick={() => chooseResult(event, result.place_name)}
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
