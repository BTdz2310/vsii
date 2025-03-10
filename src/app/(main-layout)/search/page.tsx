// import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import { Facebook } from 'lucide-react'
import Comments from 'src/components/Comments'
import { API_ROUTES } from 'src/constants/api-routes'
import NavBar from 'src/components/NavBar'
import SearchForm from 'src/components/SearchForm'
import { Category, Tag } from 'src/constants/enum'
import { ROUTES } from 'src/constants/routes'

type Article = {
  id: string
  title: string
  description: string
}

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const { text = "", category = "", tags = [] } = searchParams;
  const formattedTags = Array.isArray(tags) ? tags : tags ? [tags] : [];

  const data = (await getDataResult(await searchParams)).data
  console.log(data)

  return (
    <div className='pt-16 font-space-grotesk'>
      <NavBar />
      <div className=''>
        <div className='fixed top-[64px] left-0 w-[280px] h-screen flex flex-col justify-center px-[20px] items-center'>
          <SearchForm text={text as string} category={category as Category} tags={formattedTags as Tag[]} />
        </div>
        <div className='ml-[280px] w-[calc(100%-280px)] min-h-screen my-4 pr-4'>
          {(data as Article[]).map((article) => (
            <div key={article.id} className='py-2 px-4 rounded-lg border'>
              <Link href={`${ROUTES.ARTICLE}/${article.id}`} className='text-2xl'>{article.title}</Link>
              <p className='text-sm pt-2'>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

async function getDataResult(searchParams: { [key: string]: string | string[] | undefined }) {
  const query = Object.fromEntries(Object.entries(searchParams).filter(([_, value]) => value !== undefined));
  console.log(process.env.NEXT_PUBLIC_SEARCH_API)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SEARCH_API}${API_ROUTES.SEARCH}?${new URLSearchParams(query)}`)
  const json = await res.json()
  return json
}

export default Page