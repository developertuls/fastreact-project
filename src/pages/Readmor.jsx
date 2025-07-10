
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
// import { motion } from "motion/react";



export const Readmor = () => {

    // =====funtiongelary=======//
const [isopenp1,setIsopenp1]=useState(false);
const [isopenp2,setIsopenp2]=useState(false);
const [isopenp3,setIsopenp3]=useState(false);
const [isopenp4,setIsopenp4]=useState(false);
const [isopenp5,setIsopenp5]=useState(false);
const [isopenp6,setIsopenp6]=useState(false);
const [isopenp7,setIsopenp7]=useState(false);
const [isopenp8,setIsopenp8]=useState(false);
const [isopenp9,setIsopenp9]=useState(false);
const [isopenp10,setIsopenp10]=useState(false);




//==togolButton=1==//
const phidden1 = () => {
setIsopenp1(!isopenp1);
  };



  
//==togolButton=2==//
const phidden2 = () => {
setIsopenp2(!isopenp2);
  };


  
//==togolButton=3==//
const phidden3 = () => {
setIsopenp3(!isopenp3);
  };


//==togolButton=4==//
const phidden4 = () => {
setIsopenp4(!isopenp4);
  };


//==togolButton=5==//
const phidden5 = () => {
setIsopenp5(!isopenp5);
  };



//==togolButton=6==//
const phidden6 = () => {
setIsopenp6(!isopenp6);
  };


//==togolButton=7==//
const phidden7 = () => {
setIsopenp7(!isopenp7);
  };



//==togolButton=8==//
const phidden8 = () => {
setIsopenp8(!isopenp8);
  };


//==togolButton=9==//
const phidden9= () => {
setIsopenp9(!isopenp9);
  };


//==togolButton=10==//
const phidden10= () => {
setIsopenp10(!isopenp10);
  };




  

  return (
    <div className="bg-white mt-[80px] h-[800vh] ">
        <div className="grid md:grid-cols-2">

            {/* ======AlertBox=1==== */}
<div className=" relative flex ">

        {/* ImageAlertbox=1 */}
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">

        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
          />


    <h2 className="text-[16px] font-semibold ">
    Must-check documents before buying a car
    </h2> 


 {/*===alertBox togolmenuButtton=1=========*/}
<button 
onClick={phidden1} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp1 ? "rotate-180" : "rotate-0"}`}/>
</button>
</div>

<p

className={`absolute mt-[120px] w-full md:w-[90%] p-5  sm:w-[90%] rounded-full overflow-hidde  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp1 ? "block" : "hidden"}`}>

Ensure your documents are in order before you drive away. It could
save you from major headaches.

</p>

</div>


{/*======== AlertBox=2==== */}

<div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
    Avoid costly mistakes verify these documents first
    </h2>   

    {/*=====AlertBox togolmenuButtton=2=====*/}
<button 
onClick={phidden2} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp2 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp2 ? "block" : "hidden"}`}>

Missing or incorrect paperwork can cost you. Double-check before committing.

</p>



</div>


{/*======== AlertBox=3==== */}

<div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
    What to check before signing a car deal
    </h2>   

    {/*=====AlertBox togolmenuButtton=3=====*/}
<button 
onClick={phidden3} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp3 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp3 ? "block" : "hidden"}`}>
Review every line of the documents before you sign it’s smarter than fixing problems later.


</p>



</div>

{/*======== AlertBox=4==== */}

<div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
   Essential paperwork you need for car purchase
    </h2>   

    {/*=====AlertBox togolmenuButtton=4=====*/}
<button 
onClick={phidden4} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp4 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp4 ? "block" : "hidden"}`}>
From tax tokens to ownership papers know what must be included.


</p>



</div>
{/*======== AlertBox=5==== */}

<div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
   Don't skip these 5 documents when buying a car
    </h2>   

    {/*=====AlertBox togolmenuButtton=5=====*/}
<button 
onClick={phidden5} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp5 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp5 ? "block" : "hidden"}`}>
Skipping any of these can cost you big. Be safe, not sorry.


</p>



</div>

{/*======== AlertBox=6==== */}
 <div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
Buying a used car? Read this checklist
    </h2>   

    {/*=====AlertBox togolmenuButtton=6=====*/}
<button 
onClick={phidden6} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp6 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp6 ? "block" : "hidden"}`}>
Used cars need extra attention. Here’s what you should verify.




</p>



</div>      
{/*======== AlertBox=7==== */}
 <div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
Be smart check these before the test drive
    </h2>   

    {/*=====AlertBox togolmenuButtton=7=====*/}
<button 
onClick={phidden7} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp7 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp7 ? "block" : "hidden"}`}>
It’s not just about performance. Legal papers matter too.


</p>



</div> 


{/*======== AlertBox=8==== */}

<div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
Vehicle ownership papers you must verify
    </h2>   

    {/*=====AlertBox togolmenuButtton=8=====*/}
<button 
onClick={phidden8} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp8 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp8 ? "block" : "hidden"}`}>
Confirm ownership to avoid future disputes or legal issues.


</p>



</div> 

{/*======== AlertBox=9==== */}
<div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
Road tax, registration, and more stay informed
    </h2>   

    {/*=====AlertBox togolmenuButtton=9=====*/}
<button 
onClick={phidden9} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp9 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp9 ? "block" : "hidden"}`}>
 Make sure all dues are paid and records are valid.


</p>



</div> 

{/*======== AlertBox=10==== */}
<div className="flex relative">

       
<div className=" border-2 p-9  mt-[9px] flex  items-center md:gap-2 rounded-lg">
        <img
          className="hidden w-[10%] rounded-full md:block sm:block"
          src="src/assets/do.png"
          alt="Car Document"
        />

    <h2 className="text-[16px] font-semibold ">
How to avoid legal trouble while buying a car
    </h2>   

    {/*=====AlertBox togolmenuButtton=10=====*/}
<button 
onClick={phidden10} className="flex-shrink-0">
<IoIosArrowUp
className={`ml-[-8]  w-4 h-4 transform transition-transform duration-300 ${isopenp10 ? "rotate-180" : "rotate-0"}`}/>
</button> 

</div>

<p

className={`ml-[39px] absolute mt-[120px]  w-full md:w-[90%] sm:w-[90%] p-5 rounded-full overflow-hidden  bg-[#f0f2f1] text-[12px] font-semibold  transition-all duration-300 ${isopenp10 ? "block" : "hidden"}`}>
Legal issues often start with missing documents. Check first.


</p>



</div> 

       
  </div>
    </div>
  );
};
