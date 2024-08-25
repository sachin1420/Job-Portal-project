import { Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <div className='text-center bg-gradient-to-r from-blue-500 to-purple-600 py-20'>
      <div className='flex flex-col gap-8 my-10 items-center'>
        <h1 className='text-5xl font-bold text-white'>
          Search, Apply & <br />
          Get Your <span className='text-[#EE5634]'>Dream Job</span>
        </h1>

        <div className='flex w-[60%] max-w-lg shadow-lg border border-gray-200 pl-3 pr-1 rounded-full items-center gap-4 mx-auto bg-white'>
          <input
            type='text'
            placeholder='Find job here...'
            className='outline-none border-none w-full py-3 px-4 rounded-full'
          />
          <Button className='rounded-full p-2 bg-[#EE5634] text-white'>
            <Search className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection