import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";

export const Register = () => {
  return (


<div className="flex items-center justify-center h-[170vh] px-4 bg-blue-300">
<div  className="mb-6 mt-5  bg-white  flex flex-col  p-8  max-w-lg ">
  <h2 className="text-green-500 text-center text-lg font-bold mb-5 ">Register</h2>
  <form className="space-y-3">
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5 focus:outline-none focus:ring-2 focus:ring-green-500" type="text "  placeholder="Full name" />
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5 focus:outline-none focus:ring-2 focus:ring-green-500" type="email "  placeholder="Email" />
  
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5  focus:ring-2 focus:ring-green-500 focus:outline-none " type="password"  placeholder="password"/>
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5  focus:ring-2 focus:ring-green-500 focus:outline-none " type="password"  placeholder="Confirm Password"/>


<div className="flex  items-center justify-between">
<p>
  <input type="checkbox" 
  name=""
   id="checkbox"
    />
    <label htmlFor="checkbox" className="text-sm">Accept terms <Link className="text-green-600 cursor-pointer">conditions</Link> </label>
</p>

  <p className="text-sm text-right hover:text-green-400 cursor-pointer hover:underline">
  For gotPasswrd
</p>
</div>



    <button className=" cursor-pointer transition w-full  hover:bg-green-500 bg-green-600  py-1 rounded-sm text-white" type="submit">Register</button>


  </form>

  {/* ==divider======== */}
  <div className="flex  items-center my-6">
    <div className="flex-grow h-px bg-gray-500 mt-2"></div>
    <span className="mx-2 text-gray-500 text-sm">OR</span>
    <div className="flex-grow h-px bg-gray-500 mt-2"></div>
  </div>

<div className="flex flex-col space-y-3 mt-6 text-white">
<button className= "flex items-center justify-center    hover:bg-red-600 bg-red-500 py-1 px-2 rounded-sm cursor-pointer">Register with google<FcGoogle className="bg-white rounded-lg ml-1"/>

</button>
<button className="flex items-center justify-center    hover:bg-slate-900 bg-gray-700 py-1 px-2 rounded-sm cursor-pointer">
Register with GitHub<IoLogoGithub  className=" rounded-lg ml-1"/>
 </button>
</div>

<div className=" text-center mt-5 text-sm">
  <p>
    Already have an account?<Link to={'/logi'} className="hover:underline 
     text-green-600 font-semibold">Login now</Link>
    </p>
</div>








</div>
</div>


  )
}
