'use client'
import React, { useEffect } from 'react'

const Politics = () => {
  const [title, setTitle] = React.useState('')
  useEffect(() => {
   setTitle('Politics') 
  }, [])
  return (
    <div className='politics'>{title}</div>
  )
}

export default Politics