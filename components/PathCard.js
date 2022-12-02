import React, { useState, useRef } from 'react'
import { ArrowLongDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function PathCard({ result }) {
  const [cardState, setCardState] = useState('')
  const changeState = (id) => {
    setCardState(id)
  }
  const selectedRef = useRef(null)

  const showrec = () => {
    console.log(selectedRef.current.scrollLeft)
    console.log(selectedRef.current.scrollWidth)
    console.log(selectedRef.current.clientWidth)
    selectedRef.current.scrollBy(100, 0)
  }

  const router = useRouter()
  const pathRouting = (event) => {
    event.preventDefault()
    router.push(`/detailPath?term=${cardState}`)
  }
  return (
    <div ref={selectedRef} className="flex overflow-x-scroll scrollbar-none">
      {result.path?.map((way) => (
        <div>
          <div
            onClick={() => changeState(way.id)}
            key={way.id}
            className={`${
              cardState === way.id && result.path ? 'bg-blue-100' : 'bg-white'
            } mx-5 mt-3 py-3 border-2 border-blue-300 shadow-md rounded-2xl pl-5 pr-12`}
          >
            <div onClick={showrec}>
              <p className="text-sm text-blue-700 font-bold">{way.pathType}</p>
            </div>
            <div className="border-b mb-2 pb-2 whitespace-nowrap">
              <p className="text-2xl">
                <span className="mr-3 text-base">소요시간</span> {way.time}
              </p>
            </div>
            <div>
              {way.detail?.map((step, index) => (
                <div key={step.message}>
                  <p className="flex items-center text-lg">
                    <p className="w-3 h-3 border-2 bg-cyan-500 rounded-full border-gray-600 mr-3"></p>
                    {step.message}
                  </p>
                  <div className={`flex items-center my-1 -ml-2 `}>
                    {way.detail && index < way.detail.length - 1 ? (
                      <ArrowLongDownIcon className="h-7" />
                    ) : (
                      <div></div>
                    )}
                    <p className="text-gray-400 text-xs ml-2">{step.reTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
