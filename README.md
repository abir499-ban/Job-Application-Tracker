# Job Application Tracking System (MERN Stack)

## Overview
The Job Application System is a web-based platform built using the MERN (MongoDB, Express, React, Node.js) stack. This application enables users to browse create, update and track their job application statuses.

## Features

### 1. **User Authentication**
   - Users can sign up, log in, and log out securely.
   - JWT authentication is used for maintaining user sessions.

### 2. **Create Job Applications**
   - Users can create Job Applications, and set feilds like JobTitle, Company Name , and also can add notes.


### 3. **View and Edit Job Applications**
   - Users can view all the Job Applications and edit them as well.
   - There are four status to be assigned to a Job Application : Applied, Interview, Offered and Rejected.

### 4. **Employer Dashboard**
   - Users can view a list of all job applications along with their details.
   - The dashboard also has features a display the total number of applications and 

### 5. **Search and Filters**
   - Users can filter job applications based on status and date applied.

### 6. **Responsive UI**
   - The application is fully responsive and designed with a clean, modern interface using React and Tailwind CSS.
   - A user-friendly experience for both job seekers and employers across various devices (mobile, tablet, desktop).


## Tech Stack

- **Frontend**: 
  - React.js
  - Tailwind CSS
  - Context API
  - Hyper UI
  - Material Tailwind
  
- **Backend**:
  - Node.js
  - Express.js
  - JWT (JSON Web Token) for authentication
  - Bcryptjs (for password hashing)

- **Database**: 
  - MongoDB (NoSQL Database using Mongoose ODM)

- **Deployment**: 
  - Vercel

## Installation

### Prerequisites
Make sure you have `Node.js`, `npm`, and `MongoDB` installed on your system.

### Steps to Run Locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/job-application-system.git
   ```
   
2. Go the project folder
   ```bash
     cd job-application-system
   ```

3. Set up the Backend
   ```bash
     cd server
     npm i
   ```

4. Create .env file in the root directory of the backend folder and create the following keys:
     ```bash
         PASSWORD=<you mongodb atlas password>
         MONGODB_URL=<mongofb atlas url  ( along with password) >
         TOKEN_SECRET=<jwt token secret>
     ```
5. Start the backend server
     ```bash
       npm run start
     ```
6. Set up the frontend in another terminal and start it
   ```bash
       cd client
       npm i
       npm run dev
     ```
     
   
