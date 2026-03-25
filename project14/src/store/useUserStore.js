import { create } from 'zustand'

const useUserStore = create((set) => ({
  user: null,
  setUser: () => set({user: JSON.parse(localStorage.getItem('user'))}),

}))

export default useUserStore