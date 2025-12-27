
import React from 'react';
import { SUPPLIERS_LIST } from '../constants.tsx';
import { Globe, MapPin, Zap, ExternalLink } from 'lucide-react';

const Suppliers: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold mb-1">Supplier Directory</h2>
        <p className="text-zinc-400">Connect Fluximart to your preferred global and local fulfillment partners.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPLIERS_LIST.map((supplier) => (
          <div key={supplier.id} className="glass p-6 rounded-3xl border border-white/10 flex flex-col hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10">
                <img src={supplier.logo} alt={supplier.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{supplier.name}</h3>
                <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded font-bold uppercase">
                  {supplier.category}
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 flex-1 mb-6 leading-relaxed">
              {supplier.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <MapPin className="w-3.5 h-3.5" /> {supplier.region}
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <Zap className="w-3.5 h-3.5" /> {supplier.speed}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {supplier.products.map(p => (
                <span key={p} className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-zinc-500">{p}</span>
              ))}
            </div>

            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" /> Visit Portal <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
