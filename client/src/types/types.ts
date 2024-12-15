export type JobApplication = {
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

export type UserCreationPayload = {
    name: string,
    email: string,
    password: string,
    gender: string,
    role: string
}


export type UserType = {
    _id: string;
    name: string;
    email: string;
    password?: string;
    gender: string;
    role: string;
    __v: number;
};

export type UserLoginPayload = {
    email : string,
    password : string,
}
