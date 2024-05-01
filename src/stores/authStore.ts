import { create } from 'zustand'
import { AuthStore } from '../models/authStore.models'

export const useAuthStore = create<AuthStore>((set) => ({
    email: '',
    user: null,

    setUser: (user) => set((state) => ({ ...state, user: user})),
    setEmail: (email) => set((state) => ({ ...state, email: email }))
}))