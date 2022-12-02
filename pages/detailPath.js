import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'

function DetailPath() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
    </div>
  )
}

export default DetailPath
