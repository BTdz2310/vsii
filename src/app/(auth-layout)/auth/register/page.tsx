'use client'
import React from "react";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from "src/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import Link from "next/link";
import { ROUTES } from "src/constants/routes";

const formSchema = z.object({
  username: z.string().min(6, { message: 'Tên tài khoản tối thiểu phải 6 ký tự!' }),
  password: z.string().min(8, { message: 'Mật khẩu phải tối thiểu có 8 ký tự!' }),
  confirmPassword: z.string()
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Mật khẩu không giống nhau!",
      path: ['confirmPassword']
    });
  }
})

const Register = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <h1 className="text-xl font-bold leading-tight uppercase tracking-tight md:text-2xl text-white font-quicksand">
        Đăng ký
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="block mb-2 text-base font-medium text-dark font-space-grotesk">Tên tài khoản</p>
                </FormLabel>
                <FormControl>
                  <Input className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="block mb-2 text-base font-medium text-dark font-space-grotesk">Mật khẩu</p>
                </FormLabel>
                <FormControl>
                  <Input type="password" className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="block mb-2 text-base font-medium text-dark font-space-grotesk">Cập nhật mật khẩu</p>
                </FormLabel>
                <FormControl>
                  <Input type="password" className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-center text-sm font-light text-dark">
            <Link
              href={ROUTES.LOGIN}
              className="font-medium text-dark hover:underline"
            >
              Quay trở về đăng nhập
            </Link>
          </p>
          <Button
            type="submit"
            className="w-full text-white"
          >
            Đăng ký
          </Button>
          
        </form>
      </Form>
    </>
  );
};

export default Register;
