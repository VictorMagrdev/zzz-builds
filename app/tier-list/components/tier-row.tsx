import React from 'react'

export default function TierRow({ title }: { title: string }) {
  return (
    <div className="grid grid-flow-col grid-cols-2 gap-8">
      <div className='place-items-start '>
        <div className='w-[50px] h-[75px] skew-y-12 bg-red-600 place-self-center'>{title}</div>
      </div>
      <div className='border-y-indigo-100 w-96'></div>
    </div>
  )
}
