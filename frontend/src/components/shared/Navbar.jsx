import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { USER_APIEND_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import axios from 'axios'

function Navbar() {
  const {user} = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async() => {
    try {
      const res = await axios.get(`${USER_APIEND_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className='bg-white'>
      <div className='flex item-center justify-between mx-auto max-w-6xl h-16'>
      <div>
      <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
      </div>

      <div className='flex items-center gap-12'>
        <ul className='flex font-medium item-center gap-5'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/browse">Browse</Link></li>
        </ul>
        {
          !user ? (
            <div className='flex item-center gap-2'>
              <Link to="login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"><Button className='bg-[#F58A72] hover:bg-[#EE5634]'>Signup</Button></Link>
              </div>
          ):(
            <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              </Avatar>
           
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className='flex gap-5'>
              <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              </Avatar>
              <div>
                <h4 className='font-medium'>Sachin Jadhav</h4>
                <p className='text-sm text-muted-foreground'>Aspiring software Engineer.</p>
              </div>
              </div> 
              <div className='flex flex-col text-gray-600'>
                
                <div className='flex w-fit items-center gap-2 cursor-pointer'>
                  <LogOut></LogOut>
                <Button onClick={logoutHandler} variant="link" >Logout</Button>
                </div>
                </div> 
            </PopoverContent>
          </Popover>
          )
        }
        
      </div>
      </div>
    </div>
  )
}

export default Navbar