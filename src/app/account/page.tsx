import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AccountDetails from '~/components/AccountDetails'
import MaxWidthWrapper from '~/components/MaxWidthWrapper'
import Home  from '~/components/staggered-cards'

export default function AccountPage() {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto mt-[50%] sm:mt-[20%] text-center flex flex-col justify-center items-center '>
        <div className='flex items-center justify-center relative'>
        <Image src='/star2.png' alt='star' width={60} height={40} className='-mr-4 -mt-3'/>
      <h1 className='font-semibold text-2xl'>حدد نوع الحساب</h1>
        </div>

      <div className="flex justify-center items-center gap-16 w-[100%] text-center mt-10">
        <Link href='/admin'>
        <AccountDetails src='/admin.png' accountName='مدير'/>
        </Link>
        <Link href='/employee'>
        <AccountDetails src='/employee.png' accountName='موظف'/>
        </Link>
      </div>
      </div>

      <Home />
    </MaxWidthWrapper>
  )
}
