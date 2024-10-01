'use client'

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

export function TabsDemo({ isLoggedIn = true }) {
  if (!isLoggedIn) {
    return null; // Don't render anything if the user is not logged in
  }

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">الحساب</TabsTrigger>
        <TabsTrigger value="password">كلمة المرور</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>الحساب</CardTitle>
            <CardDescription>
              قم بإجراء تغييرات على حسابك هنا. انقر على حفظ عند الانتهاء.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">الاسم</Label>
              <Input id="name" defaultValue="محمد أحمد" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">اسم المستخدم</Label>
              <Input id="username" defaultValue="@mohammed" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>حفظ التغييرات</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>كلمة المرور</CardTitle>
            <CardDescription>
              قم بتغيير كلمة المرور الخاصة بك هنا. بعد الحفظ، سيتم تسجيل خروجك.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">كلمة المرور الحالية</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">كلمة المرور الجديدة</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>حفظ كلمة المرور</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}