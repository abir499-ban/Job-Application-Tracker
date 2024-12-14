import React from "react";
import { JobApplication } from '../../types/types'
import {Button} from '@material-tailwind/react'
import {useNavigate} from 'react-router-dom'

interface JobInfoCardProps {
    applicationInfo: JobApplication[];
}

const JobInfoCard: React.FC<JobInfoCardProps> = ({ applicationInfo }) => {
    const navigate = useNavigate();
    const EditJobInfo = async(JobId : string) =>{
        try {
            console.log(JobId)
        } catch (error) {
            console.log(error)
        }
        navigate('/editjob')
    }
    return (
        <div className="p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-4">Job Application</h3>
            {applicationInfo.length > 0 ? (
                <div className="flex flex-wrap flex-col gap-4">
                    {applicationInfo.map((job) => (
                        <div
                            key={job._id}
                            className="border-b mb-4 bg-gray-100 rounded-lg p-4"
                        >
                            <h4 className="text-lg font-semibold">{job.jobTitle}</h4>
                            <p className="text-sm text-gray-500">{job.companyName}</p>
                            <p className="text-sm text-gray-500">
                                Applied On: {new Date(job.dateApplied).toDateString()}
                            </p>
                            <p className="text-sm text-teal-600">Status: {job.status}</p>
                            <Button 
                            className="mt-4"
                            placeholder={undefined} 
                            onPointerEnterCapture={undefined} 
                            onPointerLeaveCapture={undefined} 
                            onClick={()=> EditJobInfo(job._id)}
                            > Edit</Button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No job applications available</p>
            )}
        </div>
    );
};

export default JobInfoCard;
