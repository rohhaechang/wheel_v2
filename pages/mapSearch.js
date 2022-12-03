import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import SearchResult from '../components/SearchResult'
import ResponseA from '../ResponseA'
import MapSearchHeader from '../components/MapSearchHeader'

function MapSearch({ results }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      <Header />
      <div className="">
        <MapSearchHeader />

        <div className="bg-gray-300 h-64 mx-10 my-5">지도</div>
        <div className="overflow-y-scroll scrollbar-none h-60 border-t-2">
          <SearchResult results={results} />
        </div>
      </div>
    </>
  )
}

export default MapSearch

export async function getServerSideProps(context) {
  const mockData = false
  if (context.query.searchBody) {
    const response = mockData
      ? ResponseA
      : await fetch(
          `https://dapi.kakao.com/v2/local/search/keyword?query=${context.query.searchBody}`,
          {
            headers: {
              Authorization: `KakaoAK ${process.env.KAKAO_API}`,
            },
          }
        )
    const data = await response.json()
    return {
      props: {
        results: data,
      },
    }
  }
  return {
    props: {
      results: {},
    },
  }
}
