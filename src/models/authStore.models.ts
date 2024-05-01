import { User } from "firebase/auth"

export type AuthStore = {
    user: User | null;
    email: string;

    setUser: (user: User | null) => void;
    setEmail: (email: string) => void;
};