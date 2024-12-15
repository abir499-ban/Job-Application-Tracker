import { createContext, useState, ReactNode } from "react";
import { UserCreationPayload, UserType } from '../types/types';

type AuthContextType = {
    user: UserType | null; 
    setuser: React.Dispatch<React.SetStateAction<UserType | null>>; 
    registerUser: (userData: UserCreationPayload) => Promise<void>; 
};

interface AuthContextProviderProps {
    children: ReactNode;
}


const defaultAuthContext: AuthContextType = {
    user: null,
    setuser: () => {}, 
    registerUser: async () => {}, 
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
                console.log(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ registerUser, user, setuser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
export { AuthContextProvider };
