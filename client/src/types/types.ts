export type JobApplication ={
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