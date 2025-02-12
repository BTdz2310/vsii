import React from 'react'
import Header from 'src/components/Header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className='mt-16'>{children}</main>
    </>
  )
}

export default MainLayout