import React from 'react'

//import components
import Address from './Address'
import Company from './Company'

type Props = {
    promise: Promise<Users[]>
}

export default async function Informasi({ promise }: Props) {
    const data = await promise

    const content = (
        <table className='table w-full mt-5'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user,idx) => {
                    const {name,username,email} = user
                    return (
                        <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td className='flex gap-x-4'>
                               <Address {...user}/>
                               <Company {...user}/>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
  return content
}
