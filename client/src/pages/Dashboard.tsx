import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import { Card, Typography } from "@material-tailwind/react";



interface JobApplication {
  _id: string;
  companyName: string;
  createdAt: string;
  dateApplied: string;
  jobTitle: string;
  notes: string;
  status: "APPLIED" | "INTERVIEW" | "OFFERED" | "REJECTED";
  updatedAt: string;
  __v: number;
}

const Dashboard = () => {
  const [applicationinfo, setapplicationinfo] = useState<JobApplication[]>([])
  const [statusCount, setstatusCount] = useState({
    Applied: 0,
    Interviewing: 0,
    Offered: 0,
    Rejected: 0
  })

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
            <p><Loader /></p>
          ) : (
            <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
              <div className="flex items-start sm:gap-8">
                <div>
                  <strong
                    className="  bg-teal-500 px-3 py-1.5 text-[15px] font-medium text-white rounded-lg"
                  >
                    Total Job Applicants : {applicationinfo.length}
                  </strong>

                  <h3 className="mt-4 text-lg font-medium sm:text-xl">
                    <p className="font-poppins"> Applications as per status </p>
                  </h3>

                  <div className="mt-4 flex flex-row gap-2 grid-cols-4 sm:flex sm:items-center sm:gap-2 text-center items-center md:grid-cols-2 sm:grid-cols-1">
                    <p className="text-blue-600">Applied: {statusCount.Applied}</p>
                    <p className="text-orange-300">Interviewed : {statusCount.Interviewing}</p>
                    <p className="text-green-600">Offered: {statusCount.Offered}</p>
                    <p className="text-red-500">Rejected: {statusCount.Rejected}</p>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>


        <div>
        </div>


        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        Edit
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
