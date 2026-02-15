'use client';

import { TrendingUp, Users, FileText, Star } from 'lucide-react';

export default function DashboardStats() {
  const stats = [
    {
      title: 'Gespeicherte Prompts',
      value: '24',
      change: '+3 diese Woche',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600',
    },
    {
      title: 'Community-Punkte',
      value: '156',
      change: '+12 diese Woche',
      icon: Star,
      color: 'bg-amber-100 text-amber-600',
    },
    {
      title: 'Aktive Projekte',
      value: '3',
      change: '1 neu',
      icon: TrendingUp,
      color: 'bg-emerald-100 text-emerald-600',
    },
    {
      title: 'Folgende Nutzer',
      value: '8',
      change: '+2 neue',
      icon: Users,
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Deine Statistik</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <Icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}