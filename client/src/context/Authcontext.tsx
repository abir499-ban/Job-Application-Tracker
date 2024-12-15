import { createContext, useState, ReactNode } from "react";
import { UserCreationPayload, UserLoginPayload, UserType } from '../types/types';

type AuthContextType = {
    user: UserType | null; 
    setuser: React.Dispatch<React.SetStateAction<UserType | null>>; 
    registerUser: (userData: UserCreationPayload) => Promise<void>; 
    loginUser : (userData : UserLoginPayload) => Promise<void>
};

interface AuthContextProviderProps {
    children: ReactNode;
}


const defaultAuthContext: AuthContextType = {
    user: null,
    setuser: () => {}, 
    registerUser: async () => {}, 
    loginUser : async() => {}
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setuser] = useState<UserType | null>(null);

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
            }else{
                throw new Error('error occured');
            }
        } catch (error) {
            throw new Error("Some error occured")
        }
    }

    return (
        <AuthContext.Provider value={{ registerUser, user, setuser,loginUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
export { AuthContextProvider };
