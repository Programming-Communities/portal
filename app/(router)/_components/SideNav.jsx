import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function SideNav() {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icon: <BookOpen />,
        },
        {
            id: 2,
            name: 'Membership',
            icon: <BadgeIcon />,
        },
        {
            id: 3,
            name: 'Be Instructor',
            icon: <GraduationCap />,
        },
      
    ];

    return (
        <div className='p-5 bg-white
        shadow-sm border h-screen'>
            <Image src="/logo.jpg" alt="logo" width={150} height={30} />
            
            <hr className='mt-7'></hr>

            <div className='mt-5'>
                {menu.map((item) => (
                    <div className='group flex gap-3
                    mt-2 p-3 text-[20px] items-center
                    text-gray-500 cursor-pointer
                    hover:bg-primary
                     hover:text-white
                     rounded-md
                     transition-all ease-in-out duration-200
                    ' key={item.id}>
                      <div className='group-hover:animate-pulse'>  {item.icon}</div>
                      
                        <h2>{item.name}</h2>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
