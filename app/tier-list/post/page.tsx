import React from 'react'
import TableTier from '../components/table-tier'
import DropDown from '../components/drop-down'

export default function Post() {
  return (
    <>
        <input id='name'  title='name' type='text'/>
        <TableTier/>
        <DropDown/>
    </>
  )
}
