import DropDown from '@/components/organisms/drop-down'
import TableTierPost from '@/components/molecules/table-tier-post'
import { bg_blue_60,bg_blue_30,bg_blue_10 } from '@/components/tokens'
import { Metadata } from 'next'

export const metadata: Metadata= {
  title: 'Tier List Post',
  description: 'Tier List dashboard for create a post',
}

export default function Post() {
  return (
    <div className={`h-screen ${bg_blue_60}`}>
      <div className='flex justify-center' >
        <form action="" method="post">
        <input className={` placeholder:text-slate-500 block ${bg_blue_10} border py-2 pl-9 pr-3 rounded-lg size-8 my-8 w-96 mb-2 focus:outline-none sm:text-sm" placeholder="Name" type="text" name="name`} placeholder='Search...'/>
        </form>
      </div>
      
      <div className='space-y-4 flex'>
        <div className='flex-grow h-4/6'>
          <TableTierPost/>
        </div>
        <div className='flex w-auto place-self-center'>
          <DropDown />
        </div>
      </div>

      <div className='my-8 flex justify-center space-x-4'>
        <button className={`rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 ${bg_blue_10}`}>
          publish
        </button>
        <button className={`rounded-lg size-8 my-8 w-96 mb-2 text-sm font-medium text-gray-900 ${bg_blue_10}`}>
          cancel
        </button>
      </div>
    </div>
  )
}
