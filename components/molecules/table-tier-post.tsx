'use client'
// import { useEffect, useState } from "react"

// import { thisIsMyData } from 'myPlace'
import { bg_blue_60,bg_blue_10,bg_blue_30 } from "../tokens"
enum TierColums {
    SS = "S+",
    S = "S",
    A = "A",
    B = "B",
    C = "C",
  }

export default function TableTierPost() {

  // const [data, setData] = useState()
  // useEffect(() => {
  //   setTimeout(() => {
  //     setData(thisIsMyData)
  //   }, 2000);
  // }, [])

  return (
    <div className={`grid grid-col-1 gap-8 space-y-4 ${bg_blue_30} rounded-lg mx-auto max-h-lvh max-w-screen-lg my-auto`}>
      <div className='p-4'>
      <div className="grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-transparent ">
      <div className='place-items-start py-4'>
        <div className='w-[50px] h-[75px] skew-y-12 bg-red-600 place-self-center rounded-lg flex justify-center content-center items-center'>
        {TierColums.SS}
        </div>
      </div>
    </div>
      <div className="grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-transparent">
      <div className='place-items-start py-4'>
        <div className='w-[50px] h-[75px] skew-y-12 bg-orange-500 place-self-center rounded-lg flex justify-center content-center items-center'>
        {TierColums.S}
        </div>
      </div>
    </div>
    <div className="grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-transparent">
      <div className='place-items-start py-4'>
        <div className='w-[50px] h-[75px] skew-y-12 bg-orange-400 place-self-center rounded-lg flex justify-center content-center items-center'>
        {TierColums.A}
        </div>
      </div>
    </div>
    <div className="grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-transparent">
      <div className='place-items-start py-4'>
        <div className='w-[50px] h-[75px] skew-y-12 bg-yellow-400 place-self-center rounded-lg flex justify-center content-center items-center'>
        {TierColums.B}
        </div>
      </div>
    </div>
    <div className="grid grid-flow-col grid-cols-2 gap-8 border border-y-indigo-50 border-x-transparent">
      <div className='place-items-start py-4'>
        <div className='w-[50px] h-[75px] skew-y-12 bg-green-500 place-self-center rounded-lg flex justify-center content-center items-center'>
        {TierColums.C}
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
