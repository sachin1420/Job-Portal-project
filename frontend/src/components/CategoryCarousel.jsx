import React, { useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Button } from './ui/button'

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "Data Scientiest",
  "UI/UX Designer",
  "Full Stack Developer"



]
function CategoryCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Adjust this value as needed
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Adjust this value as needed
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='my-10 px-5 relative'>
      <h2 className='text-center text-3xl font-bold mb-5'>Explore Categories</h2>
      <div className='relative'>
        <Button
          onClick={scrollLeft}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-red-700 hover:bg-red-700'
          style={{ zIndex: 10 }}
        >
          &#9664;
        </Button>
        <Carousel className='w-full max-w-4xl mx-auto'>
          <CarouselContent
            ref={carouselRef}
            className='flex gap-4 overflow-x-auto py-5 px-2'
          >
            {category.map((cat, index) => (
              <CarouselItem key={index} className='flex-none'>
                <Button
                  variant='outline'
                  className='px-6 py-3 text-lg rounded-full border border-gray-300 bg-white hover:bg-red-400 transition-colors'
                >
                  {cat}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Button
          onClick={scrollRight}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-700 hover:bg-gray-300'
          style={{ zIndex: 10 }}
        >
          &#9654;
        </Button>
      </div>
    </div>
  )
}

export default CategoryCarousel