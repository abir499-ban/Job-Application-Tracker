import { useEffect, useState } from "react";

const Dashboard = () => {
  const [applicationinfo, setapplicationinfo] = useState({})

  useEffect(() => {
    const fetchJobsInfo = async () => {
      const result = await fetch('http://localhost:8000/job', {
        method: 'GET',
        headers:{
          'Content-Type' : 'Application/json'
        }
      })
      const data = await result.json();
    }
    fetchJobsInfo();
  }, [])

  return (
    <>
      <div className="py-14 px-9 sm:px-4 lg:px-10">
        <p className="text-sm text-teal-600 font-bold justify-center text-center">
          Job Tracking Application
        </p>
        <p className="font-poppins text-5xl font-semibold justify-center text-center py-6">
          Track and Organize your Job Search process
        </p>
        <p className="font-poppins font-light text-gray-600 text-xl justify-center text-center py-6">
          Tracking and organizing your job search process helps you stay on top of applications, interviews, and follow-ups by maintaining a structured record of every opportunity. It ensures no deadlines are missed, progress is monitored, and efforts are effectively prioritized for better results in landing your desired role.
        </p>

        <div className="items-center justify-center text-center py-20">
          
          <p className="text-center font-poppins text-3xl text-teal-600 font-semibold">Jobs Information</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
