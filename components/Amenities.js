import React from 'react'
import Amenity from './Amenity'

export default function Amenities() {
  return (
    <div className="p-5 bg-blue-300 rounded-md mx-5 mt-8">
      <div className="bg-blue-400 p-3 rounded-md border-2">
        <p className="text-center text-white font-semibold text-xl">
          주변 편의시설
        </p>
      </div>
      <div className="grid grid-cols-2 pb-5">
        <Amenity amenity="음식점" />
        <Amenity amenity="숙박시설" />
        <Amenity amenity="편의시설" />
        <Amenity amenity="휠체어급속충전기" />
      </div>
    </div>
  )
}
