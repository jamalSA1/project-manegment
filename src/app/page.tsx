import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import { ArrowLeft } from 'lucide-react'


import { HydrateClient } from "~/trpc/server";
import { buttonVariants } from "~/components/ui/button";
import Navbar from "~/components/Navbar";
import LandingSection from "~/components/LandingSection";
import RegistrationSteps from "~/components/RegistrationSteps";

export const dynamic = "force-dynamic"

export default async function Home() {

  return (
    <HydrateClient>
      <Navbar />
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex items-center justify-center text-center'>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-[100%]">
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

        <LandingSection />
       
        </div>

      </MaxWidthWrapper>

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

        {/* المسؤل */}
        <RegistrationSteps 
        name='المسؤل' 
        step1="سجل حساباً جديداً" 
        detail1="إما من خلال بدء الخطة المجانية أو اختيار" 
        plan="خطتنا الاحترافية" 
        step2="قم بتعبيت معلومات الشركه" 
        detail2="في هاذي الخطوه يطلب منك اضافة رقم مخصص لتبادلة مع فريقك "
        step3="ابدأ في انشاء مشاريعك"
        detail3="يمكنك اضافة اعظاء الفريق بالبحث عن الرقم المخصص في الخطوة الثانيه وانشاء المشاريع"
        image="/file-upload-preview.jpg" 
        linkTo="/admin"
        />

        {/* الموظف */}
        <RegistrationSteps 
          name="الموظف"
          step1="التسجيل"
          detail1="يمكن للموظف التسجيل مجانآ دون الحاجة الى دفع رسوم"
          step2="اضف معلومات الشركة والرمز المخصص"
          detail2="يجب اضافة معلومات الشركة او المؤسسة واستخدام نفس الرمز المخصص المضاف من قبل المسؤل"
          step3="ستتلقى الان المشاريع "
          detail3="سيصلك اشعار بالمشاريع التي تم ضمك اليها وتستطيع بدء العمل عليها وارسال التحديثات"
          image="/file-upload-preview.jpg"
          linkTo="/employee"
        />
</div>
      </MaxWidthWrapper>
      </HydrateClient>
  );
}
