
import React, { useState } from 'react';
import { AppView } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import FacelessStudio from './pages/FacelessStudio';
import Suppliers from './pages/Suppliers';
import { Bell, Search, User } from 'lucide-react';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.DASHBOARD);

  const renderView = () => {
    switch (activeView) {
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.MARKETPLACE:
        return <Marketplace />;
      case AppView.FACELESS_STUDIO:
        return <FacelessStudio />;
      case AppView.SUPPLIERS:
        return <Suppliers />;
      case AppView.ORDERS:
        return (
          <div className="p-8 flex items-center justify-center h-[60vh] text-zinc-500 flex-col space-y-4">
            <p>Order management is integrated with Shopify and WooCommerce APIs.</p>
            <button className="bg-indigo-600 px-6 py-2 rounded-xl text-white font-semibold">Connect Store</button>
          </div>
        );
      case AppView.SETTINGS:
        return (
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold">Store Settings</h2>
            <div className="glass p-6 rounded-2xl border border-white/10 max-w-2xl space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">API Endpoint</label>
                <input type="text" value="https://api.fluximart.com/v1" disabled className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-zinc-500" />
              </div>
              <div className="flex items-center gap-4">
                <button className="bg-white/5 px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition-colors">Regenerate Key</button>
                <button className="text-red-400 text-sm font-medium">Reset All Integrations</button>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-20 border-b border-white/5 glass sticky top-0 z-10 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 flex-1">
            <span className="text-sm font-medium text-zinc-400 italic">Fluximart.com</span>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">Live Session</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-zinc-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full border-2 border-black" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-white/10">
              <div className="text-right">
                <p className="text-sm font-semibold">Alex Rivera</p>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Store Owner</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center border-2 border-white/10 overflow-hidden shadow-lg shadow-indigo-500/20">
                <img src="https://picsum.photos/seed/user/100" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1">
          {renderView()}
        </div>
      </main>
    </div>
  );
};

export default App;
