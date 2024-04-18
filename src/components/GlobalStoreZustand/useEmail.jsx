import create from 'zustand';

const useStoreEmail = create((set) => ({
  email: '',
  setStringValue: (newValue) => set((state) => ({ email: newValue })),
}));

export default useStoreEmail;
