import Head from 'next/Head'
import React, { Children } from 'react'

export default function Layout({title}) {
  return (
    <div className='bg-gray-300'>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
            {/* {children} */}
            {/* Kuch Bhi */}
        </main>
    </div>
  )
}
