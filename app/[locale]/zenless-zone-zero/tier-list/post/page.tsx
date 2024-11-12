import TableTierPost from '@/components/molecules/table-tier-post'
import { bg_blue_60 } from '@/components/tokens'
import { Metadata } from 'next'

export const metadata: Metadata= {
  title: 'Tier List Post',
  description: 'Tier List dashboard for create a post',
}

export default function Post() {
  return (
    <div className={`h-screen ${bg_blue_60}`}>
     <TableTierPost/>
    </div>
  )
}
