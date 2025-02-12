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
  username: z.string(),
  password: z.string(),
})

const Login = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <>
      <h1 className="text-xl font-bold leading-tight uppercase tracking-tight md:text-2xl text-white font-quicksand">
        Đăng nhập
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
          <p className="text-sm font-light text-dark text-center">
            <Link
              href={ROUTES.HOME}
              className="font-medium text-dark hover:underline"
            >
              Quay lại trang chủ
            </Link>
          </p>
          <p className="text-sm font-light text-dark text-center">
            Chưa có tài khoản?{" "}
            <Link
              href={ROUTES.REGISTER}
              className="font-medium text-dark hover:underline"
            >
              Đăng ký
            </Link>
          </p>
          <Button
            type="submit"
            className="w-full text-white"
          >
            Đăng nhập
          </Button>
          
        </form>
      </Form>
    </>
  );
};

export default Login;
