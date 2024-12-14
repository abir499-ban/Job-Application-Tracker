import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import { JobApplication } from '../types/types'
const Editjob = () => {
    const [searchParams] = useSearchParams();
    const [JobDetails, setJobDetails] = useState<JobApplication>({
        _id: "",
        companyName: "",
        createdAt: "",
        dateApplied: "",
        jobTitle: "",
        notes: "",
        status: "APPLIED",
        updatedAt: "",
        __v: 0,
    })

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const id = searchParams.get('id');
                const result = await fetch(`http://localhost:8000/job/${id}`)
                const data = await result.json();
                console.log(data.message)
                setJobDetails(data.message)
            } catch (error) {
                console.log(error)
            }
        }
        fetchJob();
    }, [])


    const handleEditJob = async(jobId : string) => {
        try {
            const result = await fetch(`http://localhost:8000/job/${jobId}`, {
                method:'PATCH',
                headers:{
                    'Content-Type' : 'Application/json',
                },
                body: JSON.stringify(JobDetails)
            })
            const data = await result.json();
            console.log(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">View and Edit Job Application</h1>
                </div>

                <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label htmlFor="jobTitle" className="font-poppins font-light">Job Title</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Job Title"
                                value={JobDetails.jobTitle}
                                onChange={(e) => setJobDetails((prev) => ({
                                    ...prev,
                                    jobTitle: e.target.value
                                }))}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="font-poppins font-light">Company Name</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Company Name"
                                value={JobDetails.companyName}
                                onChange={(e) => setJobDetails((prev) => ({
                                    ...prev,
                                    companyName: e.target.value
                                }))}
                            />


                        </div>
                    </div>

                    <div>
                        <label htmlFor="status" className="font-poppins font-light">Status</label>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <div className="relative">
                                <select

                                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                                    value={JobDetails.status}
                                    onChange={(e) => setJobDetails((prev) => ({
                                        ...prev,
                                        status: e.target.value as ("APPLIED" | "INTERVIEW" | "OFFERED" | "REJECTED"),
                                    }))}>
                                    <option value="Applied" >Applied</option>
                                    <option value="INTERVIEW">Interview</option>
                                    <option value="OFFERED">Offered</option>
                                    <option value="REJECTED">Rejected</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="notes" className="font-poppins font-light">Notes</label>

                        <div className="relative">
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter notes"
                                value={JobDetails.notes}
                                onChange={(e) => setJobDetails((prev) => ({
                                    ...prev,
                                    notes: e.target.value
                                }))}
                            />


                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
                            onClick={(e)=>{
                                e.preventDefault()
                                handleEditJob(JobDetails._id)
                            }}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Editjob