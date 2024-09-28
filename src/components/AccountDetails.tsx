import Image from 'next/image'
import React from 'react'

export default function AccountDetails({src, accountName}: {src: string, accountName: string}) {
  return (
    <div>
          <Image src={src} alt='account page' className='p-3 bg-gray-100 border border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-200 hover:p-2 cursor-pointer' width= "90" height= "90"/>
          <h4 className='mt-3'>{accountName}</h4>
    </div>
  )
}
