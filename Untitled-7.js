
import React from 'react';
import { TrendingUp, Users, DollarSign, Package, ArrowUpRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Sales', value: '$12,450.80', icon: DollarSign, trend: '+14%', color: 'text-emerald-400' },
    { label: 'Total Orders', value: '458', icon: Package, trend: '+8%', color: 'text-blue-400' },
    { label: 'Active Visitors', value: '2,840', icon: Users, trend: '+22%', color: 'text-indigo-400' },
    { label: 'Profit Margin', value: '24.5%', icon: TrendingUp, trend: '+5%', color: 'text-purple-400' },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h2 className="text-3xl font-bold mb-1">Welcome back, Admin</h2>
        <p className="text-zinc-400">Here's what's happening with Fluximart today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-white/5 rounded-lg group-hover:bg-indigo-500/10 transition-colors">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full flex items-center gap-1">
                {stat.trend} <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <p className="text-zinc-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-6 rounded-3xl border border-white/10 h-80 flex flex-col items-center justify-center">
          <TrendingUp className="w-12 h-12 text-zinc-600 mb-4" />
          <p className="text-zinc-500">Sales chart visualization goes here...</p>
        </div>
        
        <div className="glass p-6 rounded-3xl border border-white/10">
          <h3 className="text-lg font-semibold mb-6">Trending Faceless Niches</h3>
          <div className="space-y-4">
            {['AI Automation Agency', 'Mindset & Motivation', 'Finance Hacks', 'History Facts', 'Tech Explainer'].map((niche, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                <span className="font-medium text-sm">{niche}</span>
                <span className="text-xs text-indigo-400 font-bold uppercase">Hot 🔥</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
