import React from 'react';
import useStore from '../../Zustand/store';

const SearchResults = () => {
 const products = useStore(state => state.products);

 return (
    <div className="mt-4">
      {products.map(product => (
        <div key={product.id} className="p-4 border rounded-lg">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
 );
};

export default SearchResults;