import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>
                {new Date().getFullYear()} &copy; All Rights Reserved.
            </span>
            <div className='flex items-center lg:px-2'>
            Made by&nbsp;<Link href={"/"} className='underline underline-offset-2'>Ankit Kumar</Link>
            </div>
            <Link href={"/"} className='underline underline-offset-2' target='_blank'>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer