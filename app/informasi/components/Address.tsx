'use client'

import React, {useState} from 'react'



export default function Address( user : Users) {
    const {street, suite, city, zipcode} = user.address
    const [modal, setModal] = useState(false)
    

    const handleChange = () => {
        setModal(!modal)
    }
    
    const content = (
        <div>

        <button className='btn btn-primary btn-sm' onClick={handleChange}>Address</button>

        <input type="checkbox" checked={modal} onChange={handleChange} className='modal-toggle'/>

        <div className='modal'>
            <div className="modal-box">
                <h3 className='font-bold text-lg'>Address User</h3>
                    <div className='mt-2 flex flex-nowrap gap-x-10'>
                        <ol className='text-lg font-medium'>
                            <li>Street</li>
                            <li>Suite</li>
                            <li>City</li>
                            <li>Zipcode</li>
                        </ol>
                        <ol key={user.id} className='text-lg font-medium'>
                            <li>: {street}</li>
                            <li>: {suite}</li>
                            <li>: {city}</li>
                            <li>: {zipcode}</li>
                        </ol>
                    </div>
                    <div className='modal-action'>
                        <button type='button' className='btn' onClick={handleChange}>Close</button>    
                    </div>
            </div>
        </div>
    </div>
    )
  return (
    <div>
        {content}
    </div>
  )
}
