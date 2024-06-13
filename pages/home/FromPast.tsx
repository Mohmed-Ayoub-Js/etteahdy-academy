import React from 'react'

const FromPast = () => {
  const data = [
    "./three.jpg",
    "./five.jpg",
    "./four.jpg",
    "./three.jpg",
  ];
  return (
    <div id='img' className=' flex justify-center items-center flex-col p-5'>
        <h4 className=' text-4xl font-extrabold'>
           بعض صور المؤسسة
        </h4>
        <div className='md:grid md:grid-cols-4 md:gap-7 mt-5 flex justify-center items-center flex-col gap-3'>
         {data.map((item : any , index : any) => (
            <div key={index}> 
                	<div className="group overflow-hidden bg-neutral-50 rounded-xl bg-gradient-to-tr from-cyan-800 via-cyan-700 to-cyan-500 text-gray-50" style={{ 
  backgroundImage: `url("${item}")`,
  backgroundSize: "cover",
  backgroundPosition: "center"
}}>
		<div className="before:duration-700 before:absolute before:w-28 before:h-28 before:bg-transparent before:blur-none before:border-8 before:opacity-50 before:rounded-full before:-left-4 before:-top-12 w-64 h-48  flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur">
			<div className="text p-3 flex flex-col justify-evenly h-full">
				<span className="font-bold text-2xl"></span>
				<p className="subtitle"></p>
			</div>
		</div>
	</div>
            </div>
         ))}
        </div>
    </div>
  )
}

export default FromPast