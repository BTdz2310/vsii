'use client'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  comment: z.string().min(1, { message: 'Vui lòng nhập bình luận của bạn' }),
})

const Comments = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className='flex flex-col gap-12'>
      <div className='flex justify-between items-center'>
        <h4 className='font-bold text-3xl '>Bình luận</h4>
        {/* <div className='flex rounded-full items-stretch border-[1px]'>
          <p className='px-4 py-2 cursor-pointer'>Mới nhất</p>
          <div className='w-[1px] bg-black '></div>
          <p className='px-4 py-2 cursor-pointer'>Hot nhất</p>
        </div> */}
      </div>
      <div className='border-[1px] p-4 rounded-xl'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className='border-none outline-[0px] shadow-none' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='w-full h-[1px] bg-gray-300'></div>
            <div className='float-end'>
              <Button>Gửi</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default Comments