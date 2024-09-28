import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'

export default function Navbar() {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center bg-zinc-100/70 p-5 rounded-br-2xl rounded-bl-2xl sticky shadow-sm border border-gray-200">
        <Link href='/' className='text-2xl bg-gradient-to-t from-gray-300 via-gray-600 to-gray-950 bg-clip-text text-transparent'>Ruill</Link>

        <div className='flex justify-between items-center gap-6'>
          <p className="">التسعير</p>
          <div className="h-6 w-0.5 bg-gray-200"></div>
          <Link className="" href='/account'>تسجيل</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
