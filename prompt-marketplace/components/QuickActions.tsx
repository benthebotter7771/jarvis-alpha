'use client';

import { Plus, Search, Upload, Settings } from 'lucide-react';

export default function QuickActions() {
  const actions = [
    {
      title: 'Neuen Prompt erstellen',
      description: 'Erstelle einen neuen AI-Prompt',
      icon: Plus,
      color: 'bg-blue-100 text-blue-600',
      href: '#',
    },
    {
      title: 'Prompt suchen',
      description: 'Durchsuche die Bibliothek',
      icon: Search,
      color: 'bg-emerald-100 text-emerald-600',
      href: '/library',
    },
    {
      title: 'Prompt teilen',
      description: 'Teile deine Prompts mit der Community',
      icon: Upload,
      color: 'bg-purple-100 text-purple-600',
      href: '#',
    },
    {
      title: 'Einstellungen',
      description: 'Account-Einstellungen anpassen',
      icon: Settings,
      color: 'bg-gray-100 text-gray-600',
      href: '/profile/settings',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Schnellzugriff</h2>
      <div className="space-y-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <a
              key={index}
              href={action.href}
              className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div className={`${action.color} p-3 rounded-lg group-hover:scale-105 transition-transform`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{action.title}</h4>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}