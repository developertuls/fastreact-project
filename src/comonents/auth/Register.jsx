import { Link} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import {createUserWithEmailAndPassword , GoogleAuthProvider,getAuth,signInWithPopup ,signOut, FacebookAuthProvider ,updateProfile } from "firebase/auth";
import { app } from "../../firebase/Firebase.config";
import { GithubAuthProvider } from "firebase/auth";
import { motion } from "motion/react";


  


export const Register = () => {

//==============funtiongelary=========//
const [user,setUser]=useState('')
const [passshow,setPassshow]=useState(false)
const [Confrimpassshow,setConfrimpassshow]=useState(false)



const heandeleRegister=(e)=>{
  e.preventDefault()
  const name= e.target.UserName.value;
  const password= e.target.password.value;
  const email= e.target.email.value;
  const confrimPassword=e.target.confirmPassword.value;
   

  const auth= getAuth(app)
  createUserWithEmailAndPassword(auth, email, password)
  .then(result=>{
  const user=result.user;
   updateProfile(user,{
    displayName:name
   })

   .then(()=>{
    setUser(user);
   })
   .catch(error=>{
    console.log(error)
   })
 
   
   
  

 


})

}




const signOutbtn=()=>{
const auth=getAuth()
signOut(auth)
.then(result=>{

setUser(null);

})
.catch(error=>{
  console.log(error)
})
}



const resgisterGoogleBtn=()=>{
const provider = new GoogleAuthProvider();
const auth=getAuth()
signInWithPopup(auth,provider)
.then(result=>{
  console.log(result.user)
})


}



const githubBtn=()=>{
const provider = new GithubAuthProvider();
const auth = getAuth()
signInWithPopup(auth, provider)
.then(result=>{
console.log(result.user)
}).catch(error=>{
  console.log(error)
})



}


const RegisteFaceboolBtn=()=>{
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then(result=>{
console.log(result.user)

  }).catch(error=>{
    console.log(error)
  })
}




  return (


<motion.div






className="flex items-center justify-center h-[205vh] px-4 bg-blue-300">
<motion.div 
animate={{opacity:1,scale:1}}
 initial={{opacity:0,scale:0.5}}
 transition={{duration:0.8,delay:0.28}}
 className="mb-6 mt-5  bg-white  flex flex-col  p-8  max-w-lg ">
<h2 className="text-green-500 text-center text-lg font-bold mb-5 ">Register</h2>
<motion.form  onSubmit={heandeleRegister}

className="space-y-3">

{/* ==========name========== */}
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5 
      focus:outline-none focus:ring-2 focus:ring-green-500" type="text " name="UserName" 
       placeholder="Full name" required/>

{/* ========================Email================== */}
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5 focus:outline-none focus:ring-2 focus:ring-green-500" type="email " name="email" placeholder="Email" required />
  

  {/* ====================onlypassword============== */}
  <div className="flex relative items-center">
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5  focus:ring-2 focus:ring-green-500 focus:outline-none " type={passshow ? 'text':'password'} name="password"  placeholder="password" required/>

   <LuEyeClosed onClick={()=>setPassshow(!passshow)} className="absolute right-3 text-gray-300 cursor-pointer hover:text-red-400"/> 

{
  passshow ? <VscEyeClosed onClick={()=>setPassshow(!passshow)}  className="absolute right-3 text-gray-300 cursor-pointer hover:text-red-400"/>:  <LuEyeClosed onClick={()=>setPassshow(!passshow)} className="absolute right-3 text-gray-300 cursor-pointer hover:text-red-400"/> 
}

</div>


    {/* =========onlyCfirmPasswrd====== */}
     <div className="flex relative items-center">
    <input className="w-full py-2 px-4 border rounded-sm  placeholder:px-5  
    focus:ring-2 focus:ring-green-500 focus:outline-none " type={Confrimpassshow?'text':'password'
    } placeholder="Confirm Password" name="confirmPassword" required/>

  <LuEyeClosed onClick={()=>setConfrimpassshow(!Confrimpassshow)} className="absolute right-3 text-gray-300 cursor-pointer hover:text-red-400"/> 

{
 Confrimpassshow ? <VscEyeClosed onClick={()=>setConfrimpassshow(!Confrimpassshow)}  className="absolute right-3 text-gray-300 cursor-pointer hover:text-red-400"/>:  <LuEyeClosed onClick={()=>setConfrimpassshow(!Confrimpassshow)} className="absolute right-3 text-gray-300 cursor-pointer hover:text-red-400"/> 
}




</div>



<div className="flex  items-center justify-between">
<p>
  <input type="checkbox" 
  name="box"
   id="checkbox"
   required
    />
    <label htmlFor="checkbox" className="text-sm">Accept terms<Link to={'/condition'} className="text-green-600 cursor-pointer">conditions</Link> </label>
</p>

  <p className="text-sm text-right hover:text-green-400 cursor-pointer hover:underline">
  For gotPasswrd
</p>
</div>



 <button className=" cursor-pointer transition w-full  hover:bg-green-500 bg-green-600  py-1 rounded-sm text-white" type="submit">Register</button>


  </motion.form>

  {/* ==divider======== */}
  <div className="flex  items-center my-6">
    <div className="flex-grow h-px bg-gray-500 mt-2"></div>
    <span className="mx-2 text-gray-500 text-sm">OR</span>
    <div className="flex-grow h-px bg-gray-500 mt-2"></div>
  </div>

<div className="flex flex-col space-y-3 mt-6 text-white">



  {/* ==================RegisterGoogleBtn=================== */}
{
user?<button onClick={signOutbtn} className= "flex items-center justify-center    hover:bg-red-600 bg-red-500 py-1 px-2 rounded-sm cursor-pointer">signOut</button>:<button onClick={resgisterGoogleBtn} className= "flex items-center justify-center    hover:bg-red-600 bg-red-500 py-1 px-2 rounded-sm cursor-pointer">Register with google<FcGoogle className="bg-white rounded-lg ml-1"/>
</button>
}

{/* =====================githbRegisterubBtn====================== */}
<motion.button 
  onClick={githubBtn} className="flex items-center justify-center    hover:bg-slate-900 bg-gray-700 py-1 px-2 rounded-sm cursor-pointer">
Register with GitHub<IoLogoGithub  className=" rounded-lg ml-1"/>
 </motion.button>

{/* =================FacebookRegisterBtn=============== */}
<button onClick={RegisteFaceboolBtn} className="flex items-center justify-center  hover:bg-slate-900 bg-gray-700 py-1 px-2 rounded-sm cursor-pointer">
Register with Facebook<FaFacebookSquare   className=" rounded-lg ml-1 bg-blue-600"/>
 </button>
</div>

<div className=" text-center mt-5 text-sm">
  <p>
    Already have an account?<Link to={'/logi'} 
   
    className="hover:underline 
     text-green-600 font-semibold">Login now</Link>
    </p>


</div>


{
  <div>
  <h1>userName:{user.displayName}</h1>
  <h1>userE-mail:{user.email}</h1>
</div>
}




</motion.div>
</motion.div>


  )
}
