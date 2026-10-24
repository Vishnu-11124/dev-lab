import Comments from '@/components/Comments'
import Members from '@/components/Members'
import React, { ReactNode } from 'react'

const Layout = ({children} : {children: ReactNode}) => {
  return (
    <div>
      {children}
      <div className='flex gap-3'>
        <Members />
        <Comments />
      </div>
    </div>
  )
}

export default Layout
