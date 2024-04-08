import { create } from 'zustand';

const useFormStore = create((set) => ({
  name: '',
  price: 0,
  gender: '',
  image: null,
  colour: '',
  material: '',
  category: '',
  description: '',
  setImage: (image) => set({ image }),
  setName: (name) => set({ name }),
  setPrice: (price) => set({ price }),
  setCategory: (category) => set({ category }),
  setMaterial: (material) => set({ material }),
  setColour: (colour) => set({ colour }),
  setGender: (gender) => set({ gender }),
  setDescription: (description) => set({ description }),
  resetForm: () => set({
    name: '',
    price: 0,
    gender: '',
    image: null,
    colour: '',
    material: '',
    category: '',
    description: '',
  }),
}));

export default useFormStore;
