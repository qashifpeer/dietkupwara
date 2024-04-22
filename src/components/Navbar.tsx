import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-slate-900 text-slate-100">
      <nav className="px-4 relative bg-slate-900 text-slate-100 flex justify-between items-center h-16 max-w-6xl mx-auto z-30 shadow-xl transition-all duration-500">
      <Link href="/">
        <div className="flex items-end">
         
          {/* <Image
            src="/Images/logo-white.png"
            alt="forests"
            width={30}
            height={30}
            className="md:w-12  md:h-12"
          /> */}

          <h2 className="text-2xl font-bold leading-tight md:pb-1  ">
            DIET<span className="text-primary text-sky-500">Kupwara</span>
          </h2>
        </div>
        </Link>
        
       
          {/* <div
            className={`${toggle ? "left-0 " : "-left-full"} max-lg:bg-slate-900 flex flex-col justify-start items-center py-16 absolute w-full h-screen top-12 lg:static lg:flex-row lg:py-0 lg:justify-end lg:space-x-8 lg:px-8`}
          >
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                onClick={handleClick}
                className=" flex my-4 font-bold text-lg relative group transition-all duration-500  hover:translate-x-1"
              >
                {link.title}
                <span className="absolute inline-block h-[3px] w-0 bg-primary -bottom-2 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
            
          </div> */}
          <div className='flex gap-4 text-base md:text-lg font-semibold'>
            <Link href="/">Home</Link>
            <Link href="/">Results</Link>
          </div>
          
        
        
      </nav>
    </header>
  )
}

export default Navbar