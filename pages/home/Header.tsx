import { Button } from '@/components/ui/button';
import { options } from '@/lib/options';
import { HomeIcon, User2Icon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react'

const Header = async () => {
  const data = [
    {
        title:'الرئيسية',
        route:'/',
        icon: <HomeIcon />,
    },
    {
      title:'عن الاكادمية',
      route:'#about',
      icon: <HomeIcon />,      
    },
    {
      title:'المواد التعليمية',
      route:'#sub',
      icon: <HomeIcon />,      
    },
    {
      title:'مميزات الاكادمية',
      route:'#fe',
      icon: <HomeIcon />,      
    },
    {
      title:'بعض الصور',
      route:'#img',
      icon: <HomeIcon />,      
    },
    {
      title:"تسجيل الدخول",
      route: "/login",
      icon: <HomeIcon />,      
    },
  ];
  return (
    <div className='p-2 flex justify-between items-center flex-row gap-5 '>
            <img src="./icon.png" alt="logo" width={70} height={70}/>
            <div className=' flex justify-center items-center flex-row gap-5'>
                {data.map((item : any , index : any) => (
                <Link href={item.route}>
                    <div key={index} className=' hover:scale-105 cursor-pointer hover:text-green-800' style={{transition:'0.5s'}}> 
                        {item.title}
                    </div>
                </Link>
                ))}
            </div>
            <Link href={"/login"}>
              
            <Button>
          تسجيل الدخول
            </Button></Link>
    </div>
  )
}

export default Header