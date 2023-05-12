'use client'

import React, {useState} from 'react'

export default function Company( user : Users) {
    const {name, catchPhrase, bs} = user.company
    const {phone} = user
    const [modal, setModal] = useState(false)
    

    const handleChange = () => {
        setModal(!modal)
    }
    
    const content = (
        <div>

        <button className='btn btn-secondary btn-sm' onClick={handleChange}>Company</button>

        <input type="checkbox" checked={modal} onChange={handleChange} className='modal-toggle'/>

        <div className='modal'>
            <div className="modal-box">
                <h3 className='font-bold text-lg'>Company User</h3>
                    <div className='mt-2 flex flex-nowrap gap-x-10'>
                        <ol className='text-lg font-medium'>
                            <li>name</li>
                            <li>catchPhrase</li>
                            <li>bs</li>
                            <li>phone</li>
                        </ol>
                        <ol key={user.id} className='text-lg font-medium'>
                            <li>: {name}</li>
                            <li>: {catchPhrase}</li>
                            <li>: {bs}</li>
                            <li>: {phone}</li>
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
