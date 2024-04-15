import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const userStore = create(  
    
    persist(
        
        (set) => ({

              // Login Usuarios
            // setCurrentUser: (currentUser) => set({ user: currentUser }),
            // setRegisteredUser: (isRegistered) => set({ registeredUser: isRegistered}),
            setCurrentUser: (currentUser) => set({ user: currentUser }),
            setRegisteredUser: (isRegistered) => set({ registeredUser: isRegistered }),
            registeredUser: false,
            
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