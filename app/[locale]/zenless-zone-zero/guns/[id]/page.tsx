import React from 'react'

export default function page({params}:{params:{id:string}}) {
  return (
    <div>
      <div>my guns {params.id}</div>
    </div>
  )
}
