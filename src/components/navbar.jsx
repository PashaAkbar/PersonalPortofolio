import React from 'react'
import { Link } from 'react-scroll'


const Navbar = () => {
    const links = [
        {
            id : 1,
            link : 'home'
        },
        {
            id : 2,
            link : 'portofolio'
        },
        {
            id : 3,
            link : 'service'
        },
        {
            id : 4,
            link : 'about me'
        },
        {
            id : 5,
            link : 'contact me'
        },        
    ]
  return (
    <div className='flex justify-between items-center w-full h-14 px-4 bg-gray-100'>
        <div className='pl-8'>
            <h1 className='text-slate-900'>Pasha.dev</h1>
        </div>
        <ul className='hidden text-gray-200 md:flex'>
            {links.map(({id,link})=>(
                <li key={id} className='px-4 cursor-pointer capitalize text-slate-700 hover:scale-105 duration-200 hover:text-slate-900'>
                    <Link to={link} smooth duration={400}>{link}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar