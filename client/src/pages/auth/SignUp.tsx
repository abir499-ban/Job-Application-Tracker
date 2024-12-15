import { useContext, useState } from "react"
import {Radio} from '@material-tailwind/react'
import AuthContext from "../../context/authcontext"
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const {registerUser} = useContext(AuthContext);
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();

  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "Nan",
    role: "User"
  })
  



  const HandleSubmit = async(e:React.MouseEvent<HTMLButtonElement>) =>{
    setloading(true)
    e.preventDefault();
    try {
      registerUser(user)
    } catch (error) {
      console.log(error)
    }finally{
      setloading(false)
    }
    navigate('/login')
  }
  return (
    <>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="max-w-xl lg:max-w-3xl">


              <h1 className="mt-6 text-2xl font-poppins font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Job Application Tracker
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
              Easily sign up by providing your email, creating a password, and filling out your profile to start tracking your job applications effortlessly.
              </p>

              <form className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={user.name}
                    onChange={(e) => setuser((prev) => ({
                      ...prev,
                      name: e.target.value
                    }))}
                  />
                </div>



                <div className="col-span-6">
                  <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={user.email}
                    onChange={(e) => setuser((prev) => ({
                      ...prev,
                      email: e.target.value
                    }))}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value={user.password}
                    onChange={(e) => setuser((prev) => ({
                      ...prev,
                      password: e.target.value
                    }))}
                  />
                </div>

                {/* <div className="col-span-6 sm:col-span-3">
                <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div> */}

                <div className="col-span-6">
                  <Radio name="Gender" label="Male" 
                  value="Male"
                  onPointerEnterCapture={undefined} 
                  onPointerLeaveCapture={undefined} 
                  crossOrigin={undefined} 
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setuser((prev)=>({
                    ...prev,
                    gender:e.target.value
                  }))}/>
                  <Radio name="Gender" label="Female" 
                  value="Female"
                  defaultChecked 
                  onPointerEnterCapture={undefined} 
                  onPointerLeaveCapture={undefined} 
                  crossOrigin={undefined} 
                  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setuser((prev)=>({
                    ...prev,
                    gender:e.target.value
                  }))}
                  />
                </div>



                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                  type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                   onClick={HandleSubmit}
                  >
                    {!loading ? 'Create an Accunt' : (
                      <Loader/>
                    )}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link to="/login" className="text-gray-700 underline">Log in</Link>.
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  )
}

export default SignUp