import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'

function detailPath() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
    </div>
  )
}

export default detailPath
