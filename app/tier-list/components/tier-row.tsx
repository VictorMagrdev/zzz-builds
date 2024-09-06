import React from 'react'

export default function TierRow({ title }: { title: string }) {
  return (
    <div className="grid grid-flow-col grid-cols-2 gap-8">
      <div>{title}</div>
      <div className='border-y-indigo-100'></div>
    </div>
  )
}
