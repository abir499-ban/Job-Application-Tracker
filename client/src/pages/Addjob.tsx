

const Addjob = () => {
    return (
        <>
            {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Create your Job Application Today!</h1>

                        <p className="mt-4 text-gray-500">
                        Take the first step in landing your dream job by crafting a compelling job application. 
                        </p>
                    </div>

                    <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                        <div>
                            <label htmlFor="jobTitle" className="sr-only">Job Title</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Job Title"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="companyName" className="sr-only">Company Name</label>

                            <div className="relative">
                                <input
                                    type="companyName"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Company Name"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="notes" className="sr-only">Notes</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter any Note you have for the job"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt=""
                        src="https://img.freepik.com/premium-photo/illustration-depicting-corporate-job_356871-15270.jpg?w=740"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section></>
    )
}

export default Addjob