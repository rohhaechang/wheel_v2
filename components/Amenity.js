import React from 'react'

export default function Amenity({amenity}) {
  return (
    <div className='text-center bg-blue-500 rounded-full mt-7 mx-2 p-3 cursor-pointer group hover:brightness-125 active:brightness-150 shadow-md border'>
      <p className='text-white group-hover:underline'>
        {amenity}
      </p> 
    </div>
  )
}
