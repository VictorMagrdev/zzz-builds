import React from 'react'
import DropDown from '../../../../components/organisms/drop-down'
import TableTierPost from '../../../../components/molecules/table-tier-post'

export default function Post() {
  return (
    <div className='px-8'>
      <div className='flex flex-row '>
        <div className='space-y-4 basis-1/2'>
          <form action="" method="post">
          <input id='name' placeholder='name'  title='name' type='text' className='my-8 block mb-2 text-sm font-medium text-gray-900 dark:text-white'/>
          </form>
          <TableTierPost/>
        </div>
        <div className='self-center basis-1/4'>
        <DropDown />
        </div>
      </div>
      <div className='my-8'>
        <button className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>publish</button>
        <button className='text-white bg-gradient-to-br from-red-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'> cancel</button>
        </div>
    </div>
  )
}
