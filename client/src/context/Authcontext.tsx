import { createContext, useState, ReactNode, useEffect } from "react";
import { UserCreationPayload, UserLoginPayload, UserType } from '../types/types';

type AuthContextType = {
    user: UserType | null; 
    setuser: React.Dispatch<React.SetStateAction<UserType | null>>; 
    registerUser: (userData: UserCreationPayload) => Promise<void>; 
    loginUser : (userData : UserLoginPayload) => Promise<void>;
    checkUserLogin : () => Promise<void>;
    logOut : () => Promise<void>;
};

interface AuthContextProviderProps {
    children: ReactNode;
}


const defaultAuthContext: AuthContextType = {
    user: null,
    setuser: () => {}, 
    registerUser: async () => {}, 
    loginUser : async() => {},
    checkUserLogin : async() => {},
    logOut : async() => {},
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setuser] = useState<UserType | null>(null);
    useEffect(()=>{
        checkUserLogin();
    }, [])



    //check User login middleware
    const checkUserLogin = async() =>{
        //console.log('Hi from checkUserLogin')
        try {
            let authToken = localStorage.getItem('token') || null;
            
            if(authToken === null){
                //console.log('Token😣: ',authToken)
                setuser(null);
                return;
            }
            const result = await fetch(`http://localhost:8000/user/verify/${authToken}`, {
                method:"GET",
                headers:{
                    'Content-Type': 'application/json',
                }
            })

            const data = await result.json();
            if(data.success === true){
                setuser(data.user);
            }else{
                setuser(null)
            }

        } catch (error) {
            throw new Error('error occured');
        }
    }

    // Register user
    const registerUser = async (userData: UserCreationPayload) => {
        try {
            console.log("From AuthContext")
            console.table(userData)
            const result = await fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...userData }),
            });
            const data = await result.json();
            if (data.success === true) {
                console.log("User successfully registered")
            } else {
                throw new Error('error occured');
            }
        } catch (error) {
            throw new Error('error occured');
        }
    };

    //Login User
    const loginUser = async(userData : UserLoginPayload) =>{
        try {
            console.log("FromAuthcontext", userData);
            const result = await fetch('http://localhost:8000/user/login', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...userData }),
            })
            const data = await result.json()
            if(data.success === true){
                localStorage.setItem('token', data.token);
                setuser(data.sanitizedUser);
                console.log('Sucessfull Login')
                console.table(data.sanitizedUser)
            }else{
                throw new Error('error occured');
            }
        } catch (error) {
            throw new Error("Some error occured")
        }
    }

    //log out
    const logOut = async() =>{
        try {
            console.log('Token cleared')
            localStorage.clear();
        } catch (error) {
            throw new Error('Error occured');
        }
    }

    return (
        <AuthContext.Provider value={{ registerUser, user, setuser,loginUser, checkUserLogin, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
export { AuthContextProvider };
