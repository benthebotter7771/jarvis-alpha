'use client';

import { Clock, Heart, MessageSquare, Download } from 'lucide-react';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'like',
      title: 'Du hast einen Prompt geliked',
      description: '"Steuererklärung für Freiberufler"',
      time: 'Vor 2 Stunden',
      icon: Heart,
      color: 'text-red-500 bg-red-50',
    },
    {
      id: 2,
      type: 'comment',
      title: 'Neuer Kommentar auf deinem Prompt',
      description: '"Danke, hat mir sehr geholfen!"',
      time: 'Vor 5 Stunden',
      icon: MessageSquare,
      color: 'text-blue-500 bg-blue-50',
    },
    {
      id: 3,
      type: 'download',
      title: 'Prompt heruntergeladen',
      description: '"Handwerker-Rechnung Vorlage"',
      time: 'Gestern',
      icon: Download,
      color: 'text-green-500 bg-green-50',
    },
    {
      id: 4,
      type: 'new',
      title: 'Neuer Prompt erstellt',
      description: '"Arztbrief für Patienten"',
      time: 'Vor 2 Tagen',
      icon: Clock,
      color: 'text-purple-500 bg-purple-50',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Aktuelle Aktivitäten</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Alle anzeigen
        </button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className={`${activity.color} p-2 rounded-full`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{activity.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}