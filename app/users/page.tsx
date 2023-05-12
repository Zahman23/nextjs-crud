import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import getAllUsers from '@/lib/users/getAllUsers'

export const metadata: Metadata = {
    title: 'Users'
}

export default async function usersPage() {
    const usersData: Promise<Users[]> = getAllUsers()
    const users = await usersData

    const content = (
        <section className='p-10 flex flex-col items-center gap-y-3'>
            <div>
               <h2>
                 <Link href='/' className='btn btn-md'>Back To Home</Link>
               </h2>
            </div>
            <div className="dropdown dropdown-bottom">
              <label tabIndex={0} className="btn m-1">Click</label>
                 <ul tabIndex={0} className="dropdown-content menu p-2 shadow-xl bg-slate-50 rounded-box w-52">
                     {users.map(user => {
                        return (
                            <li key={user.id}>
                                <Link href={`/users/${user.id}`}>
                                  {user.name}
                                </Link>
                            </li>
                        )
                     })}
                     
                 </ul>
            </div>
        </section>
    )

  return content
}
