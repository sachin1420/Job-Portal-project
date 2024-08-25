import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = ({job}) => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white boder boder-gray-100 cursor-pointer'>
      <div>
      <h1 className='fornt-medium text-lg'>Compony Name</h1>
      <p className='text-sm text-gray-500'>India</p>
      </div>
      <div>
        <h1 className='font-bold text-lg- my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde. Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='flex item-center gap-2 mt-4'>
        <Badge className={'text-red-700 font-bold'} variant='ghost'>12 Positions</Badge>
        <Badge className={'text-[#1A73E5] font-bold'} variant='ghost'>Part Time</Badge>
        <Badge className={'text-[#E38A08] font-bold'} variant='ghost'>6 LPA</Badge>

      </div>
    </div>
  )
}

export default LatestJobCards