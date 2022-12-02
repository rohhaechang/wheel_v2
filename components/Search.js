import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function Search({goback}) {
  const router = useRouter();
  const search = (event) => {
    event.preventDefault();
    router.push(`/mapSearch?term=${goback}`);
  }
  return (
    <div className='flex justify-center items-center space-x-1 mb-2 mx-5'>
          <div className='pr-2'>
            <p className='text-xl whitespace-nowrap '>{goback}</p>
          </div>
          <div onClick={search} className='relative flex-grow group'>
            <button className='bg-gray-100 pl-3 h-10 w-full border-gray-500 rounded-md group-hover:shadow-md active:shadow-md' />
            <div className='absolute right-2 top-2'>
              <MagnifyingGlassIcon className='h-6 text-gray-500 cursor-pointer'/>
            </div>
          </div>
        </div>
  )
}
