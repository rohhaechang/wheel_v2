import React from 'react'
import { ArrowLongDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function PathCard({ result }) {
  // scrollLeft는 전체 스크롤 너비에서 현재 화면 너비를 뺀 값
  // scrollWidth는 전체 스크롤 너비(숨겨진 것 포함)
  // clientWidth는 현재 스크롤 너비

  const router = useRouter()
  const pathRouting = (e, id) => {
    e.preventDefault()
    router.push(`/detailPath?term=${id}`)
  }

  return (
    <div className="flex overflow-x-scroll scrollbar-none">
      {result.path?.map((way) => (
        <div
          key={way.id}
          onClick={() => pathRouting(event, way.id)}
          className={`mx-5 mt-3 py-3 border-2 border-blue-300 shadow-md rounded-2xl pl-5 pr-12`}
        >
          <div>
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
                <div className="flex items-center text-lg">
                  <p className="w-3 h-3 border-2 bg-cyan-500 rounded-full border-gray-600 mr-3"></p>
                  {step.message}
                </div>
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
      ))}
    </div>
  )
}
