import { create } from 'zustand';

const useFormStore = create((set) => ({
  name: '',
  price: 0,
  category: '',
  material: '',
  colour: '',
  image: null,
  setImage: (image) => set({ image }),
  setName: (name) => set({ name }),
  setPrice: (price) => set({ price }),
  setCategory: (category) => set({ category }),
  setMaterial: (material) => set({ material }),
  setColour: (colour) => set({ colour }),
  resetForm: () => set({
    name: '',
    price: 0,
    category: '',
    material: '',
    colour: '',
    image: null,
  }),
}));

export default useFormStore;
