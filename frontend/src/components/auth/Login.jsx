import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import axios from 'axios';
import { USER_APIEND_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

function Login() {
  const [input, setInput] = useState({
    email:"",
    password:"",
    role:"",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) =>{
    setInput({...input, [e.target.name]:e.target.value});
  }
  const submitHandler = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post(`${USER_APIEND_POINT}/login`,input,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true,
      });
      if(res.data.success){
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        
        console.log(error.request);
      } else {
        
        console.log('Error', error.message);
      }
      toast.error('An error occurred while login.');
    }
    
    
  
  
  }
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Log In</h1>
          
          <div className='my-2'>
            <Label>Email</Label>
            <Input
              type='email'
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder='Enter your email'
              className='border border-gray-300 rounded-md p-2 w-full'
            />
          </div>
          
          <div className='my-2'>
            <Label>Password</Label>
            <Input
              type='password'
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder='Password'
              className='border border-gray-300 rounded-md p-2 w-full'
            />
          </div>
          <div className='my-2'>
            <Label>Role</Label>
            <div className='flex items-center justify-between my-5'>
            <RadioGroup className="flex items-center gap-4">
      <div className="flex items-center space-x-2">
        
        <Input
        type='radio'
        name='role'
        value='student'
        checked={input.role=== 'student'}
        onChange={changeEventHandler}
        className='cursor-pointer'
        />
        <Label htmlFor="r1">Student</Label>
      </div>
      <div className="flex items-center space-x-2">
        
        <Input
        type='radio'
        name='role'
        value='recruiter'
        checked={input.role=== 'recruiter'}
        onChange={changeEventHandler}
        className='cursor-pointer'
        />
        <Label htmlFor="r2">Recruter</Label>
      </div>
    </RadioGroup>

            </div>
          </div>
          <Button
            type='submit'
            className='w-full my-4'
          >
            Login
          </Button>
          <span className='text-small'>Don't have ab account? <Link to="/signup" className='text-blue-600'>Sign</Link></span>
          <div className='text-center mt-4'>
            <Link to="/ForgotPassword" className='text-blue-500'>
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;