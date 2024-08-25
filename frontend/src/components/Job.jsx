import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'


function Job() {
  const navigate = useNavigate();
  const jobId = "safafafbafdsf";
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
      <p className='text-sm text-gray-400'>2  days ago</p>
      <Button variant='outline' className="rounded-full" size="icon"><Bookmark/></Button>
      </div>
      <div className='flex items-center gap-2 my-2'>

      
      <Button className='p-6' variant='outline' size='icon' >
        <Avatar>
          <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"/>
        </Avatar>
      </Button>
      <div>
        <h1 className='font-medium text-lg'>CodeArray Tech</h1>
        <p className='text-sm'>India</p>
      </div>
    </div>
    <div>
    <h1 className='font-bold text-lg my-2'>Software Engineer</h1>
    <p className='text-sm'>We are seeking a skilled Software Engineer to join our dynamic team in Mumbai. The ideal candidate will have strong proficiency in front-end technologies, experience in developing user-friendly web applications, and a passion for problem-solving and innovation. Join us to work on exciting projects and advance your career in a collaborative environment.</p>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-red-700 font-bold'} variant='ghost'>12 Positions</Badge>
        <Badge className={'text-[#1A73E5] font-bold'} variant='ghost'>Part Time</Badge>
        <Badge className={'text-[#E38A08] font-bold'} variant='ghost'>6 LPA</Badge>

      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline"> Details</Button>
        <Button className="bg-[#E55C2C]">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job