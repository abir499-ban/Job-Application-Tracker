import {JobApplication} from '../types/types'



export function SortJobs(jobApplication : JobApplication[], inc : boolean){
    console.log("Hii from Gabba")
    const SortedJobApplication : JobApplication[] = jobApplication.sort((a:JobApplication,b : JobApplication)=>{
        const dateA = new Date(a.dateApplied)
        const dateB = new Date(b.dateApplied)
        if(inc) return dateB.getTime() - dateA.getTime();
        else return dateA.getTime() - dateB.getTime();
    })
    return SortedJobApplication
}