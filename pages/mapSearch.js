import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import Header from '../components/Header'
import SearchResult from '../components/SearchResult'
import ResponseA from '../ResponseA'

function MapSearch() {
  const router = useRouter()
  const searchInputRef = useRef(null)
  const [retrivedData, setRetrivedData] = useState(ResponseA)

  const searchData = async () => {
    const mockData = true
    const query = searchInputRef.current.value
    const response = mockData
      ? ResponseA
      : await fetch(
          `https://dapi.kakao.com/v2/local/search/keyword?query=${query}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.KAKAO_API}`,
            },
          }
        )
    setRetrivedData(response)
  }
  return (
    <>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      <Header />
      <div className="">
        <div className="border-b border-blue-200">
          <div className="relative flex justify-between items-center mx-10 my-5 space-x-5">
            <div className="bg-blue-200">
              <p className="p-2 text-center">{router.query.term}</p>
            </div>
            <input
              type="text"
              className="bg-gray-200 flex-1 h-10 text-center"
              ref={searchInputRef}
            />
            <MagnifyingGlassIcon
              onClick={searchData}
              className="h-5 absolute right-2 cursor-pointer active:shadow-md"
            />
          </div>
        </div>

        <div className="bg-gray-300 h-64 mx-10 my-5">지도</div>
        <div className="overflow-y-scroll scrollbar-none h-60 border-t-2">
          <SearchResult results={retrivedData} />
        </div>
      </div>
    </>
  )
}

export default MapSearch
