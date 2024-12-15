import { useContext } from "react"
import AuthContext from "../../context/Authcontext"
import { User } from "lucide-react"
import { Button } from "@material-tailwind/react"

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <>

            <header className="bg-gray-900 dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm justify-center text-center">
                                    <li>
                                        <a
                                            className=" font-poppins text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className=" font-poppins text-white transition hover:text-yellow-500/75 dark:text-white dark:hover:text-white/75"
                                            href="/addjob"
                                        >
                                            Add a Job Application
                                        </a>
                                    </li>

                                    
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            {user != null ? (
                                <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
                                    href="\login"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                        href="/signup"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>
                            ) : (
                                <div className="flex flex-row gap-4 justify-evenly"><User size={48} color="#acecec" strokeWidth={1.25} />
                                <Button color="red" 
                                placeholder={undefined} 
                                onPointerEnterCapture={undefined} 
                                onPointerLeaveCapture={undefined}>Log out</Button></div>
                            )}

                            <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header