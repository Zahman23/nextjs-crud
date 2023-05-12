import React from 'react'
import { Metadata } from 'next'
import getAllUsers from '@/lib/users/getAllUsers'
import Link from 'next/link'

//import components
import Informasi from './components/Informasi'
import { Suspense } from 'react'

export const metadata: Metadata = {
    title: 'Informasi'
}

export default async function InformasiUsers() {
    const userData: Promise<Users[]> = getAllUsers()
   

  return (
    <div className='p-10'>
         <Link href='/'>
         <button type='button' className='btn btn-md '>
          Back To Home
          </button>
          </Link>
          <Suspense fallback={<h2>Loading...</h2>}>
          {/* @ts-expect-error Server Component */}
          <Informasi promise={userData}/>
          </Suspense>
    </div>
  )
}
