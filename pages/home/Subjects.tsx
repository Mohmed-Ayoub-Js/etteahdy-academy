import React from 'react'

const Subjects = () => {
  const data  : any= [
    {
      title:'الذكاء الاصطناعي',
      image:"./AI.jpg",
      href:'/study/ai',
    },
    {
      title:'تعليم اللغات',
      image:"./language.jpg",
      href:'/study/ai',
    },
    {
      title:'دروس الدعم',
      image:"./support.jpg",
      href:'/study/ai',
    },
    {
      title:'السوروبان',
      image:"./sorobqn.jpg",
      href:'/study/ai',
    },
    {
      title:'القرآن الكريم',
      image:"./Quran.png",
      href:'/study/ai',
    },
    {
      title:'علم الفلك',
      image:"./falk.jpg",
      href:'/study/ai',
    },
  ];
  return (
    <div id='sub' className=' bg-green-800 h-full w-full p-5 flex justify-center items-center flex-col'>
        <p className=' text-4xl font-extrabold text-white'>
         المواد التعليمية
        </p>
        <div className='md:grid md:grid-cols-4 md:gap-7 mt-5 flex justify-center items-center flex-col gap-3'>
          {data.map((item : any , index : any) => (
            <div key={index}> 
<div
  className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-green-400"
>
  <div className="z-10 absolute w-full h-full peer"></div>
  <div
    className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-green-300 transition-all duration-500"
  ></div>
  <div
    className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-green-300 transition-all duration-500"
  >
    {item.title}
  </div>
  <div className="w-full h-full items-center justify-center flex uppercase" style={{ 
  backgroundImage: `url("${item.image}")`,
  backgroundSize: "cover",
  backgroundPosition: "center"
}}>
</div>

</div>
   
            </div>
          ))}
        </div>
    </div>
  )
}

export default Subjects