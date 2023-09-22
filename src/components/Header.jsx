export default function Header() {
  return (
    <div className='w-full h-16 flex justify-between items-center'>
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
            <button className="w-40 h-10 bg-accent-color hover:bg-accent-hover text-accent-complementary rounded-md">
                <h1>Ask A Question</h1>
            </button>

            <button className="w-40 h-10 hover:bg-[#B7C5CC] bg-[#E0E5F5] rounded-md">
                <h1>Login</h1>
            </button>            
        </div>


    </div>
  )
}
