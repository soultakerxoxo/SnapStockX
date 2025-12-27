
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants.tsx';
import { Search, Filter, ShoppingCart, Plus } from 'lucide-react';
import { generateProductSEO } from '../services/geminiService';

const Marketplace: React.FC = () => {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleImport = async (productId: string, productName: string) => {
    setLoadingId(productId);
    // Simulate AI optimization during import
    const seoDesc = await generateProductSEO(productName);
    console.log("Imported with SEO Description:", seoDesc);
    alert(`Success! "${productName}" imported to your store with AI-optimized SEO content.`);
    setLoadingId(null);
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-1">Global Marketplace</h2>
          <p className="text-zinc-400">Discover winning products from vetted suppliers.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
            />
          </div>
          <button className="p-2 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10">
            <Filter className="w-5 h-5 text-zinc-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="glass rounded-2xl border border-white/10 overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              {product.trending && (
                <div className="absolute top-3 left-3 bg-indigo-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Trending
                </div>
              )}
              <button className="absolute bottom-3 right-3 p-2 bg-black/60 backdrop-blur-md rounded-full text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                <span className="text-indigo-400 font-bold">${product.price}</span>
              </div>
              <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{product.description}</p>
              
              <button 
                onClick={() => handleImport(product.id, product.name)}
                disabled={loadingId === product.id}
                className="w-full bg-white/5 hover:bg-indigo-600 border border-white/10 hover:border-indigo-500 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                {loadingId === product.id ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                {loadingId === product.id ? 'Importing...' : 'Import to Store'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
