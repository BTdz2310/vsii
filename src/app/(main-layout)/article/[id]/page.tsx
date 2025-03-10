// import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import { Facebook } from 'lucide-react'
import Comments from 'src/components/Comments'
import { API_ROUTES } from 'src/constants/api-routes'
import { formatDate } from 'src/lib/utils'

const Page = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params
  const data = await getDataResult(id)
  console.log(data)

  return (
    <>
      <div className='absolute inset-0 w-screen h-screen'>
        <img src={data.imageUrl}  className='w-screen h-screen bg-center bg-cover' alt='' />
        {/* <img src='/images/bg.webp' alt="" className='w-screen h-screen object-center object-cover' /> */}
        <div className='bg-black/70 absolute inset-0'></div>
      </div>
      <div className='absolute inset-0 w-screen h-screen z-10'>
        <div className='relative w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10'>
          <h1 className='relative text-white font-space-grotesk uppercase text-7xl font-black text-left'>{data.title}</h1>
          <p className='text-white font-space-grotesk text-2xl text-center'>{data.description}</p>
        </div>
      </div>
      <div className='mt-[100vh] w-3/5 mx-auto'>
        <div className='mx-auto p-20 flex flex-col items-center gap-1'>
          <p>Soạn bởi: <Link href='' className='underline'>{data.authorName}</Link></p>
          <p className='pb-4'>Ngày đăng tải: {formatDate(data.publishAt)}</p>
          <Facebook />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.content  || "<p>No content available</p>",
          }}
          className=' font-space-grotesk text-lg text-left'
        >
        </div>
        <div className='mt-20'>
          <Comments />
        </div>
      </div>
    </>
  )
}

async function getDataResult(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ARTICLE_API}${API_ROUTES.ARTICLE_ONE}/${id}`)
  console.log(`${process.env.NEXT_PUBLIC_ARTICLE_API}${API_ROUTES.ARTICLE_ONE}/${id}`,res)
  const json = await res.json()
  return json
}

export default Page