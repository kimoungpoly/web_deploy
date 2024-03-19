import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      Product page
      <Link href={`/product/${1}`}>View Detail</Link>
    </div>
  )
}

export default page
