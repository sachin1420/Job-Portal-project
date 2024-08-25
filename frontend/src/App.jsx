
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import JobDescription from './components/JobDescription'
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'jobs',
    element:<Jobs/>
  },
  {
    path:`/description/:id`,
    element:<JobDescription/>
  },
  {
    path:'browse',
    element:<Browse/>
  }
])
function App() {

  return (
    <div>
    <RouterProvider router={ appRouter}></RouterProvider>
    </div>
  )
}

export default App
