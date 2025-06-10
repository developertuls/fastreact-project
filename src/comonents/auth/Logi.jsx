
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";




export const Logi = () => {

const register=()=>{
  console.log('op')
}






  return (
<div className="flex items-center justify-center  h-[190vh]   px-4 bg-green-900">
<div  className="bg-white  flex flex-col  p-8  max-w-sm ">
  <h2 className="text-green-500 text-center text-lg font-bold mb-5">Login</h2>
  <form className="space-y-3">
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5 focus:outline-none focus:ring-2 focus:ring-green-500" type="email "  placeholder="Email"  />
  
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5  focus:ring-2 focus:ring-green-500 focus:outline-none " type="password"  placeholder="password"/>

<p className="text-right hover:text-green-400 cursor-pointer hover:underline">
  For gotPasswrd
</p>


    <button className=" cursor-pointer transition w-full  hover:bg-green-500 bg-green-600  py-1 rounded-sm text-white" type="submit">Login</button>


  </form>

  {/* ==divider======== */}
  <div className="flex  items-center my-6">
    <div className="flex-grow h-px bg-gray-500 mt-2"></div>
    <span className="mx-2 text-gray-500 text-sm">OR</span>
    <div className="flex-grow h-px bg-gray-500 mt-2"></div>
  </div>

<div className="flex flex-col space-y-3 mt-6 text-white">
<button className= "flex items-center justify-center     hover:bg-red-600 bg-red-500 py-1 px-2 rounded-sm cursor-pointer">
  Login with google<FcGoogle className="bg-white rounded-lg ml-1"/>
  </button>
<button className="flex items-center justify-center  hover:bg-slate-900 bg-gray-700 py-1 px-2 rounded-sm cursor-pointer">
Login with GitHub<IoLogoGithub  className=" rounded-lg ml-1"/>
</button>
</div>














<div className=" text-center mt-5 text-sm">
  <p>
    Don't have an account?<Link to={'/register'}
    onClick={register}
     className="hover:underline 
   text-green-600 font-semibold">RegisterHere</Link>
</p>
</div>








</div>
</div>
  )
}
