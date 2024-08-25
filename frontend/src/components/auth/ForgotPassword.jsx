import React from 'react'
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

// function forgotPassword() {
// }   

const ForgotPassword = () => {
  return (
    
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Forgot Password</h1>
          <div className='my-2'>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='border border-gray-300 rounded-md p-2 w-full'
            />
          </div>
          <Button type='submit' className='w-full my-4'>
            Send Reset Link
          </Button>
          <span className='text-small'>Remember your password? <Link to="/login" className='text-blue-600'>Log In</Link></span>
        </form>
      </div>
    );
  }
  

export default ForgotPassword