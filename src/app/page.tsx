import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { ArrowLeft } from 'lucide-react'


import { HydrateClient } from "~/trpc/server";
import { buttonVariants } from "~/components/ui/button";
import Navbar from "~/components/Navbar";

export const dynamic = "force-dynamic"

export default async function Home() {

  return (
    <HydrateClient>
      <Navbar />
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>

        <div className="flex justify-center items-center gap-10 w-[100%]">
      <div className="sm:w-[50%]">
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
          Ruill الآن مفتوح للجمهور!
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          يمكنك ادارة مشاريعك وفريق العمل{' '}
          <br className="block sm:hidden"/>
          <span className='bg-gradient-to-t from-blue-700 to-pink-200 text-transparent bg-clip-text'>في مكان واحد.</span>{' '}
        </h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          يمكن لمدير المشروع بدء التسجيل واضافة فريق العمل
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/admin'
          target='_blank'>
          <ArrowLeft className='mr-2 h-5 w-5' />
          ابدأ{' '}
        </Link>
        </div>
        
        <div className='mx-auto max-w-6xl px-6 lg:px-8 hidden md:block w-[50%]'>
        <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8 hidden md:block'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/logo.gif'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
            </div>
        </div>
        </div>

      </MaxWidthWrapper>

      {/* value proposition section */}
      <div className="sm:hidden">
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8 md:hidden'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/logo.gif'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <MaxWidthWrapper>
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56 text-end md:text-center mr-3'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              ادارة مشاريع جميع الشركات والموظفين
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              ليس من السهل ادارة مشاريع في اكثر من شركة في وقت واحد لكن الان 
              <br />
              <span className="text-blue-600">Ruiil</span> اصبح العمل اسهل مع 

            </p>
          </div>
        </div>

        <div className="flex flex-row justify-end md:justify-center items-center">
        <h2 className="text-end md:text-center mr-2 text-2xl">المسؤل</h2>
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
                س��ل حساباً جديداً
              </span>
              <span className='mt-2 text-zinc-700'>
                إما من خلال بدء الخطة المجانية أو
                اختيار{' '}
                <Link
                  href='/pricing'
                  className='text-blue-700 underline underline-offset-2'>
                  خطتنا الاحترافية
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                الخطوة 2
              </span>
              <span className='text-xl font-semibold'>
                قم بتعبيت معلومات الشركه
              </span>
              <span className='mt-2 text-zinc-700'>
                في هاذي الخطوه يطلب منك اضافة رقم مخصص لتبادلة مع فريقك 
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                الخطوة 3
              </span>
              <span className='text-xl font-semibold'>
              ابدأ في انشاء مشاريعك
              </span>
              <span className='mt-2 text-zinc-700'>
                يمكنك اضافة اعظاء الفريق بالبحث عن الرقم المخصص في الخطوة الثانيه وانشاء المشاريع
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto mb-5 max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>

        {/* الموظف */}
        <div className="my-10 flex flex-row justify-end md:justify-center items-center">
        <h2 className="text-end md:text-center mr-2 text-2xl">الموظف</h2>
        <span className="text-zinc-300 mb-1.5  text-3xl font-light md:hidden">-</span>
        </div>

        <ol className='mb-8 mt-2 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 text-end'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                الخطوة 1
              </span>
              <span className='text-xl font-semibold'>
                التسجيل
              </span>
              <span className='mt-2 text-zinc-700'>
                يمكن للموظف التسجيل مجانآ دون الحاجة الى دفع رسوم
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                الخطوة 2
              </span>
              <span className='text-xl font-semibold'>
                اضف معلومات الشركة والرمز المخصص
              </span>
              <span className='mt-2 text-zinc-700'>
                يجب اضافة معلومات الشركة او المؤسسة واستخدام نفس الرمز المخصص المضاف من قبل المسؤل
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                الخطوة 3
              </span>
              <span className='text-xl font-semibold'>
              ستتلقى الان المشاريع 
              </span>
              <span className='mt-2 text-zinc-700'>
                سيصلك اشعار بالمشاريع التي تم ضمك اليها وتستطيع بدء العمل عليها وارسال التحديثات
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.jpg'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
      </HydrateClient>
  );
}
