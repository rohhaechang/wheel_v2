import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

export default function DetailPathMap({ results }) {
  const router = useRouter()
  const pathRouting = (event, type) => {
    event.preventDefault()
    type === '도보'
      ? router.push(`/walkMap?term=`)
      : router.push(`/transferMap?term=`)
  }

  return (
    <div>
      <div className="m-5 bg-gray-200 p-3">
        <p className="font-bold mb-2 text-sm">{results.summary.a}</p>
        <p className="mb-2 text-lg">소요시간: {results.summary.reqTime}</p>
        <p>출발시간: {results.summary.depTime}</p>
        <p>도착시간: {results.summary.arrTime}</p>
      </div>
      <div className="m-5 bg-gray-200 p-3 flex space-x-2">
        <MapPinIcon className="h-5" />
        <p>출발지 이름</p>
      </div>
      <div className="m-5">
        {results.data?.map((result, index) => (
          <div key={index} className="mb-5">
            <div className="flex space-x-5 p-3 items-center">
              <p className="text-sm whitespace-nowrap">{result.time}</p>
              <div className="p-3 text-ellipsis">
                <p>
                  {typeof result.message !== 'string' ? (
                    <div className="w-64 p-3 bg-blue-200">
                      {result.message.map((result2, index2) => (
                        <div key={index2}>{result2}</div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center ">
                      <p className="bg-gray-100 w-64 p-3">{result.message}</p>
                      <div
                        onClick={() => pathRouting(event, result.type)}
                        className="group p-3 ml-5 cursor-pointer bg-gray-300 whitespace-nowrap rounded-xl hover:brightness-110 hover:shadow-lg "
                      >
                        {result.type === '도보' ? (
                          <div className="group-hover:underline">지도</div>
                        ) : (
                          <div className="group-hover:underline">경로</div>
                        )}
                      </div>
                    </div>
                  )}
                </p>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="m-5 bg-gray-200 p-3 flex space-x-2">
        <MapPinIcon className="h-5" />
        <p>목적지 이름</p>
      </div>
    </div>
  )
}
