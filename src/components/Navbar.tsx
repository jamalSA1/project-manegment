"use client"
import React, { useEffect } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { Button } from './ui/button'
import { redirect, useRouter } from 'next/navigation'

export default function Navbar() { 

  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center bg-zinc-50/70 p-3 mt-3 rounded-2xl sticky shadow-sm border border-gray-200">
        <Link href='/' className='flex justify-center items-center'>
        <img src="/Logo-01.png" alt="logo" className='w-8 h-8 mr-1' />
        <span className='text-2xl bg-gradient-to-t from-gray-300 via-gray-600 to-gray-950 bg-clip-text text-transparent'>Ruill</span>
        </Link>

        <div className='flex justify-between items-center gap-6'>
          <Link href='/' className="">التسعير</Link>
          <div className="h-6 w-0.5 bg-gray-200" />
          <div>

            <SignedOut>
              <SignInButton>
              <Button>تسجيل</Button>
              </SignInButton>
            </SignedOut>

            <SignInButton>
              <UserButton />
            </SignInButton>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
