import React from 'react'
import { Suspense } from 'react'
import getUser from '@/lib/users/getUser'
import getUserPosts from '@/lib/users/getUserPost'
import UserPosts from './components/UserPosts'
import type { Metadata } from 'next'
import Link from 'next/link'



type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata ({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<Users> = getUser(userId)
  const user: Users = await userData

  return{
    title: user.name,
    description: `This is the page ${user.name}`
  }
}


export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<Users> = getUser(userId)
  const userPostData: Promise<Posts[]> = getUserPosts(userId)

  const users = await userData

  const content = (
    <section className='p-10'>
      <div className='flex flex-col items-center gap-y-4'>
        <Link 
        href='/users'
        className='btn btn-md'
        >
        Back
        </Link>
        <h2 className='font-bold text-2xl uppercase text-center'>{users.name}</h2>
      </div>
      <br/>
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Server Component */}
        <UserPosts promise={userPostData}/>
      </Suspense>
    </section>
  )
  
  return content
}
