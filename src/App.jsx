import React, { Suspense } from 'react'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Tables from './Components/Table/Tables';
const SignUp=React.lazy(()=>import("./Pages/Signup/index"));
const App = () => {
  const LayOut=()=>{
    return(
      <div>
        {/* //ToastContainer */}
        <ToastContainer/>
        <h1>navbar</h1>
        <Outlet/>
        <h1>footer</h1>
      </div>
    )
  };
  const router=createBrowserRouter([
    {
      path:"/",
      element:<LayOut/>,
      children:[
        {path:"/",element:<Suspense >
          <SignUp/>
        </Suspense>},
        {
          path:"/life",
          element:<Tables/>
        }
     
      ]
    }
  ])
  return <>
  <RouterProvider router={router}/>
  </>
}


export default App