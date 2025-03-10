'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Category, Tag } from 'src/constants/enum'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Checkbox } from './ui/checkbox'
import { useSearchParams, useRouter } from 'next/navigation'

const formSchema = z.object({
  text: z.string(),
  category: z.nativeEnum(Category).nullish().optional(),
  tags: z.array(z.nativeEnum(Tag)).nullish(),
})

const categoryMap = {
  [Category.Military]: "Quân sự",
  [Category.News]: "Thời sự",
  [Category.Economy]: "Kinh tế",
  [Category.Sports]: "Thể thao",
  [Category.Entertainment]: "Giải trí",
  [Category.Law]: "Pháp luật",
  [Category.Education]: "Giáo dục",
  [Category.Technology]: "Công nghệ",
  [Category.Vehicles]: "Xe",
  [Category.Lifestyle]: "Đời sống",
  [Category.Environment]: "Môi trường",
}

const SearchForm = ({ text, category, tags }: { text: string, category: Category, tags: Tag[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: text ?? '',
      category: category ? category : null,
      tags: tags.length ? tags : null,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('tags')

    if(values.text) {
      params.set('text', values.text)
    } else {
      params.delete('text')
    }
    if(values.category) {
      params.set('category', values.category)
    } else {
      params.delete('category')
    }
    if(values.tags && values.tags.length !== 0) {
      values.tags.forEach((value) => params.append('tags', value))
    } else {
      params.delete('tags')
    }

    router.push(`?${params.toString()}`);
  }

  console.log(form.getValues())

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <p>Danh mục</p>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-[12px]"
                >
                  {Object.entries(Category).map(([key, value]) => (
                    <FormItem key={key} className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={value} />
                      </FormControl>
                      <FormLabel className={`font-normal cursor-pointer ${field.value === value && 'text-red-300'}`}>
                        {categoryMap[Category[key]]}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className='text-base font-medium'>Tag</p>
        <div className='!mt-0 w-full flex flex-wrap gap-[4px] h-[200px] overflow-auto'>
          {Object.entries(Tag).map(([key, value]) => (
            <FormField
              key={key}
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={`text-sm font-normal cursor-pointer px-2 py-1 ${(field.value ?? []).includes(value as Tag) && 'bg-lime-300'}`}>
                    {key}
                  </FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={(field.value ?? []).includes(value)}
                      onCheckedChange={(checked) => {
                        return checked
                          ? field.onChange(field.value ? [...field.value, value] : [value])
                          : field.onChange(
                            field.value?.filter(
                              (value1) => value1 !== value
                            )
                          )
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button type='submit' className='py-[12px] !mt-[8px] px-[8px]'>
          Tìm kiếm
        </Button>
      </form>
    </Form>
  )
}

export default SearchForm