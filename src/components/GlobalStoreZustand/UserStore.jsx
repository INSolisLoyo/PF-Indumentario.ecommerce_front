import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userStore = create(  
    
    persist(
        
        (set) => ({

              // Login Usuarios
            setCurrentUser: (currentUser) => set({ user: currentUser }),
            setSessionOpen: (isOpen) => set({ sessionOpen: isOpen}),
            sessionOpen: false,
            
            user: {
              id: '',
              name: '',
              lastname: '',
              dob: '',
              email: '',
              password: '',
              isAdmin: '',
              isActive: ''
            }
        }),
        {
            name: 'user-storage', // Nombre del almacenamiento persistente
            getStorage: () => sessionStorage, // Almacenamiento en sessionStorage
            
        }
    )
)

export default userStore;