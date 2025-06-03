


const Herosection = () => {
  return (
    <div  className='h-[80vh] flex flex-col justify-center text-white items-center px-5' style={{
        backgroundImage:"url('/src/assets/Best.jpg')",
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}>
<h1 className='text-4xl md:text-6xl text-red-500  font-medium'>welcome to my website</h1>
<p className='text-red-500 text-3xl md:4xl font-bold'>Your journey start Here</p>
<button className= 'transition font-medium hover:bg-[#ff3838] bg-red-800 mt-3  text-lg px-3 py-1 rounded-lg'>purchase product</button>
    </div>
  )
}

export default Herosection