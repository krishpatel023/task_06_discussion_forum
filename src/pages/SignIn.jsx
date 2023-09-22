import React from "react";


export default function SignIn() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[25rem] h-[28rem] border-2 border-black rounded flex flex-col items-center">
        <h1 className="font-bold text-3xl mt-8 mb-4">SignIn</h1>
        <div className="w-[20rem] mt-12 mb-8">
          <div className="w-full h-full">
            <form>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-hover focus:outline-none focus:ring-0 focus:border-accent-color peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-color peer-focus:dark:text-accent-hover peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="repeat_password"
                  id="floating_repeat_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-accent-hover focus:outline-none focus:ring-0 focus:border-accent-color peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent-color peer-focus:dark:text-accent-hover peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
              
              <button
                type="submit"
                className="text-white bg-accent-color hover:bg-accent-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-accent-color dark:hover:bg-accent-color dark:focus:ring-accent-hover"
              >
                Submit
              </button>
            </form>
            <span className="flex gap-2">
              <h1>Don't Have An Account?</h1>
              <button className="text-accent-color">SignUp</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
