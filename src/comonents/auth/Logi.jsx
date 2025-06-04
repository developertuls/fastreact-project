
import { Link } from "react-router-dom"

export const Logi = () => {
  return (
<div className="flex items-center justify-center h-[80vh] px-4">
<div  className="mb-6 mt-5    flex flex-col  p-8 bg-slate-800 max-w-sm ">
  <h2 className="text-green-500 text-center text-lg font-bold mb-5">Login</h2>
  <form className="space-y-3">
    <input className="w-full py-1 rounded-sm  placeholder:px-5  focus:bg-slate-500 focus:ring-2" type="email "  placeholder="Email" />
  
    <input className="w-full py-1 rounded-sm  placeholder:px-5 focus:bg-slate-500 focus:ring-2" type="password"  placeholder="password"/>
    <button className="cursor-pointer transition w-full hover:bg-green-500 bg-green-600 mt-2 py-1 rounded-sm text-white" type="submit">Login</button>


  </form>

<div className="flex flex-col space-y-3 mt-3">
<button className= "    hover:bg-red-600 bg-red-500 py-1 px-2 rounded-sm cursor-pointer">
  Login with google</button>
<button className=" hover:bg-slate-400 bg-gray-300 py-1 px-2 rounded-sm cursor-pointer">
Login with GitHub</button>
</div>

<div className="text-green-400 text-sm mt-1">
  <p>
    Don't have an account?
    <Link to={'/register'}> RegisterHere</
    Link>
    </p>
</div>








</div>
</div>
  )
}
