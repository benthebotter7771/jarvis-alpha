'use client';

import { MessageSquare, Eye, Clock } from 'lucide-react';

export default function RecentTopics() {
  const topics = [
    {
      id: 1,
      title: 'Wie optimiere ich Prompts für ChatGPT?',
      author: 'Max Schmidt',
      category: 'Tipps & Tricks',
      replies: 24,
      views: 156,
      lastActivity: 'Vor 30 Minuten',
      isNew: true,
    },
    {
      id: 2,
      title: 'Beste Prompts für Steuerberater gesucht',
      author: 'Anna Müller',
      category: 'Berufsspezifisch',
      replies: 18,
      views: 89,
      lastActivity: 'Vor 2 Stunden',
      isNew: false,
    },
    {
      id: 3,
      title: 'Probleme mit Prompt-Formatierung',
      author: 'Thomas Weber',
      category: 'Fragen & Hilfe',
      replies: 12,
      views: 67,
      lastActivity: 'Vor 5 Stunden',
      isNew: true,
    },
    {
      id: 4,
      title: 'Neue AI-Tools für Handwerker',
      author: 'Lisa Bauer',
      category: 'Neue Trends',
      replies: 31,
      views: 189,
      lastActivity: 'Gestern',
      isNew: false,
    },
    {
      id: 5,
      title: 'Wie teile ich meine Prompts?',
      author: 'David Klein',
      category: 'Allgemein',
      replies: 8,
      views: 45,
      lastActivity: 'Vor 3 Tagen',
      isNew: false,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Aktuelle Themen</h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Alle Themen
        </button>
      </div>

      <div className="space-y-4">
        {topics.map((topic) => (
          <a
            key={topic.id}
            href="#"
            className="block p-4 hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                    {topic.title}
                  </h4>
                  {topic.isNew && (
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">
                      Neu
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="font-medium text-gray-700">{topic.author}</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {topic.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{topic.replies}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{topic.views}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{topic.lastActivity}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}