import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  allProducts: [],
  totalPages: 0,
  currentPage: 0,

  addProducts: async (
    name,
    category,
    minPrice,
    maxPrice,
    material,
    colour,
    productLimit,
    pageNumber,
    orderType,
    order
  ) => {
    try {
      const { data } = await axios(`http://localhost:3001/products`, {
        params: {
          name,
          category,
          minPrice,
          maxPrice,
          material,
          colour,
          productLimit,
          pageNumber,
          orderType,
          order,
        },
      });
      set({
        allProducts: data.items,
        totalPages: data.totalPages,
        currentPage: data.currentPage,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
}));

export default useStore;
