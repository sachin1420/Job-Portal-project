import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function JobDescription() {
  const isApplied = false;
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='flex item-center justify-between'>
      <div>
      <h1 className='font-bold text-xl'>Frontend Developer</h1>
      <div className='flex items-center gap-2 mt-4'>
        <Badge className={'text-red-700 font-bold'} variant='ghost'>12 Positions</Badge>
        <Badge className={'text-[#1A73E5] font-bold'} variant='ghost'>Full Time</Badge>
        <Badge className={'text-[#E38A08] font-bold'} variant='ghost'>6 LPA</Badge>

      </div>
      </div>
      <Button>{ isApplied ? 'Already Applied.' : 'Apply Now'}</Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'> Role : <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'> Location : <span className='pl-4 font-normal text-gray-800'>Mumbai, India</span></h1>
        <h1 className='font-bold my-1'> Description : <span className='pl-4 font-normal text-gray-800'>Job Description: Front End Developer**


We are a leading tech company specializing in innovative software solutions. We are seeking a skilled Front End Developer to join our team in Mumbai. In this role, you will be responsible for building and maintaining high-quality web applications that ensure a seamless user experience. You will collaborate closely with designers and backend developers, optimize applications for speed and scalability, and write clean, maintainable code. Conducting code reviews will also be a part of your responsibilities.

The ideal candidate will have a Bachelor's degree in Computer Science or a related field, along with experience in HTML, CSS, JavaScript, and frameworks like React, Angular, or Vue.js. A solid understanding of web standards and responsive design is essential, as is proficiency with Git and CSS preprocessors like SASS or LESS. Preferred qualifications include experience with build tools like Webpack, knowledge of TypeScript and RESTful APIs, and familiarity with design tools such as Adobe Photoshop.
</span></h1>
<h1 className='font-bold my-1'> experiance : <span className='pl-4 font-normal text-gray-800'>1 yrs</span></h1>
<h1 className='font-bold my-1'> Salary : <span className='pl-4 font-normal text-gray-800'>6 Lpa </span></h1>
<h1 className='font-bold my-1'> Posted Date: <span className='pl-4 font-normal text-gray-800'>01-08-2024</span></h1>


      </div>
    </div>
  )
}

export default JobDescription