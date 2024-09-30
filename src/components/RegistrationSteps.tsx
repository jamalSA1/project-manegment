import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type RegistrationStepsProps = {
  name: string,
  step1: string,
  detail1: string,
  step2: string,
  detail2: string,
  step3: string,
  detail3: string,
  image: string,
  plan?: string,
  linkTo: string,
}

export default function RegistrationSteps({name, step1, detail1, step2, detail2, step3, detail3, image, plan, linkTo}: RegistrationStepsProps) {
  return (
    <>
    <div className="flex flex-row justify-end md:justify-center items-center">
      <Link href={linkTo} className='flex flex-row gap-2 justify-center items-center text-center'>
        <ArrowLeft width={24} height={24}/>
    <h2 className="text-end md:text-center mr-2 text-2xl">{name}</h2>
      </Link>
    <span className="text-zinc-300 mb-1.5  text-3xl font-light md:hidden">-</span>
    </div>

    {/* المسؤل */}
    <ol className='mb-8 mt-2 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 text-end'>
      <li className='md:flex-1'>
        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-sm font-medium text-blue-600'>
            الخطوة 1
          </span>
          <span className='text-xl font-semibold'>
            {step1}
          </span>
          <span className='mt-2 text-zinc-700'>
            {detail1}
            <Link
              href='/pricing'
              className='text-blue-700 underline underline-offset-2'>
              {' '}{plan}
            </Link>
          </span>
        </div>
      </li>
      <li className='md:flex-1'>
        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-sm font-medium text-blue-600'>
            الخطوة 2
          </span>
          <span className='text-xl font-semibold'>
            {step2}
          </span>
          <span className='mt-2 text-zinc-700'>
            {detail2}
          </span>
        </div>
      </li>
      <li className='md:flex-1'>
        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-sm font-medium text-blue-600'>
            الخطوة 3
          </span>
          <span className='text-xl font-semibold'>
          {step3}
          </span>
          <span className='mt-2 text-zinc-700'>
            {detail3}
          </span>
        </div>
      </li>
    </ol>

    <div className='mx-auto mb-20 max-w-6xl px-6 lg:px-8'>
      <div className='mt-16 flow-root sm:mt-24'>
        <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
          <Image
            src={image}
            alt='page preview'
            width={1419}
            height={732}
            quality={100}
            className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
          />
        </div>
      </div>
    </div>
    </>
  )
}
