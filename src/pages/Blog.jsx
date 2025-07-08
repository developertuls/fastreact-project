


export const Blog = () => {
  return (
    <div>
<div className= "mt-[80px] bg-white  rounded-md overflow-hidden">
  <img  src="src/assets/map4.webp" alt="Blog" className="mx-auto mt-9 w-[50%] h-40 object-cover items-center" />
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-2">
      Top 5 luxury cars under 30 lakh in BD
    </h2>
    <p className="text-gray-600 text-sm">
      Looking to buy a premium car without breaking the bank? Here are our top picks...
    </p>
    <button className="mt-3 text-blue-600 hover:underline text-sm">Read more</button>
  </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* এখানে একাধিক blog card paste করুন */}
</div>





<div className="px-4 md:px-10 py-8 bg-[#f4f5f7] min-h-screen">
  <h1 className="text-3xl font-bold text-center mb-8 text-[#1f2635]">
    Latest Car Blogs
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src="src/assets/car2.png" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          গাড়ি কিনতে গেলে কোন কাগজপত্র চেক করবেন?
        </h2>
        <p className="text-gray-600 text-sm">
          গাড়ি কেনার সময় ভুল না করে আপনি কী কী কাগজপত্র অবশ্যই দেখে নিবেন তা জেনে নিন...
        </p>
        <button className="mt-3 text-blue-600 hover:underline text-sm">Read more</button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src="src/assets/blog2.jpg" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          Top 5 luxury cars under 30 lakh in BD
        </h2>
        <p className="text-gray-600 text-sm">
          Looking to buy a premium car without breaking the bank? Here are our top picks...
        </p>
        <button className="mt-3 text-blue-600 hover:underline text-sm">Read more</button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <img src="src/assets/" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          গাড়ির রক্ষণাবেক্ষণের জন্য ৫টি সেরা টিপস
        </h2>
        <p className="text-gray-600 text-sm">
          আপনার গাড়ি যেন সবসময় নতুনের মতো চলে তার জন্য কিছু গুরুত্বপূর্ণ টিপস...
        </p>
        <button className="mt-3 text-blue-600 hover:underline text-sm">Read more</button>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
