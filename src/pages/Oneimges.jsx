import { Link } from "react-router-dom";


import { GiLaptop } from "react-icons/gi";



export const Oneimges = () => {
  return (
    
    <div className="bgonimges">
 <div className="text-[] min-h-screen  flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 py-8">      
      <div className="md:container md:flex md:mx-auto items-center justify-center">
      {/* Text Side */}
      <div className=" w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className=" textside text-[17px] md:text-3xl font-semibold  leading-relaxed mt-9 sm:mt-0 md:mt-0">
          
          Start enjoying life drive the car you deserve.
        </h2>
        <p className="text-[12px] mt-4">We offer you the finest luxury cars at the right price.</p>
    
 <Link to={'/shop'}><button className="mt-4  px-3 py-1 text-[12px] hover:bg-slate-300  font-semibold border rounded-full">Get started</button></Link>



 

      </div>

      {/*  Image Side */}
      <div className=" animate-pulse map w-full md:w-[40%] bg-[#6D214F]  rounded-lg p-6 relative h-[195px] flex items-center justify-center mt-3 md:mt-0">
        <span className="text-black px-1 py-1  rounded-sm bg-white font-medium absolute top-3 left-3 ">$3.9million</span>
        <img
          className="ml-[-45px]   imgside absolute bottom-[-39px] w-full max-h-[140px] object-contain"
          src="src/assets/car2.png"
          alt="Luxury Car"
        />
    
      </div>

      
      </div>



 
      </div>


  {/*== buy your car your way div== */}
 <div className="buy ">
 {/* <hr />    */}

     
<div className="px-4 md:px-10 py-10 buy">
 <h3 className="font-medium text-[25px] text-center ">buy your car your way</h3> 
<div className="mt-6  px-4 md:px-10 py-10 bg-[#f8f9fa] buy rounded-lg">
  

  <div className="flex flex-col lg:flex-row  items-center justify-between gap-6">

    {/* === Left Side: Two Paragraphs Side-by-Side === */}
    <div className="flex flex-col sm:flex-row gap-6 flex-1 ">
      
      {/* First P */}
      <div className="  flex items-start gap-3 buyp text-[#fff] p-4 rounded shadow-sm flex-1">
         <img className="bg-[#22a6b3] rounded-full w-10 h-10 mt-1 shrink-0" src="src/assets/ss.png" alt="online" /> 
       
        <p className="text-[14px]  leading-relaxed ">
          Explore and pick your dream car from our online collection.
        </p>
      </div>

      {/* Second P */}
      <div className="flex items-start gap-3 buyp p-4 rounded shadow-sm flex-1">
        <img className="rounded-full w-10 h-10 mt-1 shrink-0 bg-[#22a6b3]" src="src/assets/deli.png " alt="email" />
        <p className="text-[14px] leading-relaxed">
          After you select your desired car, our representative will get in touch with you via email.
        </p>
       
      </div>
    </div>

    {/* === Right Side: Image === */}
   <div className="md:flex justify-between items-center gap-x-9 relative mt-10">
    
<Link
  to={'/shop'}
  className="w-full md:w-auto flex justify-center md:justify-start"
>
  <button className="block animate-pulse  py-1  px-3 text-[12px] hover:bg-slate-300 font-semibold border rounded-full">
    Get started 
  </button>
</Link>



{/* formcar */}
 <div className="buy  p-5 mx-auto rounded-lg shadow-md">
      
       
     
        <span className="text-base font-normal text-[#fff]">Kindly provide your email address below.</span>
    

      <form className="mt-3">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="email.com"
          className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC312]"
        />

        <button
          type="submit"
          className="mt-4 w-full bg-[#1B1464] text-white py-2 rounded hover:bg-[#9895bf] transition"
        >
          Submit
        </button>
      </form>
    </div>








     <img
        className=" w-full max-w-[180px] "
        src="src/assets/de.png"
        alt="decorative car"
      />

   </div>
     
   
  </div>
</div>

  
</div>

    
 
</div>
    </div>
  );
};
