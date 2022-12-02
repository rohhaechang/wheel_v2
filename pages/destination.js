import React from 'react'
import Router, { useRouter } from 'next/router'
import Head from 'next/head'

import Header from '../components/Header'
import PathCard from '../components/PathCard'
import SecondResponse from '../SecondResponse'

function Destination({ results }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      <Header />
      <div className="w-full h-64 bg-gray-200">지도</div>
      <div>
        <PathCard result={results} />
      </div>
    </div>
  )
}

export default Destination

export function getServerSideProps(context) {
  const mockData = true
  const data = mockData ? SecondResponse : null
  return {
    props: {
      results: data,
    },
  }
}
