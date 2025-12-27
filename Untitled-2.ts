
import React from 'react';
import { AppView } from '../types';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Video, 
  Truck, 
  ClipboardList, 
  Settings,
  Zap
} from 'lucide-react';

interface SidebarProps {
  activeView: AppView;
  setActiveView: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: AppView.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard },
    { id: AppView.MARKETPLACE, label: 'Marketplace', icon: ShoppingBag },
    { id: AppView.FACELESS_STUDIO, label: 'Faceless Studio', icon: Video },
    { id: AppView.SUPPLIERS, label: 'Suppliers', icon: Truck },
    { id: AppView.ORDERS, label: 'Orders', icon: ClipboardList },
    { id: AppView.SETTINGS, label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-black/40 border-r border-white/10 h-screen sticky top-0 flex flex-col p-4">
      <div className="flex items-center gap-2 px-2 py-6 mb-8 border-b border-white/5">
        <div className="p-2 bg-indigo-600 rounded-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Fluximart
        </h1>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              activeView === item.id 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 glass rounded-2xl border border-white/5 text-xs text-zinc-500">
        <p className="font-semibold text-zinc-300 mb-1 italic">Fluximart Pro</p>
        <p>Your store is connected to 24+ global suppliers.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
