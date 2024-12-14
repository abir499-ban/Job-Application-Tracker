import React from "react";
import {JobApplication} from '../../types/types'

interface JobInfoCardProps {
  applicationInfo: JobApplication[];
}

const JobInfoCard: React.FC<JobInfoCardProps> = ({ applicationInfo }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="font-bold text-xl mb-4">Job Information</h3>
      {applicationInfo.length > 0 ? (
        applicationInfo.map((job) => (
          <div
            key={job._id}
            className="border-b pb-4 mb-4"
          >
            <h4 className="text-lg font-semibold">{job.jobTitle}</h4>
            <p className="text-sm text-gray-500">{job.companyName}</p>
            <p className="text-sm text-gray-500">
              Applied On: {new Date(job.dateApplied).toLocaleDateString()}
            </p>
            <p className="text-sm text-teal-600">Status: {job.status}</p>
          </div>
        ))
      ) : (
        <p>No job applications available</p>
      )}
    </div>
  );
};

export default JobInfoCard;
