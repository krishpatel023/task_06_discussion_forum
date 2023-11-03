import { useState } from "react"
import { useNavigate } from "react-router"

export default function Header() {

    const [toggle, setToggle] =useState(false)
    const navigate = useNavigate()
  return (
    <>
    <div className='w-full h-16 flex justify-between items-center md:hidden'>
        <h1 className="text-2xl font-bold ml-4">DISCUSSION FORUM</h1>
        
        <div className="w-[45%]">
            <div className="group relative w-full">
                <input type="text" id="example9" className="h-10 bg-gray-100 block w-full rounded-md border-gray-300 px-10 shadow-sm transition-all hover:bg-gray-50 focus:hover:bg-gray-100 focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="Search" />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5">
                    <span className="rounded border px-1.5 text-sm text-gray-400 shadow-sm transition-all group-hover:border-primary-500 group-hover:text-primary-500"><kbd>⌘</kbd> <kbd>K</kbd></span>
                </div>
            </div>
        </div>

        <div className="flex gap-2 mr-4">
            <button className="w-20 h-10 hover:bg-[#B7C5CC] bg-[#E0E5F5] rounded-md"
                onClick={()=>navigate('/dashboard')}
            >
                <h1><i className="fa-solid fa-chart-line"></i></h1>
            </button>     
            <button className="w-40 h-10 bg-accent-color hover:bg-accent-hover text-white rounded-md"
                onClick={()=>navigate('/askquestion')}
            >
                <h1>Ask A Question</h1>
            </button>

            <button className="w-40 h-10 hover:bg-[#B7C5CC] bg-[#E0E5F5] rounded-md"
                onClick={()=>navigate('/signin')}
            >
                <h1>Login</h1>
            </button>            
        </div>
    </div>


    <div className='w-full h-16 justify-between items-center hidden md:flex'>

        <h1 className="text-2xl font-bold ml-4">DISCUSSION FORUM</h1>
        <div className="h-full w-[60%] flex flex-col items-end">
        <button onClick={()=>{setToggle(!toggle)}} className="mr-4 mt-4 w-10 h-10 text-white bg-accent-color hover:bg-accent-hover font-medium rounded-lg" type="button">
            {
                toggle?
                <i className="fa-solid fa-chevron-up"></i>
                :<i className="fa-solid fa-chevron-down"></i>
            }
        </button>
        {
            toggle && 
            <div className="z-10 bg-white divide-y divide-gray-300 rounded-lg shadow w-60 relative top-8 right-4">
                <div className="px-4 py-3 text-sm text-gray-900">
                <div className="relative">
                    <input type="search" id="default-search" className="h-10 block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search" required />
                    <button type="submit" className="h-8 text-white absolute right-2.5 bottom-[0.25rem] bg-accent-color hover:bg-accent-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                </div>
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownInformationButton">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Questions</a>
                </li>
                </ul>
                <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                </div>
            </div>        
        }
        </div>
    </div>
    </>
  )
}
