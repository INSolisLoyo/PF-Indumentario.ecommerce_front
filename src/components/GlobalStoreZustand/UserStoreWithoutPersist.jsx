import { create } from 'zustand';

const userStoreWithoutPersist = create((set) => ({
          // Login Usuarios
        setCurrentUserWithoutPersist: (currentUser) => set({ userWithoutPersist: currentUser }), 
        userWithoutPersist: {
          id: '',
          name: '',
          lastname: '',
          dob: '',
          email: '',
          password: '',
          isAdmin: '',
          isActive: ''
        }
    
      })
)

export default userStoreWithoutPersist;