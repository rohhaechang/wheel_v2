import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import ResponseC_1 from '../ResponseC_1'
import ResponseC_2 from '../ResponseC_2'
import ResponseC_3 from '../ResponseC_3'
import DetailPathMap from '../components/DetailPathMap'
import Header from '../components/Header'

function DetailPath({ results }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      <Header />
      <div>
        <DetailPathMap results={results} />
      </div>
    </div>
  )
}

export default DetailPath

export function getServerSideProps(context) {
  const mockData = true
  let data = {}
  switch (context.query.term) {
    case '1hosun':
      data = mockData ? ResponseC_1 : null
      break
    case '2hosun':
      data = mockData ? ResponseC_2 : null
      break
    case '3hosun':
      data = mockData ? ResponseC_3 : null
      break
    default:
      break
  }

  return {
    props: {
      results: data,
    },
  }
}
