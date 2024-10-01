'use client'

import Image from "next/image"
import MaxWidthWrapper from "~/components/MaxWidthWrapper"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import {registrationFormForAdmin, registrationFormForEmployee} from '~/actions/registrationForm'

export default function UserInfo() {

  return (
    <MaxWidthWrapper>
    <Tabs defaultValue="admin" className=" flex justify-center items-center h-[80vh]">
      <div className="lg:mx-auto lg:-mr-5 w-[400px] text-end">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="admin">المسؤل</TabsTrigger>
        <TabsTrigger value="employee">الموظف</TabsTrigger>
      </TabsList>
      <TabsContent value="admin">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">تعبيت معلومات الشركة</CardTitle>
          </CardHeader>

            <form action={registrationFormForAdmin}>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="companyName">اسم الشركة</Label>
              <Input id="companyName" name="companyName" placeholder="تجارة المعادن" required style={{textAlign: 'end'}} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="adminName">اسم المسؤل</Label>
              <Input id="adminName" name="adminName" placeholder="محمد" style={{textAlign: 'end'}} required/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="secretCode"> رمز مخصص </Label>
              <Input id="secretCode" name="secretCode" placeholder="123abc" style={{textAlign: 'end'}} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="logo">شعار الشركة (اختياري) </Label>
              <Input id="logo" type="image" />
            </div>

          </CardContent>
          <CardFooter>
            <Button>حفظ البيانات</Button>
          </CardFooter>
            </form>

        </Card>
      </TabsContent>
      <TabsContent value="employee">
      <Card>
          <CardHeader>
            <CardTitle className="text-center"> اضف معلومات الشركة </CardTitle>
          </CardHeader>
          <form action={registrationFormForEmployee}>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="companyName">اسم الشركة</Label>
              <Input id="companyName" name="companyName" placeholder="تجارة المعادن" style={{textAlign: 'end'}} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="employeeName">اسم الموظف</Label>
              <Input id="employeeName" name="employeeName" placeholder="احمد" style={{textAlign: 'end'}} required />
            </div>
            <div className="space-y-1">
              <Label htmlFor="fieldWork">مجال العمل</Label>
              <Input id="fieldWork" name="fieldWork" placeholder="عمل حر" style={{textAlign: 'end'}} />
            </div>
            <div className="space-y-1">
              <Label htmlFor="code"> الرمز المخصص </Label>
              <Input id="code" name="code" placeholder="123abc" style={{textAlign: 'end'}} required />
            </div>
          </CardContent>
          <CardFooter>
            <Button>حفظ البيانات</Button>
          </CardFooter>            
          </form>

        </Card>
      </TabsContent>
    </div>

    <div className="hidden lg:block lg:w-[50%] ml-5">
    <div className='mx-auto max-w-2xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 w-[25rem]'>
              <Image
                src='/_ (13).jpeg'
                alt='image preview'
                width={1260}
                height={860}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-5 shadow-2xl ring-1 ring-gray-900/10 object-cover'
              />
            </div>
          </div>
        </div>
    </div>
    </Tabs>
    </MaxWidthWrapper>
  )
}