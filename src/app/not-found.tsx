import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found!</h1>
      <p>The page your are looking for was not found</p>
      <Link  href='/'>Return Home</Link>
    </div>
  )
}

export default NotFoundPage