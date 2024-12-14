import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { Chart } from 'react-google-charts'
import Jobinfocard from "../components/shared/Jobinfocard";
import { JobApplication } from '../types/types'
import { Select, Option, Button } from "@material-tailwind/react";


const Dashboard = () => {
  const [applicationinfo, setapplicationinfo] = useState<JobApplication[]>([])
  const [statusCount, setstatusCount] = useState({
    Applied: 0,
    Interviewing: 0,
    Offered: 0,
    Rejected: 0
  })
  const [FilteringStatus, setFilteringStatus] = useState("")

  const setStatusInfo = (JobCollection: JobApplication[]) => {
    let applied = 0; let interviewing = 0; let offered = 0; let rejected = 0;
    JobCollection.forEach((job) => {
      if (job.status == "APPLIED") applied++;
      if (job.status == "INTERVIEW") interviewing++;
      if (job.status == "OFFERED") offered++;
      if (job.status == "REJECTED") rejected++;
    })
    setstatusCount({
      Applied: applied,
      Interviewing: interviewing,
      Offered: offered,
      Rejected: rejected
    })
  }
  const data = [
    ["Status", "Application per Status"],
    ["Applied", statusCount.Applied],
    ["Interviewed", statusCount.Interviewing],
    ["Offered", statusCount.Offered],
    ["Rejected", statusCount.Rejected],
  ];
  const options = {
    title: "Application per status",
    colors: ["#4536cf", "#f27a11", "#21b80d", "#f70202"],
  };

  useEffect(() => {
    const fetchJobsInfo = async () => {
      const result = await fetch('http://localhost:8000/job/alljobs', {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json'
        }
      })
      const data = await result.json();
      console.log(data.message);
      setapplicationinfo(data.message);
      setStatusInfo(data.message)
    }
    fetchJobsInfo();
  }, [])

  const HandleFilterBystatus = async (status: string) => {
    try {
      if(status === "") return;
      
      console.log(status)
    } catch (error) {
      console.log(error)
    }
  }

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
        <div>
          {applicationinfo.length == 0 ? (
            <div className="grid grid-cols-1  place-items-center h-56"> <Loader size={44} /></div>
          ) : (
            <article className="rounded-xl bg-white p-1 ring ring-indigo-50 sm:p-6 sm:px-0 lg:p-8">
              <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">
                {/* Info Section */}
                <div className="flex-1">
                  <strong
                    className="bg-teal-500 px-3 py-1.5 text-[15px] font-medium text-white rounded-lg"
                  >
                    Total Job Applicants : {applicationinfo.length}
                  </strong>

                  <h3 className="mt-4 text-lg font-medium sm:text-xl">
                    <p className="font-poppins">Applications as per status</p>
                  </h3>

                  <div className="mt-4 flex flex-col gap-2 text-center lg:mr-auto">
                    <p className="text-blue-600 font-bold text-xl font-poppins">Applied: {statusCount.Applied}</p>
                    <p className="text-orange-800 font-bold text-xl font-poppins">Interviewed: {statusCount.Interviewing}</p>
                    <p className="text-green-600 font-bold text-xl font-poppins">Offered: {statusCount.Offered}</p>
                    <p className="text-red-500 font-bold text-xl font-poppins">Rejected: {statusCount.Rejected}</p>
                  </div>
                </div>

                {/* Chart Section */}
                <div className="w-full md:w-auto md:ml-auto">
                  <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"300px"}
                  />
                </div>
              </div>
            </article>
          )}

        </div>
        <div className="container mx-auto py-10 px-4">
          <h2 className="py-4 font-bold text-base md:text-lg lg:text-xl text-center">Filter Job Applications</h2>
          <div className="grid grid-cols-3 gap-5 sm:gap-4 place-items-center">
            <div className="w-full sm:w-3/4 lg:w-72">
              <Select
                label="Filter by Status"
                placeholder={FilteringStatus === "" ? 'Select Status' : FilteringStatus}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                name="status"
                onChange={(value?: string) => {
                  if (value) setFilteringStatus(value)
                }}
              >
                <Option value="APPLIED">Applied</Option>
                <Option value="INTERVIEW">Interview</Option>
                <Option value="OFFERED">Offered</Option>
                <Option value="REJECTED">Rejected</Option>
              </Select>
            </div>
            <div className="w-full sm:w-auto text-center">
              <Button
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onClick={() => HandleFilterBystatus(FilteringStatus)}
              >
                Filter
              </Button>
            </div>
          </div>
        </div>




        <div className="py-10 px-7 sm:px-2 lg:px-14">
          <Jobinfocard applicationInfo={applicationinfo} />
        </div>

      </div>
    </>
  );
};

export default Dashboard;
