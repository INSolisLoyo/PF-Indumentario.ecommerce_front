import create from 'zustand';

const useSearchStore = create(set => ({
 searchTerm: '',
 setSearchTerm: (term) => set({ searchTerm: term }),
 searchResults: [],
 setSearchResults: (results) => set({ searchResults: results }),
}));

export default useSearchStore;

