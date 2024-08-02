import React from 'react'

import Link from 'next/link'

const GrayBtn = ({href, name}) => {
  return (
    <Link href={href} className='inline-block bg-bgBtn text-whitetxt text-sm rounded-full uppercase my-4 px-7 py-2'>
      {name}
    </Link>
  )
}

export default GrayBtn
